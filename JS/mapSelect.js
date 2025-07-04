let selectedLatLng = null;

const map = L.map('map').setView([35.6892, 51.3890], 10); // مرکز تهران
const marker = L.marker([0, 0], { draggable: false }).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

map.on('click', function (e) {
    selectedLatLng = e.latlng;
    marker.setLatLng(selectedLatLng);
});

function confirmLocation() {
    if (!selectedLatLng) {
        alert("لطفاً ابتدا روی نقشه یک نقطه انتخاب کن.");
        return;
    }

    const lat = selectedLatLng.lat;
    const lon = selectedLatLng.lng;

    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
        .then(res => res.json())
        .then(data => {
            const address = data.display_name;
            document.getElementById("address").value = address;
        })
        .catch(err => {
            console.error(err);
            alert("خطا در دریافت آدرس. لطفاً دوباره تلاش کن.");
        });
}