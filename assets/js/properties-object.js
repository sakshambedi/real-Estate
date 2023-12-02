// import { Property } from "assets/js/property.js";
import Property from './property.js';

class PropertiesObject {

    constructor() {
        // Initialize an empty array to store objects
        this.propertiesArr = [];
    }

    // Method to add objects to the array
    addObject(object) {
        this.propertiesArr.push(object);
    }

    // Method to get the array of objects
    getObjectArray() {
        return this.propertiesArr;
    }

    // Get object by id
    getObjectById(id) {
        return this.propertiesArr.find(obj => obj.id === id);
    }

    // Getting the json data
    async fetchDataFromJSON(jsonFile) {
        try {
            const response = await fetch(jsonFile);
            const data = await response.json();

            const properties = data.properties;

            // Add each object from the JSON array to the propertiesArr
            properties.forEach((property) => {
                const tempProperty = new Property(property);
                this.addObject( property);
            });

            console.log("Data fetched successfully:", this.getObjectArray());
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

// Example usage:

const propertyDetails = {
    "id": 1,
    "price": 180000,
    "address": "919 Manitoba Avenue Winnipeg, Manitoba R2X0J9",
    "position": {
        lat: 49.8498284,
        lng: -97.1498506,
    },
    "MLS Number": 202330547,
    "Listing Description": "4B//Winnipeg/SS NOW, OFFERS ANYTIME! 1012 SF home. Features beautiful character, 3 bedroom, 1 bathroom has clawfoot tub, large living room, formal dining room, kitchen updated in 2003, good quiet location. Classic front verandah, back mudroom has newer insulation and pine finish(both not included in SF) property has tons of parking in the back, large shed, covered back porch. Hi-E gas furnace(15), central air, HWT(15), Updated Electrical(100 amp), some windows(03), shingles(06). Hardwoods and vinyl flooring. Some paint and clean up will make this house shine! Long time owner moving out of the city. Great for the first time home buyer or an investment property. Make your appointment today! (228617188)",
    "Bathrooms": {
        "total": 0,
        "partial": 0
    },
    "Bedrooms": 3,
    "Interior Features": {
        "Appliances Included": "Hood Fan",
        "Fixtures Included": "Ceiling fans",
        "Flooring": "Laminate, Wood"
    },
    "Building Features": {
        "Features": "Private setting, Back lane",
        "Fire Protection": "Smoke Detectors",
        "Square Footage": 1012,
        "Structures": "Deck, Porch"
    },
    "Heating & Cooling": {
        "Cooling": "Central air conditioning",
        "Heating Type": "High-Efficiency Furnace, Forced air (Natural gas)"
    },
    "Utilities": {
        "Utility Sewer": "Water",
        "Municipal sewage system": "Municipal water"
    },
    "Neighbourhood Features": {
        "Amenities Nearby": "Shopping"
    },
    "Parking": {
        "Parking Type": "None, Other, Rear"
    },
    "Rooms": {
        "Main Level": {
            "Dining room": "11 ft ,1 in x 9 ft ,5 in",
            "Kitchen": "11 ft ,1 in x 9 ft ,1 in",
            "Living room": "11 ft ,6 in x 11 ft ,4 in",
            "Mud room": "9 ft ,3 in x 7 ft",
            "other": "11 ft ,3 in x 3 ft ,9 in"
        },
        "Upper Level": {
            "Bedroom": [
                "11 ft ,1 in x 7 ft ,9 in",
                "11 ft ,1 in x 7 ft ,7 in",
                "11 ft ,8 in x 9 ft ,4 in"
            ]
        }
    },
    "Link": "https://www.realtor.ca/real-estate/26286641/919-manitoba-avenue-winnipeg-shaughnessy-heights"
};

const myProperty = new Property(propertyDetails);
console.log(myProperty);  


// const htmlContent = `
//     <p>${myProperty.address}</p>
//     <p>$ ${myProperty.price}</p>
//     <p>${myProperty.bedrooms} 🛏️ 
//     ${myProperty.bathrooms.total} 🛁 </p>
// `;


//Testing fetching

// const propertiesObject = new PropertiesObject();
// propertiesObject.fetchDataFromJSON('../assets/database/database.json');

// const htmlContent2 = `
//     <p>${propertiesObject.getObject(0).address}</p>
//     <p>$ ${propertiesObject.getObjectArray[1].price}</p>
//     <p>${propertiesObject.getObjectArray[1].bedrooms} 🛏️ 
//     ${propertiesObject.getObjectArray[1].bathrooms.total} 🛁 </p>
// `;

// propertyDetailsContainer.innerHTML = htmlContent2;
// const propertyWithId1 = propertiesObject.getObjectById(1);
// console.log(propertyWithId1);

