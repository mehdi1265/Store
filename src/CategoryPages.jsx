import { useSearchParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NewContext } from "./NewContext";
import Header from "./Header";
import ProductFilter from "./ProductFilter";


export default function CategoryPages() {
  
  const navigate = useNavigate();
  const { categories } = useContext(NewContext);

 

  return (
    
    <div >
      
      <Header />

      <div className="flex justify-between p-10 text-right select-none">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 hover:underline"
        >
          بازگشت
        </button>

      </div>

      <div className="px-10 pb-10">
        <ProductFilter />
      </div>
    </div>
  );
}