import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Cart } from "./components/Cart";
import Footer from "./components/footer";

function App() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <BrowserRouter>
        <div className=" bg-zinc-200">
          <Header cart={cart} setCart={setCart} />
          <Routes>
            <Route
              index
              element={
                <Home
                  cart={cart}
                  setCart={setCart}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              }
            />
            <Route path="/details" element={<Details />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
