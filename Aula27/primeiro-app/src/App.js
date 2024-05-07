import { useState, useEffect } from 'react';

function App(){
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar React JS', 
    'Estudar Teclado' 
  ]);

  useEffect(() =>{
    const tarefasStorage = localStorage.getItem('@tarefa');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, []);

  useEffect(()=> {
     localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]);

  function handleRegister(e){
    e.preventDefault();
    
    setTarefas([...tarefas, input]);
    setInput(''); 
    
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

         <br/>

        <button type='submit'>Registrar</button>

      </form>

      <br/><br/>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;

//------------- Aula 30 ------------------
//import Nome from './components/Nome';

//const [aluno, setAluno] = useState("Programador")

//function handleChangeName(nome){
//  setAluno(nome);
//}

/*
<h1>Componente App</h1>
<h2>Olá: {aluno}</h2>
<button onClick={ () =>handleChangeName('Luiz Fernando')}>
  Mudar nome
  </button>
<Nome aluno="Fernando Gonçalves" idade={30}/> */

//------------- Aula 31 --------------------
  //const [nome, setNome] = useState('');
  //const [email, setEmail] = useState('');
  //const [idade, setIdade] = useState(0);

  /*const [user, setUser] = useState({
    nome: 'Joaquim',
    idade: '55',
    email: 'fulano@fulano.com'
  });*/

/*
  alert("Usuário registrado com sucesso!");
  setUser({
    nome: nome,
    idade: idade,
    email: email
  })*/

/*
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
  /> */

  /*<div>*/

  /*
    <span>Bem vindo: {user.nome}</span> <br/>
    <span>Idade: {user.idade}</span> <br/>
    <span>Email: {user.email}</span> <br/>
*/
/*</div>*/

/* -------------- Aula 32 -----------------------
import { useState, useEffect } from 'react';

function App(){
  

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar React JS', 
    'Estudar Teclado' 
  ]);

  function handleRegister(e){
    e.preventDefault();
    
    setTarefas([...tarefas, input]);
    setInput(''); 
    
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

         <br/>

        <button type='submit'>Registrar</button>

      </form>

      <br/><br/>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

    </div>
  );
}*/