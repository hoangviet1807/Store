import "./App.css";
import "aos/dist/aos.css";
import { HomePage } from "./features/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailProduct } from "./features/DetailProduct";
// import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Cart } from "./features/Cart";
import { ProductByCategory } from "./features/ProductsCategory";
import { SearchPage } from "./features/SearchPage";
import { Login } from "./features/SignIn";
import { DashBoard } from "./features/Admin/Dashboard";
import { Order } from "./features/Admin/Dashboard/Orders";
import { Checkout } from "./features/Cart/Checkout";
import { Header } from "./components/Header";
import { OrderSuccess } from "./features/Cart/OrderSuccess";


function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection/:category" element={<ProductByCategory />} />
          <Route path="/:id" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:searchText" element={<SearchPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/order" element={<OrderSuccess />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
