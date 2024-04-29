//desconstruir um objeto

let pessoa= {
    nome: "Fernando",
    empresa: "IFSC",
    cargo: "Professor"
};

let nome = "TESTE";

const {nome:nomePessoa, empresa, cargo} = pessoa;

// console.log(pessoa);
// console.log(nomePessoa);
// console.log(empresa);
// console.log(cargo);

//DESCONSTRUIR UM ARRAY

let nomes = [ "Fernando", "Lucas", "Pedro"];

// let {0:fernando, 2:pedro} = nomes;

// console.log(fernando);
// console.log(pedro);

let [primeiroNome, segundoNome] = nomes;

console.log(primeiroNome);
console.log(segundoNome);