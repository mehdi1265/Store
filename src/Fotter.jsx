import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Fotter() {
  let [email, setEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    savedEmail ? setEmail(savedEmail) : null;
  }, []);

  const savemail = () => {
    if (email.trim()) {
      localStorage.setItem("email", email);
      alert("ذخیره شد");
      setEmail(" ");
    }
  };

  return (
    <div className="mx-4 md:mx-10 lg:mx-40 flex flex-col items-end">
      <hr className="border-gray-500 w-full my-4"></hr>

      <div className="flex flex-col md:flex-row justify-between w-full gap-4 md:gap-0">
        <a href="#">
          <button className="flex flex-row items-center border text-sm md:text-lg border-gray-400 rounded-xl bg-gray-200 ml-0 md:ml-10 mt-4 md:mt-10 p-2 md:p-4">
            <img src="upload.png" className="w-6 h-6 md:w-[38px] md:h-[38px] rounded-3xl p-1 md:p-2" />
            بازگشت بالا
          </button>
        </a>

        <div className="flex flex-col items-end">
          <img src="/123.png" className="w-20 h-20 md:w-[150px] md:h-[150px] rounded-3xl" />
          <span className="flex flex-col md:flex-row-reverse pr-0 md:pr-10 text-xs md:text-base gap-1 md:gap-0">
            <p>تلفن پشتیبانی 09900968102</p>
            <h1 className="hidden md:block text-xl md:text-2xl font-thin text-gray-400 px-2">|</h1>
            <p>021-43283</p>
            <h1 className="hidden md:block text-xl md:text-2xl font-thin text-gray-400 px-2">|</h1>
            <p>همیشه هستیم همیشه سر بزن</p>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row-reverse justify-around items-center w-full my-10 md:my-20 gap-4 md:gap-0">
        <div className="flex flex-col items-center">
          <img src="/311.svg" className="w-12 h-12 md:size-20" />
          <p className="text-xs md:text-base text-center">امکان تحویل اکسپرس</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/312.svg" className="w-12 h-12 md:size-20" />
          <p className="text-xs md:text-base text-center">امکان پرداخت در محل</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/313.svg" className="w-12 h-12 md:size-20" />
          <p className="text-xs md:text-base text-center">۷ روز، ۲۴ ساعته</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/314.svg" className="w-12 h-12 md:size-20" />
          <p className="text-xs md:text-base text-center">هفت روز ضمانت بازگشت کالا</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/315.svg" className="w-12 h-12 md:size-20" />
          <p className="text-xs md:text-base text-center">ضمانت اصل بودن کالا</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:flex lg:flex-row-reverse justify-between w-full gap-6 lg:gap-0 lg:pr-4">
        <div className="flex flex-col items-end">
          <h2 className="text-lg md:text-2xl font-bold pb-3">بلوط</h2>
          <Link to="/category/:id"><h6 className="text-sm md:text-xl">تماس با فروشگاه بلوط</h6></Link>
          <Link to="/category/:id"><h6 className="text-sm md:text-xl py-2">درباره فروشگاه بلوط</h6></Link>
          <Link to="/category/:id"><h6 className="text-sm md:text-xl">فرصت های شغلی</h6></Link>
        </div>
        <div className="flex flex-col items-end">
          <h3 className="text-lg md:text-2xl font-bold pb-3">خدمات مشتریان</h3>
          <Link to="/category/:id"><h6 className="text-sm md:text-xl">پاسخ به پرسش های متداول</h6></Link>
          <Link to="/category/:id"><h6 className="text-sm md:text-xl py-2">شرایط استفاده</h6></Link>
          <Link to="/category/:id"><h6 className="text-sm md:text-xl">حریم خصوصی</h6></Link>
        </div>
        <div className="flex flex-col items-end">
          <h3 className="text-lg md:text-2xl font-bold pb-3">راهنمای خرید</h3>
          <Link to="/category/:id"><h6 className="text-sm md:text-xl">نحوه ثبت سفارش</h6></Link>
          <Link to="/category/:id"><h6 className="text-sm md:text-xl py-2">رویه ارسال سفارش</h6></Link>
          <Link to="/category/:id"><h6 className="text-sm md:text-xl">شیوه های پرداخت</h6></Link>
        </div>
        <div className="flex flex-col items-center col-span-2 lg:col-span-1">
          <h3 className="text-lg md:text-2xl font-bold pb-4 md:pb-7">!درارتباط باشیم</h3>

          <div className="flex flex-row gap-4 md:gap-7 items-center">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">
              <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-500 transition-colors">
              <FaTwitter className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
              <FaTelegram className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start my-4 md:my-5">
            <p className="text-sm md:text-xl my-3 text-center md:text-right">
              با ثبت ایمیل از جدیدترین تخفیف ها باخبر شوید
            </p>
            <span className="flex flex-col md:flex-row gap-2">
              <button
                type="submit"
                onClick={savemail}
                className="bg-red-400 hover:bg-red-200 text-white text-sm md:text-lg w-full md:w-24 h-10 px-2 rounded-2xl"
              >
                ثبت
              </button>
              <input
                placeholder="ایمیل خود را وارد کنید"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-gray-500 rounded-2xl bg-gray-200 text-right w-full md:w-[300px] h-[40px] pr-5 pb-1 text-sm md:text-base"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}