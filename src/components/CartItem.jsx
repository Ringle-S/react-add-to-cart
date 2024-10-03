import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
export const CartItem = ({ cart, setCart, element }) => {
  const cartArry = cart;

  const [quantity, setQuantity] = useState(1);

  const [productsCost, setProductsCost] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + parseInt(cur.price), 0));
  }, [cart]);

  console.log(total);

  const removeCart = (product) => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  const handleMinusQuantity = (i, price, quantity) => {
    setQuantity((e) => (e === 1 ? 1 : e - 1));
    const newProduct = { id: i, productPrice: price * (quantity + 1) };

    const existingItem = cart.find((item) => item.id === i);
  };

  const handlePlusQuantity = (i, price, quantity) => {
    setQuantity((e) => e + 1);
    const newProduct = { id: i, productPrice: price * (quantity + 1) };

    const existingItem = cart.find((item) => item.id === i);
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
        <div className="flex justify-between">
          <img src={element.image} alt="" className="w-1/6" />
          <div className="w-5/6">
            <h3>{element.name}</h3>
            <p className="text-xl">₹{element.quantity * quantity}</p>
          </div>
          <button
            onClick={() => removeCart(element)}
            className="justify-self-start"
          >
            <RiDeleteBin6Line className="text-xl me-4 " />
          </button>
        </div>
        <div className="flex justify-between gap-2">
          <button
            onClick={() =>
              handleMinusQuantity(element.id, element.price, quantity)
            }
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          >
            -
          </button>
          <span>{quantity}</span>

          <button
            onClick={() =>
              handlePlusQuantity(element.id, element.price, quantity)
            }
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};
