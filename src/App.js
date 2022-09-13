import "./App.css";
import "aos/dist/aos.css";
import { HomePage } from "./features/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailProduct } from "./features/DetailProduct";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { Cart } from "./features/Cart";
import { ProductByCategory } from "./features/ProductsCategory";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection/:category" element={<ProductByCategory />} />
          <Route path="/:id" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
