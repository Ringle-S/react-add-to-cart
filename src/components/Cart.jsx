import React, { useEffect, useState } from "react";
import { CartItem } from "./CartItem";

// ₹{statusTab === false ? "translate-x-full" : ""}
export const Cart = ({ status, cart, setCart, quantity, setQuantity }) => {
  const CartAryy = cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(CartAryy.reduce((acc, cur) => acc + parseInt(cur.price), 0));
  }, [CartAryy]);

  // cart.forEach((element) => {
  //   console.log(element.id);
  // });

  const cartitem = CartAryy.map((element) => (
    <CartItem
      key={element.id}
      cart={cart}
      element={element}
      quantity={quantity}
      setQuantity={setQuantity}
    />
  ));
  const [showcart, setShowcart] = useState(status);

  const handleCloseTabCart = () => {
    setShowcart((e) => !e);
  };
  return (
    <>
      {showcart && (
        <div
          className={`fixed z-40 top-0 right-0 bg-gray-700 shadow-2xl w-11/12 sm:w-2/4  xl:w-1/4 h-full grid grid-rows-[60px_1fr_60px] 
        transform transition-transform duration-500`}
        >
          <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
          <div className="p-5 text-white">{cartitem}</div>
          {/* <div className="text-white text-2xl flex justify-between px-12">
            <h4>Total Amount:</h4> <p>₹ {total}</p>
          </div> */}
          <div className="grid grid-cols-2">
            <button
              className="bg-black text-white py-4"
              onClick={handleCloseTabCart}
            >
              CLOSE
            </button>
            <button className="bg-amber-600 text-white py-4">CHECKOUT</button>
          </div>
        </div>
      )}
    </>
  );
};
