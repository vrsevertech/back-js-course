var B;
(function (B) {
    B[B["minus"] = 0] = "minus";
    B[B["plus"] = 1] = "plus";
})(B || (B = {}));
var buttonPlus = document.querySelector('#pb');
buttonPlus === null || buttonPlus === void 0 ? void 0 : buttonPlus.addEventListener('click', function () {
    fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ b: B.plus })
    }).then(function (res) { return res.json(); }).then(function (res) {
        var u = document.querySelector('#p');
        if (u !== null) {
            u.textContent = res;
        }
    });
});
var buttonMinus = document.querySelector('#mb');
buttonMinus === null || buttonMinus === void 0 ? void 0 : buttonMinus.addEventListener('click', function () {
    fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ b: B.minus })
    }).then(function (res) { return res.json(); }).then(function (res) {
        var u = document.querySelector('#m');
        if (u !== null) {
            u.textContent = res;
        }
    });
});
