let map; //tenemos una variable map que es donde se va a contener el mapa
const utld = { lat: 25.50, lng: -103.55 }
const utldMarker = { lat: 25.5011835, lng: -103.551441}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: utld,
        zoom: 15,
    });

    const pin1 = new google.maps.Marker({
        position: utldMarker,
        map: map
    })
}
