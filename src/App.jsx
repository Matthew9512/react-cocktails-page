import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { _URL, _URL_OPTIONS } from './config';
import Coctail from './pages/Coctail';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cocktail' element={<Coctail />} />
        <Route path='/cocktail/:id' element={<Coctail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
