import React from "react";

export const Total = (cartArry) => {
  useEffect(() => {
    setTotal(CartAryy.reduce((acc, cur) => acc + parseInt(cur.price), 0));
  }, [CartAryy]);

  return (
    <div className="text-white text-2xl flex justify-between px-12">
      <h4>Total Amount:</h4> <p>₹ {total}</p>
    </div>
  );
};
