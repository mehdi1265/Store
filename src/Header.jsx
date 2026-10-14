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
    <div className="sticky top-0 left-0 w-full z-50 bg-white shadow-md flex flex-col select-none">
      <div className="bg-red-500 p-[1%] h-[1.5%]"></div>

      <span className="flex items-center justify-between mx-4 md:mx-10 lg:mx-20 rtl">
        <div className="flex flex-col items-start gap-3 pl-2 md:pl-5">
          <div className="flex items-center justify-start gap-2 md:gap-3">
            <Link to="/login">
              <button
                id="login"
                className="border-none text-sm md:text-base text-gray-500 hover:text-black hover:font-bold transition-all duration-300"
              >
                ورود/ثبت نام
              </button>
            </Link>
            <h1 className="text-xl md:text-3xl font-thin text-gray-400">|</h1>

            <img
              id="belIcon"
              src="/bell.svg"
              alt="اعلانات"
              className="w-6 h-6 md:w-[30px] md:h-[30px] rounded-3xl text-right"
            />
          </div>

          <Link
            to="/cart"
            className="flex items-center gap-2 rounded-lg bg-red-500 px-3 md:px-4 py-1.5 md:py-2 text-white transition-all duration-300 hover:bg-red-600 text-sm md:text-base"
          >
            <ShoppingCart size={18} color="white" />
            <span>سبد خرید</span>
          </Link>
        </div>

        <div className="flex flex-row-reverse items-center justify-start gap-2 md:gap-3 ml-auto">
          <img
            src="/balut.jpg"
            className="w-12 h-12 md:w-[80px] md:h-[80px] rounded-3xl"
          />

          <input
            placeholder="جستجو"
            className="border border-gray-500 rounded-2xl bg-gray-200 text-right w-[180px] md:w-[400px] lg:w-[600px] h-[40px] md:h-[50px] pr-3 md:pr-5 pb-1"
          />
        </div>
      </span>

      <div className="flex justify-end mx-4 md:mx-10 lg:mx-20">
        <div className="flex flex-row-reverse gap-6 lg:gap-12">
          <a href="#shegeftangiz">
            <p className="text-base lg:text-lg">شگفت انگیز</p>
          </a>

          <a href="#porforosh">
            <p className="text-base lg:text-lg">پرفروش ترین ها</p>
          </a>

          <Link to="/balut">
            <p className="text-base lg:text-lg">در بلوط بفروشید</p>
          </Link>
        </div>

        <div
          onMouseEnter={() => setIsopen(true)}
          onMouseLeave={() => setIsopen(false)}
          className="relative flex items-center justify-start"
        >
          <button className="flex items-center justify-start pl-4 md:pl-10 rounded-lg text-sm md:text-base">
            دسته بندی
            <img src="menu.svg" className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {isopen && (
            <div className="absolute top-full right-0 pt-1 w-56 md:w-64 bg-white shadow-xl rounded-xl border p-4 z-50">
              <Meno />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}