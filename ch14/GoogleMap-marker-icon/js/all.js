var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 24.16109,
            lng: 120.642618
        },
        zoom: 15
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 24.161498,
            lng: 120.639715
        },
        map: map,
        title: '守護獸',
        icon: 'bot.png'
    });
}