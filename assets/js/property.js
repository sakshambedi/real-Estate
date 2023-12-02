class position {
    constructor(lat = 0, lng = 0) {
        this.lat = lat;
        this.lng = lng;
    }
}


class Bathrooms {
    constructor(total = 0, partial = 0) {
        this.total = total;
        this.partial = partial;
    }
}

class InteriorFeatures {
    constructor(appliancesIncluded = "", fixturesIncluded = "", flooring = "") {
        this.appliancesIncluded = appliancesIncluded;
        this.fixturesIncluded = fixturesIncluded;
        this.flooring = flooring;
    }
}

class BuildingFeatures {
    constructor(features = "", fireProtection = "", squareFootage = 0.0, structures = "") {
        this.features = features;
        this.fireProtection = fireProtection;
        this.squareFootage = squareFootage;
        this.structures = structures;
    }
}

class HeatingCooling {
    constructor(cooling = "", heatingType = "") {
        this.cooling = cooling;
        this.heatingType = heatingType;
    }
}

class Utilities {
    constructor(utilitySewer = "", municipalSewageSystem = "") {
        this.utilitySewer = utilitySewer;
        this.municipalSewageSystem = municipalSewageSystem;
    }
}

class NeighbourhoodFeatures {
    constructor(amenitiesNearby = "") {
        this.amenitiesNearby = amenitiesNearby;
    }
}

class Parking {
    constructor(parkingType = "") {
        this.parkingType = parkingType;
    }
}

class Rooms {
    constructor(diningRoom = "", kitchen = "", livingRoom = "", mudRoom = "", other = "", bedroom = "") {
        this.diningRoom = diningRoom;
        this.kitchen = kitchen;
        this.livingRoom = livingRoom;
        this.mudRoom = mudRoom;
        this.other = other;
        this.bedroom = bedroom;
    }
}

class Property {
    constructor(propertyDetails) {
        this.id = propertyDetails.id || "";
        this.price = propertyDetails.price || 0.0;
        this.address = propertyDetails.address || "";
        this.position = new position(propertyDetails.position.lat || 0, propertyDetails.position.lng || 0);
        this.MLSNumber = propertyDetails["MLS Number"] || "";
        this.listingDescription = propertyDetails["Listing Description"] || "";
        this.bathrooms = new Bathrooms(propertyDetails.Bathrooms.total || 0, propertyDetails.Bathrooms.partial || 0);
        this.bedrooms = propertyDetails.Bedrooms || 0;
        this.interiorFeatures = new InteriorFeatures(
            propertyDetails["Interior Features"]["Appliances Included"] || "",
            propertyDetails["Interior Features"]["Fixtures Included"] || "",
            propertyDetails["Interior Features"].Flooring || ""
        );
        this.buildingFeatures = new BuildingFeatures(
            propertyDetails["Building Features"].Features || "",
            propertyDetails["Building Features"]["Fire Protection"] || "",
            propertyDetails["Building Features"]["Square Footage"] || 0.0,
            propertyDetails["Building Features"].Structures || ""
        );
        this.heatingCooling = new HeatingCooling(
            // propertyDetails["Heating & Cooling"].Cooling || "",
            // propertyDetails["Heating & Cooling"]["Heating Type"] || ""
        );
        this.utilities = new Utilities(
            propertyDetails.Utilities["Utility Sewer"] || "",
            propertyDetails.Utilities["Municipal sewage system"] || ""
        );
        this.neighbourhoodFeatures = [];

        if (propertyDetails["Neighbourhood Features"]) {
            var neighbourhoodFeaturesArray = propertyDetails["Neighbourhood Features"];
            for (var i = 0; i < neighbourhoodFeaturesArray.length; i++) {
                var feature = neighbourhoodFeaturesArray[i];
                this.neighbourhoodFeatures.push(new NeighbourhoodFeatures(feature["Amenities Nearby"] || ""));
            }
        }

        this.parking = new Parking(propertyDetails.Parking["Parking Type"] || "");
        this.rooms = new Rooms(
            // propertyDetails.Rooms["Main Level"]["Dining room"] || "",
            // propertyDetails.Rooms["Main Level"].Kitchen || "",
            // propertyDetails.Rooms["Main Level"]["Living room"] || "",
            // propertyDetails.Rooms["Main Level"]["Mud room"] || "",
            // propertyDetails.Rooms["Main Level"].other || "",
            // propertyDetails.Rooms["Upper Level"].Bedroom || ""
        );
        this.link = propertyDetails.Link || "";
    }
}

export default Property;