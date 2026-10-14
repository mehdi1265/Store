
import { useState } from "react";
import Header from "./Header";

export default function BuyPage() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const deleteProduct = (index) => {
    const newCart = cart.filter((_, i) => i !== index);

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div >
      <Header />

      <main className="p-6 text-right">
        <h1 className="mb-6 text-2xl font-bold">
          سبد خرید من
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">
            سبد خرید شما خالی است.
          </p>
        ) : (
          cart.map((product, index) => (
            <div
              key={index}
              className="mb-3 rounded-lg border p-4"
            >
              <h2 className="font-bold">
                {product.name}
              </h2>

              <div className="flex items-center justify-between">
                <p>
                  قیمت: {product.price.toLocaleString("fa-IR")} تومان
                </p>

                <button
                  type="button"
                  onClick={() => deleteProduct(index)}
                  className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                  حذف محصول
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
