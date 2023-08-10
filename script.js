function cal() {
    var opr1 = document.getElementById('first').value;
    var opr2 = document.getElementById('second').value;
    var ope = document.getElementById('ope').value;

    if (ope == '+') {
        var res = parseInt(opr1) + parseInt(opr2);
    }

    if (ope == '-') {
        var res = parseInt(opr1) - parseInt(opr2);
    }

    if (ope == '*') {
        var res = parseInt(opr1) * parseInt(opr2);
    }

    if (ope == '/') {
        var res = parseInt(opr1) / parseInt(opr2);
    }

    document.getElementById('res').value = res;

}

function Clear() {
    document.getElementById('first').value = "";
    document.getElementById('second').value = "";
    document.getElementById('res').value = "";

}