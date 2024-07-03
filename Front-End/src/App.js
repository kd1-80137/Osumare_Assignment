
import Navbar from './component/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>

      <Route path="/" element={<Home/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
