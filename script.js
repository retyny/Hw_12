
function show() {

    const f1 = document.querySelector('#inputName').value;

    const spanf1 = document.querySelector('#hello');

    spanf1.textContent = 'hello ' + f1;

}

function password() {

    const pass_1 = document.querySelector('#inputPassword_1').value;
    const pass_2 = document.querySelector('#inputPassword_2').value;
    const pass_equal = document.querySelector('#span_pass');

    if (pass_1 === pass_2) {
        pass_equal.textContent = 'Equal';
    } else {
        pass_equal.textContent = 'NOT Equal';
    }

}


function getRandom() {
    const f1 = +document.querySelector('#minNumber').value;
    const f2 = +document.querySelector('#maxNumber').value;
    const f3 = document.querySelector('#randomNumber');
    f3.textContent = Math.floor(Math.random() * (f2 - f1) + f1);
}
