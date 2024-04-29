//setInterval
//function acao(){
//    document.write("Executando <br/>")
//}

//setInterval(acao, 1000)
//var timer = setInterval(() => {
//    document.write("Exceutando!!! <br/>")
//}, 1000)

//setTimeout
//setTimeout(acao, 3000);

//VAR LET CONST
//LET => só existe dentro do escopo
//VAR existe em qualquer lugar

//Objetos
let pessoa= {
    nome: "Fernando",
    idade: 37,
    altura: 1.75,
    cargo: "Professor"
};

let carro={
    nome: "Jetta 2.0",
    cor: "Azul",
    potencia: "150cv",
};

//console.log(carro);

let usuarios = [
    {nome: "Fernando", cargo: "Programador", status:"ATIVO"}, 
    {nome: "Maria Fernando", cargo: "Tester", status:"ATIVO"},
    {nome: "Jose", cargo: "Analista", status:"ATIVO"}
];

//template String
let nome = "Fernando";
let sobrenome = "Gonçalves";
let idade = 37;

//let mensagem = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos."
let mensagem = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`;

console.log(mensagem);