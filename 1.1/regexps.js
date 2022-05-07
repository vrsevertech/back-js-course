const regEmail = new RegExp('^([a-zA-Z0-9])([a-zA-Z0-9]|-|\\.|\\+){1,19}@([a-zA-Z]|[.!$%&’*+\\/=?^_-]){1,15}\\.([a-z]|[A-Z]){1,5}$');
const regTel = new RegExp('^([- ]*(\\+[- ]*3[- ]*8)?[- ]*\\(?[- ]*0[- ]*[0-9][- ]*[0-9][- ]*\\)?([- ]*\\d[- ]*){7})$'); //правило длинны до 25 соблюсти не удалось
const regPass = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-z_]{8,}$'); //полностью крадено, но вроде понято

validateEmail = function (email) {
    return regEmail.test(email);
}

validateTel = function (tel) {
    return regTel.test(tel);
}

validatePass = function (pass) {
    return regPass.test(pass);
}