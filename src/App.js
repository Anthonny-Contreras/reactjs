import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//import MiComponente
import MiComponente from './components/MiComponente';

function App() {

  var image =  (<img src={logo} className="App-logo" alt="logo" />);
  var titulo = (<h2> Bienvenido a ReactJS </h2>);
  var message =  (<p> Edit <code>src/App.js</code> and save to reload. </p>);

  return (
    <div className="App">
      <header className="App-header">
        {image}
        {titulo}
        {message}

        <MiComponente/>
        
      </header>
    </div>
  );
}

export default App;
