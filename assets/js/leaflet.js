  const map = L.map("map", {
    center: [-7.7147, 113.215],
    zoom: 12,
    zoomControl: false,
    zIndex: 10000,  
  });

  L.control.zoom({ position: 'topright' }).addTo(map);
  L.control.fullscreen({ position: 'topright' }).addTo(map);

  const imageryLayer = L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18
  }).addTo(map);

  const referenceLayer = L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18,
    subdomains: ['server', 'services'],
    attribution: 'Sources: Esri'
  }).addTo(map);

const polygons = [
  L.polygon([
    [-7.737573, 113.209959],
    [-7.743834, 113.224055],
    [-7.664195, 113.284977],
    [-7.66837, 113.221787],
  ], { color: "#fff", weight: 2, fillOpacity: 0.2 }),
  L.polygon([
    [-7.716519, 113.144826],
    [-7.729276, 113.182592],
    [-7.797783, 113.176411],
    [-7.786767, 113.151526],
  ], { color: "#fff", weight: 2, fillOpacity: 0.2 }),
  L.polygon([
    [-7.739757, 113.249791],
    [-7.77633, 113.293424],
    [-7.789533, 113.269485],
    [-7.78521, 113.237998],
  ], { color: "#fff", weight: 2, fillOpacity: 0.2 }),
];

const myIcon = L.icon({ iconUrl: "../assets/images/danger-drone.png", iconSize: [30, 30], iconAnchor: [15, 30] });
const myIcon2 = L.icon({ iconUrl: "../assets/images/departure-drone.png", iconSize: [30, 30], iconAnchor: [15, 30] });
const myIcon3 = L.icon({ iconUrl: "../assets/images/arrival-drone.png", iconSize: [30, 30], iconAnchor: [15, 30] });

const allMarkers = [];

const createMarker = (coords, icon, title, alt, droneId) => {
  const marker = L.marker(coords, { icon, title, alt, droneId }).addTo(map);
  allMarkers.push(marker);
  marker.bindTooltip("Drone ID: " + droneId, { direction: "top", offset: [0, -30], permanent: true });
  return marker;
};

const marker1 = createMarker([-7.728188, 113.297433], myIcon, "Marker 1", "Marker 1", "123");
const marker2 = createMarker([-7.720771, 113.224477], myIcon2, "Marker 2", "Marker 2", "456");
const marker3 = createMarker([-7.789078, 113.170676], myIcon3, "Marker 3", "Marker 3", "789");

const filterMarkers = () => {
  const latitudeRange1 = parseFloat(document.getElementsByName("latitude-range1")[0].value);
  const latitudeRange2 = parseFloat(document.getElementsByName("latitude-range2")[0].value);
  const longitudeRange1 = parseFloat(document.getElementsByName("longitude-range1")[0].value);
  const longitudeRange2 = parseFloat(document.getElementsByName("longitude-range2")[0].value);
  const altitudeRange1 = parseFloat(document.getElementsByName("altitude-range1")[0].value);
  const altitudeRange2 = parseFloat(document.getElementsByName("altitude-range2")[0].value);

  allMarkers.forEach(marker => {
    const position = marker.getLatLng();
    const latitude = position.lat;
    const longitude = position.lng;
    const altitude = marker.options.altitude;

    const isVisible =
      (isNaN(latitudeRange1) || isNaN(latitudeRange2) || (latitude >= latitudeRange1 && latitude <= latitudeRange2)) &&
      (isNaN(longitudeRange1) || isNaN(longitudeRange2) || (longitude >= longitudeRange1 && longitude <= longitudeRange2)) &&
      (isNaN(altitudeRange1) || isNaN(altitudeRange2) || (altitude >= altitudeRange1 && altitude <= altitudeRange2));

    marker.setOpacity(isVisible ? 1 : 0);

    if (!isVisible) {
      marker.unbindTooltip();
    } else if (!marker.getTooltip()) {
      const droneId = marker.options.droneId;
      const tooltip = L.tooltip({ direction: 'top', offset: [0, -30] }).setContent('Drone ID: ' + droneId);
      marker.bindTooltip(tooltip);
    }
  });
};

const popupDrone = document.getElementById("popupDrone");
const droneIdElement = document.getElementById("droneId");
const closePopupBtn = document.getElementById("closePopupBtn");
const popupAlert = document.getElementById("popupAlert");
const markers = document.querySelectorAll(".leaflet-marker-icon");
let tooltipOpen = true;
const startCoords = [-7.727769, 113.214295];
let polyline;

const drawPolyline = (startCoords, endCoords) => {
  const polylineCoords = [startCoords, endCoords];
  polyline = L.polyline(polylineCoords, { color: '#fff', weight: 3, zIndexOffset: 1000 }).addTo(map);
};

markers.forEach(marker => {
  marker.addEventListener('click', () => {
    popupDrone.style.display = "flex";
    const droneId = marker.getAttribute("droneId");
    droneIdElement.textContent = droneId;

    const tooltip = marker.getTooltip();
    if (tooltip && !tooltip.isOpen()) {
      marker.openTooltip();
    }
  });
});

let currentMarkerId = null;
let currentPolygonLayer = null;

const markerClickHandler = (e, coords, polygonIndex, alertDisplay) => {
  const clickedMarkerId = e.target._leaflet_id;
  if (clickedMarkerId === currentMarkerId) {
    return;
  }
  if (currentMarkerId !== null) {
    map.removeLayer(polyline);
    map.removeLayer(currentPolygonLayer);
  }
  drawPolyline(coords[0], coords[1]);
  polygons[polygonIndex].addTo(map);
  popupAlert.style.display = alertDisplay;
  currentMarkerId = clickedMarkerId;
  currentPolygonLayer = polygons[polygonIndex];

  document.getElementById('longitude').textContent = coords[1][1].toFixed(6);
  document.getElementById('latitude').textContent = coords[1][0].toFixed(6);
};

marker1.on('click', (e) => {
  markerClickHandler(e, [[-7.743964, 113.252031], [-7.728188, 113.297433]], 2, "flex");
});

marker2.on('click', (e) => {
  markerClickHandler(e, [[-7.728663, 113.214118], [-7.720771, 113.224477]], 0, "none");
});

marker3.on('click', (e) => {
  markerClickHandler(e, [[-7.732519, 113.174683], [-7.786078, 113.170676]], 1, "none");
});

const closeAlertBtn = document.getElementById("closeAlertBtn");

closeAlertBtn.addEventListener("click", closeAlert);

function closeAlert() {
  popupAlert.style.display = "none";
}

closePopupBtn.addEventListener("click", closePopup);

function closePopup() {
  popupDrone.style.display = "none";
  popupAlert.style.display = "none";
  tooltipOpen = false;
}
