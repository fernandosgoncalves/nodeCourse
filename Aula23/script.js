// //MAP =  PERCORRER TODO UM ARRAY

// let lista = ["Fernando", "João", "Pedro"];

// lista.map((item, index) => {
//     console.log(`Passando: ${item} - esta na posição ${index}`)
// });

let numeros = [5, 3, 2, 25];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor atual`);
    //console.log(`${indice} - posicao do valor`);
    //console.log(`${original} - array original`);

    return acumulador += numero;
})

console.log("Total do Reduce: " + total);
