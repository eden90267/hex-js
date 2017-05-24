var height = document.querySelector('#height'); // input
var weight = document.querySelector('#weight'); // input
var result = document.querySelector('#result'); // div > a(btn) + img(refresh)
var resultContent = document.querySelector('#resultContent');
var logList = document.querySelector('#logList'); // ul(bmi-log)

var bmi;

var bmiStatus = {
    evaluations: ["過輕", "理想", "過重", "輕度肥胖", "中度肥胖", "重度肥胖"],
    engEvaluations: ["tolight", "ideal", "toheavy", "lightheavy", "mediumheavy", "weightheavy"],
    getEvaluation: function (bmi) {
        return this.evaluations[this.getEvaluationIdx(bmi)];
    },
    getEngEvaluation: function (bmi) {
        return this.engEvaluations[this.getEvaluationIdx(bmi)];
    },
    getEvaluationIdx: function (bmi) {
        if (bmi < 18.5) {
            return 0;
        } else if (bmi >= 18.5 && bmi < 24) {
            return 1;
        } else if (bmi >= 24 && bmi < 27) {
            return 2;
        } else if (bmi >= 27 && bmi < 30) {
            return 3;
        } else if (bmi >= 30 && bmi < 35) {
            return 4;
        } else {
            return 5;
        }
    }
};

var model = {
    getLog: function () {
        var log = localStorage.getItem('log');
        return log ? JSON.parse(log) : [];
    },
    saveLog: function (log) {
        localStorage.setItem('log', JSON.stringify(log));
    },
    create: function (height, weight) {
        bmi = new Number(weight / Math.pow(height / 100, 2)).toFixed(2);
        var evaluation = bmiStatus.getEvaluation(bmi);
        var date = moment().format('MM-DD-YYYY');
        var log = this.getLog();
        log.push({
            evaluation: evaluation,
            bmi: bmi,
            weight: weight,
            height: height,
            date: date
        });
        this.saveLog(log);
        view.updateList();
    }
};

var view = {
    updateList: function () {
        var log = model.getLog();
        logList.innerHTML =
            log.map(function (item) {
                return '<li>' +
                    '<ul class="list-inline log-item-list log-item-list-' + bmiStatus.getEngEvaluation(item.bmi) + '">' +
                    '<li>' + item.evaluation + '</li>' +
                    '<li>BMI</li>' +
                    '<li>' + item.bmi + '</li>' +
                    '<li>weight</li>' +
                    '<li>' + item.weight + 'kg</li>' +
                    '<li>height</li>' +
                    '<li>' + item.height + 'cm</li>' +
                    '<li>' + item.date + '</li>' +
                    '</ul>' +
                    '</li>';
            }).reduce(function (res, item) {
                return res + item;
            }, "");
    },
    updateResult: function () {
        resultContent.textContent = bmi;
        result.classList.add("result-default", "result-" + bmiStatus.getEngEvaluation(bmi));
    }
};

var controller = {
    isResult: false,
    addListener: function () {
        result.addEventListener('click', function (e) {
            if (e.target.nodeName !== 'A' && e.target.nodeName !== 'SPAN' && e.target.nodeName !== 'IMG') return;
            switch (e.target.nodeName) {
                case 'A':
                case 'SPAN':
                    if (this.isResult) return;
                    if (height.value === undefined || height.value === "" || weight.value === undefined || weight.value === "") {
                        alert('height or weight fields is required!');
                        return;
                    }
                    model.create(height.value, weight.value);
                    view.updateResult();
                    this.isResult = true;
                    break;
                case 'IMG': // refresh
                    height.value = "";
                    weight.value = "";
                    resultContent.textContent = "看結果";
                    result.classList.remove("result-default");
                    result.classList.remove("result-" + bmiStatus.getEngEvaluation(bmi));
                    this.isResult = false;
                    break;
            }
        }, false);
    }
};


controller.addListener();
view.updateList();