// Adding dependencies
// const PropertiesObject = require("/assets/js/properties-object.js");

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
function toProperties(json) {
    return cast(JSON.parse(json), typeMap.Properties);
}

function propertiesToJson(value) {
    return JSON.stringify(uncast(value, typeMap.Properties), null, 2);
}

function invalidValue(typ, val, key, parent = '') {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ) {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val, typ, getProps, key = '', parent = '') {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val) {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}

function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}

function l(typ) {
    return { literal: typ };
}

function a(typ) {
    return { arrayItems: typ };
}

function u(...typs) {
    return { unionMembers: typs };
}

function o(props, additional) {
    return { props, additional };
}

function m(additional) {
    return { props: [], additional };
}

function r(name) {
    return { ref: name };
}

const typeMap = {
    "Properties": o([
        { json: "properties", js: "properties", typ: a(r("Property")) },
    ], false),
    "Property": o([
        { json: "id", js: "id", typ: 0 },
        { json: "price", js: "price", typ: 0 },
        { json: "address", js: "address", typ: "" },
        { json: "MLS Number", js: "MLS Number", typ: 0 },
        { json: "Listing Description", js: "Listing Description", typ: "" },
        { json: "Bathrooms", js: "Bathrooms", typ: r("Bathrooms") },
        { json: "Bedrooms", js: "Bedrooms", typ: 0 },
        { json: "Interior Features", js: "Interior Features", typ: r("InteriorFeatures") },
        { json: "Building Features", js: "Building Features", typ: r("BuildingFeatures") },
        { json: "Heating & Cooling", js: "Heating & Cooling", typ: r("HeatingCooling") },
        { json: "Utilities", js: "Utilities", typ: r("Utilities") },
        { json: "Neighbourhood Features", js: "Neighbourhood Features", typ: r("NeighbourhoodFeatures") },
        { json: "Parking", js: "Parking", typ: r("Parking") },
        { json: "Rooms", js: "Rooms", typ: r("Rooms") },
        { json: "Link", js: "Link", typ: "" },
    ], false),
    "Bathrooms": o([
        { json: "total", js: "total", typ: 0 },
        { json: "partial", js: "partial", typ: 0 },
    ], false),
    "BuildingFeatures": o([
        { json: "Features", js: "Features", typ: "" },
        { json: "Fire Protection", js: "Fire Protection", typ: "" },
        { json: "Square Footage", js: "Square Footage", typ: 0 },
        { json: "Structures", js: "Structures", typ: "" },
    ], false),
    "HeatingCooling": o([
        { json: "Cooling", js: "Cooling", typ: "" },
        { json: "Heating Type", js: "Heating Type", typ: "" },
    ], false),
    "InteriorFeatures": o([
        { json: "Appliances Included", js: "Appliances Included", typ: "" },
        { json: "Fixtures Included", js: "Fixtures Included", typ: "" },
        { json: "Flooring", js: "Flooring", typ: "" },
    ], false),
    "NeighbourhoodFeatures": o([
        { json: "Amenities Nearby", js: "Amenities Nearby", typ: "" },
    ], false),
    "Parking": o([
        { json: "Parking Type", js: "Parking Type", typ: "" },
    ], false),
    "Rooms": o([
        { json: "Main Level", js: "Main Level", typ: r("MainLevel") },
        { json: "Upper Level", js: "Upper Level", typ: r("UpperLevel") },
    ], false),
    "MainLevel": o([
        { json: "Dining room", js: "Dining room", typ: "" },
        { json: "Kitchen", js: "Kitchen", typ: "" },
        { json: "Living room", js: "Living room", typ: "" },
        { json: "Mud room", js: "Mud room", typ: "" },
        { json: "other", js: "other", typ: "" },
    ], false),
    "UpperLevel": o([
        { json: "Bedroom", js: "Bedroom", typ: a("") },
    ], false),
    "Utilities": o([
        { json: "Utility Sewer", js: "Utility Sewer", typ: "" },
        { json: "Municipal sewage system", js: "Municipal sewage system", typ: "" },
    ], false),
};

// Function to fetch and read JSON file
function readJSONFile(filePath) {
  fetch(filePath)
    .then((response) => {
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error(`Failed to fetch JSON file: ${response.status}`);
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Do something with the JSON data
      console.log(data);

      // Assuming your PropertiesObject constructor expects an object with a 'properties' property
      const propertiesObject = toProperties(data);

      // Now you can work with the propertiesObject
      console.log(propertiesObject);

      // Access specific properties
      console.log(propertiesObject.properties); // Array of properties

      // Access details of the first property
      const firstProperty = propertiesObject.properties[0];
      console.log(firstProperty.id);
      console.log(firstProperty.price);
      console.log(firstProperty.address);
    })
    .catch((error) => {
      console.error(error);
    });
}

readJSONFile("assets/database/database.json");
