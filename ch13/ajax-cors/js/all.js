var xhr = new XMLHttpRequest();

xhr.open('get', 'http://opendata.epa.gov.tw/ws/Data/REWXQA/?$orderby=SiteName&$skip=0&$top=1000&format=json', true);
// http://opendata.epa.gov.tw/ws/Data/REWXQA/?$orderby=SiteName&$skip=0&$top=1000&format=json

// Error：
// XMLHttpRequest cannot load http://opendata.epa.gov.tw/ws/Data/REWXQA/?$orderby=SiteName&$skip=0&$top=1000&format=json. 
// No 'Access-Control-Allow-Origin' header is present on the requested resource. 
// Origin 'http://localhost:7879' is therefore not allowed access.

// CORS 是否可以跨網域撈取資料

// JSONP 可以解決

xhr.send(null);

xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.status == 200) {
        var str = JSON.parse(xhr.responseText);
        document.querySelector('.message').textContent = str[0].name;
    } else {
        console.log('資料錯誤！！');
    }
}