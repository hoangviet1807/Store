import './App.css';
import "aos/dist/aos.css"
import { HomePage } from './features/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { DetailProduct } from './features/DetailProduct';
import { Header } from './components/Header';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
