import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor="number1">Número 1</label>
          <input 
          type="number" 
          name="number1" 
          id="number1" 
          placeholder="insira o primeiro número" 
          required
          />
        </div>
        <div>
        <label htmlFor="number1">Número 2</label>
          <input 
          type="number" 
          name="number2" 
          id="number2" 
          placeholder="insira o segundo número" 
          required
          />
        </div>
        <div>
          <button>Somar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
