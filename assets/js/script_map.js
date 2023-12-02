

// Initialize and add the map
let map;

async function initMap() {
  const position_initial = { lat: 49.8954, lng: -97.1385 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Winnipeg
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position_initial,
    mapId: "DEMO_MAP_ID",
  });

  // Resize the map 
  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });

  // The markers

  for (const property of properties) {
    const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(property),
      position: property.position,
      title: property.description,
    });
    AdvancedMarkerElement.addListener("click", () => {
      toggleHighlight(AdvancedMarkerElement, property);
    });
  }

  function toggleHighlight(markerView, property) {
    if (markerView.content.classList.contains("highlight")) {
      markerView.content.classList.remove("highlight");
      markerView.zIndex = null;
    } else {
      markerView.content.classList.add("highlight");
      markerView.zIndex = 1;
    }
  }

  // Build markers
  function buildContent(property) {
    const content = document.createElement("div");
  
    content.classList.add("property");
    content.innerHTML = `
      <div class="icon">
        <i aria-hidden="true" class="fa fa-icon fa-${property.type}" title="${property.type}"></i>
        <img src="${property.imagePath}" alt="Highlighted Image" class="highlighted-image">
        <span class="sr-only">${property.type}</span>
      </div>
      
      <div class="details">
          <div class="price">${property.price}</div>
          <div class="address">${property.address}</div>
          <div class="features">
          <div>
              <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
              <span class="fa-sr-only">bedroom</span>
              <span>${property.bed}</span>
          </div>
          <div>
              <i aria-hidden="true" class="fa fa-bath fa-lg bath" title="bathroom"></i>
              <span class="fa-sr-only">bathroom</span>
              <span>${property.bath}</span>
          </div>
          <div>
              <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="size"></i>
              <span class="fa-sr-only">size</span>
              <span>${property.size} ft<sup>2</sup></span>
          </div>
          </div>
      </div>
      `;
    return content;
  }

  // Generate sidebard content
  for (const property of properties) {
    const container = document.getElementById("property-listing");
    container.appendChild(sidebar_content(property));
  }

  //Build sidebar content
  function sidebar_content(property){
    const content = document.createElement("div");
    content.classList.add("property-card");
    content.innerHTML = `
    <img src="${property.imagePath}" />
    <div class="address">${property.address} </div> <br>
    <div class="price">${property.price} <br>
    <i class="fa-solid fa-bed" style="color: #0f4c75;"></i> ${property.bed} <i class="fa-solid fa-bath" style="color: #0f4c75;"></i> ${property.bath} <br>
    `;
    return content;
  }
}




const properties = [
  {
    id: 1,
    address: "919 Manitoba Avenue Winnipeg, Manitoba R2X0J9",
    description: "Single family house with modern design",
    price: "$ 180,000",
    type: "home",
    bed: 3,
    bath: 0,
    size: 1012,
    position: {
      lat: 49.916605, 
      lng: -97.154429,
    },
    imagePath: "../assets/housing images/house1/house1_1.jpeg",
  },
  {
    id: 2,
    address: "40 Jette Cove Winnipeg, Manitoba R2C5T4",
    description: "Townhouse with friendly neighbors",
    price: "$ 619,999",
    type: "home",
    bed: 4,
    bath: 3,
    size: 1789,
    position: {
      lat: 49.874695, 
      lng: -97.147562,
    },
    imagePath: "../assets/housing images/house2/house2_1.jpeg",
  },
  {
    id: 3,
    address: "638 Gilmore Avenue Winnipeg, Manitoba R2G2P6",
    description: "Spacious house great for small business",
    price: "$ 349,900",
    type: "home",
    bed: 3,
    bath: 2,
    size: 1076,
    position: {
      lat: 49.911520, 
      lng: -97.114946,
    },
    imagePath: "../assets/housing images/house3/house3_1.jpeg",
  },
  {
    id: 4,
    address: "362 Tyson Trail Winnipeg, Manitoba R3W0K9",
    description: "A lovely store on busy road",
    price: "$  455,900",
    type: "home",
    bed: 3,
    bath: 3,
    size: 1551,
    position: {
      lat: 49.889959, 
      lng: -97.110312,
    },
    imagePath: "../assets/housing images/house4/house4_1.jpeg",
  },
  {
    id: 5,
    address: "393 Maryland Street Winnipeg, Manitoba R3G1M1",
    description: "Single family house near golf club",
    price: "$ 165,000",
    type: "home",
    bed: 3,
    bath: 1,
    size: 1264,
    position: {
      lat: 49.898364, 
      lng: -97.172625,
    },
    imagePath: "../assets/housing images/house5/house5_1.jpeg",
  },
  {
    id: 6,
    address: "484 Agnes Street Winnipeg, Manitoba R3G1N6",
    description: "Multifloor large warehouse",
    price: "$ 44,900",
    type: "home",
    bed: 0,
    bath: 0,
    size: 1350,
    position: {
      lat: 49.880337, 
      lng: -97.173311,
    },
    imagePath: "../assets/housing images/house6/house6_1.jpeg",
  },
  {
    id: 7,
    address: "1844 Pacific Avenue Winnipeg, Manitoba R2R0G1",
    description: "3 storey townhouse with 2 car garage",
    price: "$ 339,900",
    type: "home",
    bed: 3,
    bath: 2,
    size: 1076,
    position: {
      lat: 49.898585, 
      lng: -97.146532,
    },
    imagePath: "../assets/housing images/house7/house7_1.jpeg"
  },
  {
    id: 8,
    address: "219 Tyson Trail Winnipeg, Manitoba R3W0R1",
    description: "Single family house in great school zone",
    price: "$ 619,900",
    type: "home",
    bed: 4,
    bath: 3,
    size: 1665,
    position: {
      lat: 49.875691, 
      lng: -97.113402,
    },
    imagePath: "../assets/housing images/house8/house8_1.jpeg"
  },
  {
    id: 9,
    address: "503 3080 Pembina Highway Winnipeg, Manitoba R3T4N1",
    description: "2 storey store with large storage room",
    price: "$ 209,900",
    type: "home",
    bed: 2,
    bath: 1,
    size: 1100,
    position: {
      lat: 49.860864, 
      lng: -97.153742,
    },
    imagePath: "../assets/housing images/house9/house9_1.jpeg"
  },
  {
    id: 10,
    address: "475 Centennial Street Winnipeg, Manitoba R3N1P8",
    description: "Single family house",
    price: "$ 599,900",
    type: "home",
    bed: 5,
    bath: 4,
    size: 1652,
    position: {
      lat: 49.881664, 
      lng: -97.187559,
    },
    imagePath: "../assets/housing images/house10/house10_1.jpeg"
  },
  
];
initMap();