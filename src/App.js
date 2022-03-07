import "./App.css";
import "aos/dist/aos.css";
import { HomePage } from "./features/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailProduct } from "./features/DetailProduct";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
