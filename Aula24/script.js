// // FIND

// let listagem = [5, 3, "Jose", 2, "Matheus"]

// let busca = listagem.find((item) => {
//     if(item === "Jose"){
//         return console.log("Item encontrado com sucesso!");
//     }
// })

// console.log(busca);

let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Fernando Gonçalves"];

let resultado = palavras.filter((item) => {
    return item.length >= 5;
})

console.log(resultado);