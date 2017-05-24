var selZone = document.querySelector('.sel-zone');
var zoneName = document.querySelector('.zone-name');
var administrativeZoneBtn = document.querySelector('.administrative-zone-btn');
var records = document.querySelector('.records');
var pagination = document.querySelector('.pagination');

var offset = 1;
var limit = 10;
var zone;
var total = 0;

var model = {
    getData: function (offset, limit, zone) {
        var result;
        $.ajax({
            url: 'http://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&offset=' + offset + '&limit=' + limit + (zone && zone !== '' ? '&filters={"Zone":"' + zone + '"}' : ''),
            type: 'GET',
            async: false,
            dataType: 'json',
            success: function (data) {
                result = data.result.records;
                total = data.result.total;
            },
            error: function () {
                console.error('get data error!');
            }
        });
        return result;
    },
    getZones: function() {
        var result;
        $.ajax({
            url: 'http://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&fields=%22Zone%22&distinct=true&limit=1000',
            type: 'GET',
            async: false,
            dataType: 'json',
            success: function (data) {
                result = data.result.records.map(function (record) {
                    return record.Zone;
                });
            },
            error: function () {
                console.error('get data error!');
            }
        });
        return result;
    }
};

var view = {
    updateSelZone: function () {
        selZone.innerHTML =
            model.getZones()
                .map(function (zone) {
                    return "<option value='" + zone + "'>" + zone + "</option>";
                })
                .reduce(function (res, opt) {
                    return res + opt;
                }, "<option value=''>--請選擇行政區--</option>");
    },
    updateView: function () {
        // update zoneName
        zoneName.textContent = zone || '所有區';

        // update records
        this.updateRecords();

        // update pagination
        this.updatePagination();
    },
    updateRecords: function() {
        var data = model.getData(offset, limit, zone);
        records.innerHTML = data.map(function (item, idx) {
            var result = "";
            if (idx % 2 == 0) {
                result += "<div class='row'>";
            }
            result +=
                '<div class="col-xs-12 col-sm-6">' +
                '<div class="item">' +
                '<div class="item-img">' +
                '<img src="' + item.Picture1 + '">' +
                '<div class="item-title clearfix">' +
                '<h3 class="pull-left item-name">' + item.Name + '</h3>' +
                '<h4 class="pull-right item-zone">' + item.Zone + '</h4>' +
                '</div>' +
                '</div>' +
                '<ul class="list-unstyled item-content">' +
                '<li><img src="img/icons_clock.png"><span class="item-opentime">' + item.Opentime + '</span></li>' +
                '<li><img src="img/icons_pin.png"><span class="item-add">' + item.Add + '</span></li>' +
                '<li><img src="img/icons_phone.png"><span class="item-tel">' + item.Tel + '</span></li>' +
                '</ul>' +
                '<div class="item-info">' +
                '<img src="img/icons_tag.png">' +
                '<span class="item-ticketinfo">' + item.Ticketinfo + '</span>' +
                '</div>' +
                '</div>' +
                '</div>';
            if (idx % 2 == 1) {
                result += "</div>";
            }
            return result;
        }).reduce(function (res, item) {
            return res + item;
        }, "");
    },
    updatePagination: function() {
        var paginationItems = '';
        for (var i = 1; i <= (Math.floor(total / 10) + 1); i++) {
            paginationItems += '<li ' + (Math.floor(offset / 10 + 1) === i ? 'class="active"' : '') + '><a href="#" data-type="num" data-idx="' + i + '">' + i + '</a></li>';
        }
        pagination.innerHTML =
            '<li ' + (Math.floor(offset / 10 + 1) === 1 ? 'class="disabled"' : '') + '><a href="#" data-type="prev">&lt; Prev</a></li>' +
            paginationItems +
            '<li ' + (Math.floor(offset / 10 + 1) === (Math.floor(total / 10) + 1) ? 'class="disabled"' : '') + '><a href="#" data-type="next">&gt; Next</a></li>';
    }
};

var controller = {
    addListener: function () {
        // selZone
        selZone.addEventListener('change', function (e) {
            if (e.target.value === '') return;
            console.log(e.target.value);
            zone = e.target.value;
            offset = 1;
            view.updateView();
        }, false);

        // administrativeZoneBtn
        administrativeZoneBtn.addEventListener('click', function (e) {
            if (e.target.nodeName !== 'A') return;
            e.preventDefault();
            zone = e.target.textContent;
            offset = 1;
            view.updateView();
        });

        // pagination
        pagination.addEventListener('click', function (e) {
            if (e.target.nodeName !== 'A') return;
            e.preventDefault();
            switch (e.target.dataset.type) {
                case "prev":
                    if (Math.floor(offset / 10 + 1) > 1) {
                        offset -= 10;
                        view.updateView();
                    }
                    break;
                case "num":
                    var idx = e.target.dataset.idx;
                    offset = (idx - 1) * 10 + 1;
                    view.updateView();
                    break;
                case "next":
                    if (Math.floor(offset / 10 + 1) !== (Math.floor(total / 10) + 1)) {
                        offset += 10;
                        view.updateView();
                    }
                    break;
                default:
                    console.error("unsupported type!");
                    break;
            }
        });
    }
};

view.updateSelZone();
view.updateView();
controller.addListener();