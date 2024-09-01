import React from "react";

export const CartItem = ({ element }) => {
  //   alert();
  //   const handleMinusQuantity = () => {
  //     dispatch(
  //       changeQuantity({
  //         productId: productId,
  //         quantity: quantity - 1,
  //       })
  //     );
  //   };
  //   const handlePlusQuantity = () => {
  //     dispatch(
  //       changeQuantity({
  //         productId: productId,
  //         quantity: quantity + 1,
  //       })
  //     );
  //   };
  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={element.image} alt="" className="w-12" />
      <h3>{element.name}</h3>
      <p>${element.price}</p>
      {/* <div className="w-20 flex justify-between gap-2">
        <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600">
          -
        </button>
        <span>{quantity}</span>
        <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600">
          +
        </button>
      </div> */}
    </div>
  );
};
