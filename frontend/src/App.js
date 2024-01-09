import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Register from './Components/Register';
import AddProduct from './Components/AddProduct';
import PageNotFound from './Components/PageNotFound';
import Navbar from './Components/Navbar';
import YourProducts from './Components/YourProducts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='*' element={<PageNotFound />} />
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/addproduct' element={<AddProduct/>}/>
        <Route exact path='/yourproducts' element={<YourProducts/>}/>
        <Route exact path='/navbar' element={<Navbar/>}/>
      </Routes>
    </div>
  );
}

export default App;
