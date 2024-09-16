import React, { useEffect, useState } from "react";

export const CartItem = ({ cart, element }) => {
  const cartArry = cart;
  // console.log(cartArry);

  const [quantity, setQuantity] = useState(1);

  const [totalAmount, setTotalAmount] = useState(element.price * quantity);

  // setTotalCost.push(element.price * quantity);
  // console.log(setTotalCost);
  const [productsCost, setProductsCost] = useState([]);

  // const handleAddProduct = (productId, price, event) => {
  //   // console.log(parseInt(event.target.value));

  //   const newProduct = { id: productId, productPrice: price };

  //   setProductsCost([...productsCost, newProduct]);
  // };

  const handleMinusQuantity = (i, price, quantity) => {
    setQuantity((e) => (e === 1 ? 1 : e - 1));
    const newProduct = { id: i, productPrice: price * quantity };
    setProductsCost([...productsCost, newProduct]);
    productsCost.map((item) => {
      if (item.id !== i) {
      }
    });
  };
  const handlePlusQuantity = (i, price, quantity) => {
    setQuantity((e) => e + 1);
    const newProduct = { id: i, productPrice: price * quantity };
    setProductsCost([...productsCost, newProduct]);

    productsCost.map((item) => {
      if (item.id !== i) {
      }
    });
  };
  // console.log(productsCost);
  return (
    <>
      <div className="flex flex-col justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
        <div className="flex justify-between">
          <img src={element.image} alt="" className="w-12" />
          <div className="">
            <h3>{element.name}</h3>
            <p className="text-xl">₹{element.price * quantity}</p>
          </div>
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
