import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getProduct } from './redux/actions/productAction';
import Aos from 'aos'
import "aos/dist/aos.css"
import { HomePage } from './features/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { DetailProduct } from './features/DetailProduct';


function App() {
  const listProduct = useSelector((state) => state.defaultReducers.products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    Aos.init({ duration: 200 });
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
