import './App.css';
import Menu from './components/Menu';
import Page from './components/Page';
import {
  Route,
  Routes,
} from "react-router-dom"
import Carateristicas from './components/Carateristicas'
import Suporte from './components/Suporte'
import Contactos from './components/Contactos'

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Page/>} /><Route path='/eurocap' element={<Page/>} />
        <Route path='/carateristicas' element={<Carateristicas />} />
        <Route path='/suporte' element={<Suporte />} />
        <Route path='/contactos' element={<Contactos />} />
      </Routes>
    </div>
  );
}

export default App;
