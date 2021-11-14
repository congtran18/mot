import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
