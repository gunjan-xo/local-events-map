// Initialize the map and set its view to a city (e.g. New Delhi)
const map = L.map('map').setView([28.6139, 77.2090], 12);

// Load and display tile layer (OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Event data (You can add your own!)
const events = [
  {
    name: "Music Festival 2025",
    description: "A weekend of great live music and food trucks.",
    date: "Oct 15, 2025",
    lat: 28.61,
    lng: 77.23
  },
  {
    name: "Startup Meetup",
    description: "Networking event for local entrepreneurs and investors.",
    date: "Oct 20, 2025",
    lat: 28.64,
    lng: 77.18
  },
  {
    name: "Art Exhibition",
    description: "Modern art exhibition featuring local artists.",
    date: "Oct 10, 2025",
    lat: 28.60,
    lng: 77.25
  }
];

// Add markers for each event
events.forEach(event => {
  const marker = L.marker([event.lat, event.lng]).addTo(map);
  marker.bindPopup(`
    <h3>${event.name}</h3>
    <p>${event.description}</p>
    <p><strong>Date:</strong> ${event.date}</p>
  `);
});
