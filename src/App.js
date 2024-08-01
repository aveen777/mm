// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    {/*<Route path="/products" element={<Products />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/support" element={<Support />} />
      <Route path="/about" element={<About />} />
      <Route path='/billing' element={<Billing />} />
      <Route path='/addproducts' element={<AddProducts />} />
      <Route path='/Invoice' element={<Invoice/>} />
      <Route path='/dealer' element={<Purchasing/>} />
      <Route path='/feedback' element={<Feed/>} />*/}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
