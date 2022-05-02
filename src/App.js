import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route element={<User />} path="/user/:userId" />
          <Route elemet={<NewUser />} path="/newUser" />
          <Route elemet={<ProductList />} path="/products" />
          <Route elemet={<Product />} path="/product/:productId" />
          <Route elemet={<NewProduct />} path="/newproduct" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
