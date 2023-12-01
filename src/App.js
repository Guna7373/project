
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rootlayout from './Rootlayout';
function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Rootlayout/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
