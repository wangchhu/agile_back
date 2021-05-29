import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './khumbu.css';

import Component from './Component/Component1';
import Header from './Header/Header';
import footer from './Header/footer';
import{BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    
      <Header></Header>
      <Component></Component>
      <footer></footer>
    </div>
    </BrowserRouter>
  )
}

export default App;
