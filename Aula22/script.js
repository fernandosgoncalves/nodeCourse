//REST OPERATOR

// function convidados(...nome){
//     console.log("SEJAM BEM VINDOS TODOS OS CONVIDADOS");
//     console.log(nome);
// }

// convidados("Fernando", "Matheus", "Lucas")

function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor( Math.random() * numeros.length );
    console.log(numeroGerado);
    console.log(numeros[numeroGerado]);
}

sorteador(1, 4, 5, 15, 25, 90, 55, 34);