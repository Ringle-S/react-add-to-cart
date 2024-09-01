import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Cart } from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <div className="px-64 bg-zinc-200">
          <Header cart={cart} setCart={setCart} />
          <Routes>
            <Route index element={<Home cart={cart} setCart={setCart} />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
