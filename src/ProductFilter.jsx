
import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { NewContext } from "./NewContext";

export default function ProductFilter() {
  const { products } = useContext(NewContext);
  const [searchParams] = useSearchParams();

  const categoryId = searchParams.get("category");

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");


  const categoryProducts = products.filter(
    (product) => product.category === categoryId
  );


  const brands = [
    ...new Set(categoryProducts.map((product) => product.brand)),
  ];

  
  const handleBrandChange = (brand) => {
    setSelectedBrands((previous) =>
      previous.includes(brand)
        ? previous.filter((item) => item !== brand)
        : [...previous, brand]
    );
  };

  
  const filteredProducts = categoryProducts.filter((product) => {
    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand);

    const matchesMinPrice =
      minPrice === "" || product.price >= Number(minPrice);

    const matchesMaxPrice =
      maxPrice === "" || product.price <= Number(maxPrice);

    return matchesBrand && matchesMinPrice && matchesMaxPrice;
  });

 
  const formatPrice = (price) =>
    `${price.toLocaleString("fa-IR")} تومان`;


  const [added, setAdded] = useState(null);

  const handleAddToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  setAdded(product.id);
  setTimeout(() => setAdded(null), 2000);
};

  return (
    <div
      dir="rtl"
      className="grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]"
    >
      
      <aside className="h-fit rounded-xl border p-5 text-right">
        <h2 className="mb-5 text-lg font-bold">فیلتر محصولات</h2>

        
        <div className="mb-6">
          <h3 className="mb-3 font-semibold">برند</h3>

          {brands.map((brand) => (
            <label
              key={brand}
              className="mb-3 flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>

      
        <div>
          <h3 className="mb-3 font-semibold">محدوده قیمت (تومان)</h3>

          <label className="mb-3 block">
            <span className="mb-1 block text-sm">حداقل قیمت</span>
            <input
              type="number"
              min="0"
              value={minPrice}
              onChange={(event) => setMinPrice(event.target.value)}
              placeholder="حداقل قیمت"
              className="w-full rounded-lg border p-2"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm">حداکثر قیمت</span>
            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={(event) => setMaxPrice(event.target.value)}
              placeholder="حداکثر قیمت"
              className="w-full rounded-lg border p-2"
            />
          </label>

          <button
            type="button"
            onClick={() => {
              setSelectedBrands([]);
              setMinPrice("");
              setMaxPrice("");
            }}
            className="mt-4 w-full rounded-lg border p-2 hover:bg-gray-100"
          >
            پاک کردن فیلترها
          </button>
        </div>
      </aside>

      
      <section>
        <div className="mb-4 text-right text-sm text-gray-600">
          {filteredProducts.length} محصول پیدا شد
        </div>

        {filteredProducts.length === 0 ? (
          <p className="rounded-xl border p-8 text-center text-gray-500">
            محصولی با این فیلترها پیدا نشد.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="rounded-xl border p-4 text-right transition hover:shadow-md"
              >
                <div className="mb-3 flex h-36 items-center justify-center rounded-lg bg-gray-100">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full rounded-lg object-contain"
                    />
                  ) : (
                    <span className="text-sm text-gray-400">
                      تصویر محصول
                    </span>
                  )}
                </div>

                <h3 className="mb-2 font-bold">{product.name}</h3>

                <p className="mb-3 text-sm text-gray-500">
                  برند: {product.brand}
                </p>
          

                <p className="font-semibold">
                  {formatPrice(product.price)}
                </p>
                {product.features && (
                <div className="mt-3 border-t pt-3 text-sm text-gray-600">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    مشخصات محصول
                  </h4>

                  <ul className="space-y-1">
                    {Object.entries(product.features).map(([key, value]) => (
                      <li key={key}>
                        <span className="font-medium">{key}:</span>{" "}
                        {value}
                      </li>
                    ))}
                  </ul>
                 
                </div>
              )}
                 <div className="text-left">
                    
                  <button  className={`rounded-lg p-2 text-white ${
                        added === product.id ? "bg-green-600" : "bg-red-500"
                      }`}
                    
                    onClick={() => handleAddToCart(product)}
                  >{added === product.id ? "✓ اضافه شد" : "افزودن به سبد خرید"}</button>
                  
                  </div>
              
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
