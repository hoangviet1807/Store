import "./App.css";
import "aos/dist/aos.css";
import { HomePage } from "./features/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailProduct } from "./features/DetailProduct";
// import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { Cart } from "./features/Cart";
import { ProductByCategory } from "./features/ProductsCategory";
import { SearchPage } from "./features/SearchPage";
import { Login } from "./features/SignIn";
import Layout from "./features/Layout";
import { DashBoard } from "./features/Admin/Dashboard";
import { Order } from "./features/Admin/Dashboard/Orders";
import { Checkout } from "./features/Cart/Checkout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/collection/:category" element={<ProductByCategory />} />
              <Route path="/:id" element={<DetailProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search/:searchText" element={<SearchPage />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
