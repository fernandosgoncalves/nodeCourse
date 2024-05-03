import Nome from './components/Nome';

function App(){
  return(
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Fernando Gonçalves" idade={30}/>
      <br/>
      <Nome aluno="José Silva" idade={25}/>
    </div>
  );
}

export default App;

