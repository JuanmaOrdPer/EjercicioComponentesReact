import './App.css';
import Contador from './Contador.js';
import FormularioSimple from './FormularioSimple.js';
import Toggle from './Toggle.js';
import ListaTareas from './ListaTareas.js';
import Buscador from './Buscador.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>Contador</h5>
        <Contador></Contador>
        <h5>Formulario Simple</h5>
        <FormularioSimple></FormularioSimple>
        <h5>ToggleVisibilidad</h5>
        <Toggle></Toggle>
        <h5>Lista Tareas</h5>
        <ListaTareas></ListaTareas>
        <h5>Buscador</h5>
        <Buscador></Buscador>
      </header>
    </div>
  );
}

export default App;
