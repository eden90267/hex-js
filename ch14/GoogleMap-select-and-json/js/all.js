var map;
var data;
var markers = [];
var currentInfoWindow = '';

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {
            lat: 22.6048695,
            lng: 120.298119
        },
        styles: [{
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [{
                    "saturation": "-100"
                }]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": "50"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "saturation": "-100"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [{
                    "lightness": "30"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "lightness": "40"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -97
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            }
        ]
    });

    getData();
}

function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'http://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97');
    xhr.send(null);
    xhr.onload = function () {
        data = JSON.parse(xhr.responseText).result.records;
        data.forEach(function (item) {
            loadData(item.Py, item.Px, item.Picdescribe1);
        })
    }
}

var area = document.querySelector('.area');
area.addEventListener('change', function (e) {
    markers.forEach(function (marker) {
        marker.setMap(null);
    });
    markers = [];
    infoWindows = [];
    data.forEach(function (item) {
        if (item.Zone === e.target.value) {
            loadData(item.Py, item.Px, item.Picdescribe1)
        }
    });
}, false);


function loadData(lat, lng, title) {
    var infowindow = new google.maps.InfoWindow({
        content: title
    });
    var marker = new google.maps.Marker({
        position: {
            lat: parseFloat(lat),
            lng: parseFloat(lng)
        },
        title: title,
        map: map,
    });
    marker.addListener('click', function () {
        if (currentInfoWindow != '') {
            currentInfoWindow.close();
            currentInfoWindow = '';
        }
        infowindow.open(map, marker);
        currentInfoWindow = infowindow;
    });
    markers.push(marker);
}