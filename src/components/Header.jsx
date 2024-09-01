import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/iconCart.png";
import { Cart } from "./Cart";

export const Header = ({ cart, setCart }) => {
  const [showcart, setShowcart] = useState(false);
  const cartl = cart.length;
  const handleOpenTabCart = () => {
    // alert();
    setShowcart((e) => !e);
    // console.log(showcart);
  };

  return (
    <>
      <header className="flex justify-between items-center py-5  bg-zinc-200">
        <Link to="/" className="text-xl font-semibold">
          Home
        </Link>
        <div
          className="w-10 h-10 bg-gray-100 rounded-full cursor-pointer
  flex justify-center items-center relative"
          onClick={handleOpenTabCart}
        >
          <img src={iconCart} alt="" className="w-6" />
          <span
            className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
      w-5 h-5 rounded-full flex justify-center items-center"
          >
            {cartl}
          </span>
        </div>
      </header>
      {showcart && <Cart status={showcart} cart={cart} setCart={setCart} />}
    </>
  );
};
