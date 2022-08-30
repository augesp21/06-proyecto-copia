import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Routes, Route } from "react-router-dom";
import { Home, CreateProducts, Login, Signup, Logout } from "../pages";
import Protected from "../hoc/Protected";
import ProductsCards from '../components/ProductsCards'

const RoutesIndex = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/createProducts" 
        element={
          <Protected isLoggedIn={isAuth}>
            <CreateProducts />
          </Protected>
        } 
        />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path='/ProductsCards' element={<ProductsCards />} />
    </Routes>
  );
};

export default RoutesIndex;
