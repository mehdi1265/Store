import { useState } from "react";
import { NewContext } from "./NewContext";
import { useContext } from "react";
import Meno from "./Meno";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";


export default function Header() {
  let [isopen, setIsopen] = useState(false);
  let { menue } = useContext(NewContext);

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-white shadow-mdflex flex-col select-none">
      <div className="bg-red-500 p-[1%] h-[1.5%]"></div>

      <span className="flex items-center justify-between mx-20 rtl">
        <div className="flex flex-col items-start gap-3 pl-5">
          <div className="flex items-center justify-start gap-3">
            <Link to="/login">
            <button
              id="login"
           
              className="border-none text-gray-500 hover:text-black hover:font-bold transition-all duration-300"
            >
              ورود/ثبت نام
             
            </button>
            </Link>
            <h1 className="text-3xl font-thin text-gray-400">|</h1>

            <img
              id="belIcon"
              src="/bell.svg"
              alt="اعلانات"
              className="w-[30px] h-[30px] rounded-3xl text-right"
            />
          </div>

          <Link
            to="/cart"
            className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition-all duration-300 hover:bg-red-600"
          >
            <ShoppingCart size={22} color="white" />
            <span>سبد خرید</span>
          </Link>
        </div>

        <div className="flex flex-row-reverse items-center justify-start gap-3 ml-auto">
          <img src="/balut.jpg" className="w-[80px] h-[80px] rounded-3xl" />

          <input
            placeholder="جستجو"
            className="border border-gray-500 rounded-2xl bg-gray-200 text-right w-[600px] h-[50px] pr-5 *: pb-1"
          />
        </div>
      </span>

      <div className="flex justify-end mx-20">
        <div className="flex flex-row-reverse gap-12">
          <a href="#shegeftangiz">
            <p className="text-lg">شگفت انگیز</p>
          </a>

          <a href="#porforosh">
            <p className="text-lg">پرفروش ترین ها</p>
          </a>

          <Link to="/balut">
            <p className="text-lg">در بلوط بفروشید</p>
          </Link>
        </div>

        <div
          onMouseEnter={() => {
            setIsopen(true);
          }}
          onMouseLeave={() => {
            setIsopen(false);
          }}
          className="relative flex items-center justify-start"
        >
          <button className="flex items-center justify-start pl-10 rounded-lg">
            دسته بندی
            <img
              src="menu.svg"
              className="flex items-center justify-start"
            />
          </button>

          {isopen && (
            <div className="absolute top-full right-0 pt-1 w-64 bg-white shadow-xl rounded-xl border p-4 z-50">
              <Meno />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}