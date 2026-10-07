import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";
import { useEffect, useState } from "react";



export default function Fotter(){
  let [email,setEmail]=useState("")
  useEffect(()=>{
  const savedEmail=localStorage.getItem("email")
  savedEmail ?setEmail(savedEmail) : null
},[])
   const savemail=()=>{
    if(email.trim()){
      localStorage.setItem("email" , email );
      alert("ذخیره شد")
      setEmail(" ")
    }
   }
    return(
     <div className="mx-40 flex flex-col items-end">
      <hr className="border-gray-500 w-full my-4"></hr>
  
  <div className="flex flex-row justify-between w-full">
    <a href="#">
      <button className="flex flex-row items-center border text-lg border-gray-400 rounded-xl bg-gray-200 ml-10 mt-10 p-4">
        <img src="upload.png" className="w-[38px] h-[38px] rounded-3xl p-2" />
        بازگشت بالا
      </button>
    </a>

    <div className="flex flex-col items-end">
      <img src="/123.png" className="w-[150px] h-[150px] rounded-3xl" />
      <span className="flex flex-row-reverse pr-10">
        <p>تلفن پشتیبانی 09900968102</p>
        <h1 className="text-2xl font-thin text-gray-400 px-2">|</h1>
        <p>021-43283</p>
        <h1 className="text-2xl font-thin text-gray-400 px-2">|</h1>
        <p>همیشه هستیم همیشه سر بزن</p>
      </span>
    </div>
  </div>

 
  <div className="flex flex-row-reverse justify-around items-center w-full  my-20 ">
    <div className="flex flex-col items-center">
      <img src="/311.svg" className="size-20" />
      <p>امکان تحویل اکسپرس</p>
    </div>
    <div className="flex flex-col items-center">
      <img src="/312.svg" className="size-20" />
      <p>امکان پرداخت در محل</p>
    </div>
    <div className="flex flex-col items-center">
      <img src="/313.svg" className="size-20" />
      <p>۷ روز، ۲۴ ساعته</p>
    </div>
    <div className="flex flex-col items-center">
      <img src="/314.svg" className="size-20" />
      <p>هفت روز ضمانت بازگشت کالا</p>
    </div>
    <div className="flex flex-col items-center">
      <img src="/315.svg" className="size-20" />
      <p>ضمانت اصل بودن کالا</p>
    </div>
  </div>
  <div className="flex flex-row-reverse justify-between w-full pr-4">
    <div className="flex flex-col items-end ">
        <h2 className="text-2xl font-bold pb-3">بلوط</h2>
       <Link to="/category/:id"><h6 className="text-xl ">تماس با فروشگاه بلوط </h6></Link>
       <Link to="/category/:id"><h6 className="text-xl py-2 ">درباره فروشگاه بلوط</h6></Link>
       <Link to="/category/:id"><h6 className="text-xl ">فرصت های شغلی</h6></Link>
    </div>
    <div className="flex flex-col items-end">
        <h3 className="text-2xl font-bold pb-3">خدمات مشتریان</h3>
       <Link to="/category/:id" ><h6 className="text-xl ">پاسخ به پرسش های متداول</h6></Link>
       <Link to="/category/:id" ><h6 className="text-xl py-2 ">شرایط استفاده</h6></Link>
       <Link to="/category/:id" ><h6 className="text-xl ">حریم خصوصی</h6></Link>
    </div>
    <div className="flex flex-col items-end">
        <h3 className="text-2xl font-bold pb-3">راهنمای خرید </h3>
       <Link to="/category/:id"><h6 className="text-xl">نحوه ثبت سفارش</h6></Link>
       <Link to="/category/:id"><h6 className="text-xl py-2">رویه ارسال سفارش</h6></Link>
       <Link to="/category/:id"><h6 className="text-xl">شیوه های پرداخت</h6></Link>
    </div>
    <div className="flex flex-col items-center" >
    <h3 className="text-2xl font-bold pb-7">!درارتباط باشیم</h3>
   
    <div className="flex flex-row gap-7 items-center">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-500 transition-colors"
      >
        <FaInstagram className="w-8 h-8" />
      </a>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-sky-500 transition-colors"
      >
        <FaTwitter className="w-8 h-8" />
      </a>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        <FaTelegram className="w-8 h-8" />
      </a>
    </div>
    <div className="flex flex-col items-start my-5">
       <p className="text-xl my-3">با ثبت ایمیل از جدیدترین تخفیف ها باخبر شوید</p> 
       <span>
       
        <button type="submit" onClick={savemail}
        className="bg-red-400 hover:bg-red-200 text-white text-lg w-25 h-10 m-3 px-2 rounded-2xl">ثبت</button>
         <input placeholder="ایمیل خود را وارد کنید"
         onChange={(e)=>setEmail(e.target.value)}
         value={email}
          className="border border-gray-500 rounded-2xl bg-gray-200 text-right w-[300px] h-[40px] pr-5 *: pb-1"/>
        </span>
        </div>
     </div> 
 </div>
</div>
)}

