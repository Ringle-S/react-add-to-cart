import React from "react";
import { products } from "../products";
import iconCart from "../assets/iconCart.png";
import { MdShoppingCartCheckout } from "react-icons/md";
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
      <div className="px-2 md:px-12">
        <h1 className="text-3xl my-5 px-5">Products List</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 gap-5 xl:px-32 px-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-xl shadow-sm flex flex-col justify-between gap-3"
            >
              <img
                src={product.image}
                alt=""
                className="w-full h-fit lg:h-80 object-contain object-top drop-shadow-[0_80px_30px_#0007]"
              />

              <h3 className="text-xl py-3 text-center font-medium">
                {product.name}
              </h3>
              <div className="flex justify-between items-center xl:px-12">
                <p>
                  ₹<span className="text-2xl font-medium">{product.price}</span>
                </p>

                {cart.includes(product) ? (
                  <button
                    onClick={() => removeCart(product)}
                    className="bg-red-600 text-white px-2 py-3 rounded-md text-sm  hover:bg-red-800 flex gap-2"
                  >
                    <MdShoppingCartCheckout className="text-lg" />
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    onClick={() => addCart(product)}
                    className="bg-amber-600 text-white px-2 py-3 rounded-md text-sm hover:bg-amber-800 flex gap-2"
                  >
                    <MdShoppingCartCheckout className="text-lg" />
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
