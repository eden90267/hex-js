// 瀏覽器跟伺服器要資料，首先要產這個物件出來：XMLHttpRequest
var xhr = new XMLHttpRequest();

// readyState
// 0 - 你已經產生一個XMLHttpRequest，但還沒有連結你要撈的資料
// 1 - 你用了open()，但你還沒有把資料傳送過去
// 2 - 偵測到你有用send
// 3 - loading
// 4 - 你撈到資料了，數據已經完全接收到了

// jQuery ajax

// open(格式、要讀取的網址、同步/非同步)
// 格式：get (讀取資料)、post (傳送資料到伺服器)
xhr.open('get', 'https://hexschool.github.io/ajaxHomework/data.json', true);

// 空的資料(不是post，沒有要傳送資料)
xhr.send(null);