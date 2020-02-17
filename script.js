var input = document.getElementById('numero');
var resultado = document.getElementById('resultado');
var form = document.getElementById('formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
});

input.addEventListener('change', function (e) {
    var value = input.value;
    if (value % 2 == 0) {
        resultado.innerText = 'Par';
    } else {
        resultado.innerText = 'Impar';
    }
});
