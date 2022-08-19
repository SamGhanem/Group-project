import './App.css';
import Home from './views/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TravelForm from './components/form';
import Update from './components/update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/travel' element={<TravelForm/>}/>
            {/* <Route path="/travel/:id" element={<DisplayOne/>}/> */}
            <Route path='/travel/:id'  element={<Update/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
