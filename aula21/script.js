//Spread operator
// let primeiros = [1,2,3];

// let numeros = [...primeiros, 4,5,10];

// console.log(numeros);

// let pessoa = {
//     nome: "Fernando",
//     idade: 45,
//     cargo: "Professor"
// };

// let novaPessoa = {
//     ...pessoa,
//     status: "ATIVO",
//     cidade: "Criciúma / SC"
// };

// console.log(novaPessoa);

function novoUsuario(info){
    let data = {
        ...info,
        status: "ATIVO",
        inicio: "20/05/2024",
        codigo: "123456"
    }

    console.log(data);
}

novoUsuario({nome: "Jose", sobrenome: "Silvano", cargo:"RH"});