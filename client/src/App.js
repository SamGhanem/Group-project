import './App.css';
import Home from './views/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TravelForm from './components/form';
import Update from './components/update';
import DisplayOne from './components/displayone';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/travel/create' element={<TravelForm/>}/>
            <Route path="/travel/:id" element={<DisplayOne/>}/>
            <Route path='/travel/update/:id'  element={<Update/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
