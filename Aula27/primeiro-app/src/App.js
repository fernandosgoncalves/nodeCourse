import { useState } from 'react';

//Aula 30
//import Nome from './components/Nome';

function App(){
  //Aula 30
  //const [aluno, setAluno] = useState("Programador")

  //function handleChangeName(nome){
  //  setAluno(nome);
  //}

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar React JS', 
    'Estudar Teclado' 
  ]);
  //const [nome, setNome] = useState('');
  //const [email, setEmail] = useState('');
  //const [idade, setIdade] = useState(0);

  /*const [user, setUser] = useState({
    nome: 'Joaquim',
    idade: '55',
    email: 'fulano@fulano.com'
  });*/

  function handleRegister(e){
    e.preventDefault();
    
    setTarefas([...tarefas, input]);
    setInput(''); 
    /*
      Aula 31
    alert("Usuário registrado com sucesso!");
    setUser({
      nome: nome,
      idade: idade,
      email: email
    })*/
  }

  return(
    <div>
      <h1>Cadastrando Usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br/>
        <input 
          placeholder='Digite uma tarefa'
          value={input}
          onChange={(e)=> setInput(e.target.value) }
        /> <br/>

        {/*Aula 31
        <label>Email:</label><br/>
        <input 
          placeholder='Digite seu email'
          value={email}
          onChange={(e)=> setEmail(e.target.value) }
        /> <br/>

        <label>Idade:</label><br/>
        <input 
          placeholder='Digite seu idade'
          value={idade}
          onChange={(e)=> setIdade(e.target.value) }
        /> */} <br/>

        <button type='submit'>Registrar</button>

      </form>

      <br/><br/>

      {/*<div>*/}
      <ul>

        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
        {/*
          Aula 31
          <span>Bem vindo: {user.nome}</span> <br/>
          <span>Idade: {user.idade}</span> <br/>
          <span>Email: {user.email}</span> <br/>
      */}
      </ul>
      {/*</div>*/}
            
      {/*//Aula 30
      <h1>Componente App</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={ () =>handleChangeName('Luiz Fernando')}>
        Mudar nome
        </button>
      <Nome aluno="Fernando Gonçalves" idade={30}/> */}
    </div>
  );
}

export default App;

