// 1.將 array 轉 string
// JSON.stringify(Object)

// 2.將 string 轉 array
// JSON.parse(String)

// 學以上兩點是因為 localstorage 只會保存 string 資料

var country = [
    {farmer: '卡斯伯'}
];
var countryString = JSON.stringify(country); // array -> string
console.log(countryString);
localStorage.setItem('countryItem', countryString);

var getData = localStorage.getItem('countryItem');
var getDataAry = JSON.parse(getData) // string -> array
console.log(typeof(getDataAry));
console.log(getDataAry[0].farmer);