// Funcoes anonimas

/*
    ()=> {}
    1-  () Parenteses para receber os parãmetros
    2 - seta =>
    3 - {} Bloco de código que representa o corpo da função
*/

function somar(a, b) {
    let total = a + b;
    return console.log(total);
}

somar(10, 30);

let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2;
    console.log(total);
}

subtrair(15, 25);

let numeros = [1, 3, 5, 10];

numeros.map((item) => {
    console.log(item);
})