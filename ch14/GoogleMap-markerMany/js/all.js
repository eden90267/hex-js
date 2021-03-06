var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 24.16109,
            lng: 120.642618
        },
        zoom: 15
    });

    var data = [{
            position: {
                lat: 24.163897,
                lng: 120.638234
            },
            map: map,
            title: '消防局'
        },
        {
            position: {
                lat: 24.161498,
                lng: 120.639715
            },
            map: map,
            title: '加油站'
        }
    ];

    data.forEach(function (item) {
        var marker = new google.maps.Marker(item);
    });
}