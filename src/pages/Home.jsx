import React from "react";
import { products } from "../products";
import iconCart from "../assets/iconCart.png";

const Home = ({ cart, setCart }) => {
  // console.log(products);
  // console.log(cart);
  const addCart = (product) => {
    setCart([...cart, product]);
  };
  const removeCart = (product) => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <>
      <h1 className="text-3xl my-5">Products List</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-5 rounded-xl shadow-sm">
            <img
              src={product.image}
              alt=""
              className="w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]"
            />

            <h3 className="text-xl py-3 text-center font-medium">
              {product.name}
            </h3>
            <div className="flex justify-between items-center px-24">
              <p>
                $<span className="text-2xl font-medium">{product.price}</span>
              </p>

              {cart.includes(product) ? (
                <button
                  onClick={() => removeCart(product)}
                  className="bg-red-600 p-2 rounded-md text-sm  hover:bg-red-400 flex gap-2"
                >
                  <img src={iconCart} alt="" className="w-5" />
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={() => addCart(product)}
                  className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
                >
                  <img src={iconCart} alt="" className="w-5" />
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
