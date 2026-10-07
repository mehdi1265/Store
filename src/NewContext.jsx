import {createContext, useEffect, useState } from "react";
import { FaMobile } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export let NewContext=createContext()

export function AppProvider({children}){
   const slides = [
    { img: "/1.webp", id: "mobile" },
    { img: "/2.webp", id: "laptop" },
    { img: "/3.webp", id: "headphone" },
    { img: "/4.webp", id: "watch" },
  ];
        const categories =[
      {
        id:"mobile",
      name: "گوشی موبایل",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24 ">
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
      ),
      submeno:[
      { id:"appel", name:"Appel" },
      {id:"sumsung",name:" Sumsung "},
       {id:"xiaomi",name:" Xiaomi"} ,
       {id:"nokiya",name:" nokiya"}
      ]
    },
    {
      id:"laptop",
      name: "لپ‌تاپ",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      ),
       submeno:[
      { id:"appel", name:"Appel" },
      {id:"sumsung",name:" Sumsung "},
       {id:"xiaomi",name:" Xiaomi"} ,
       {id:"nokiya",name:" nokiya"}
      ]
    },
    {
      id:"headphone",
      name: "هدفون",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 14v-2a8 8 0 0116 0v2" />
          <rect x="2" y="14" width="4" height="6" rx="1" />
          <rect x="18" y="14" width="4" height="6" rx="1" />
        </svg>
      ),
      submeno:[
      { id:"appel", name:"Appel" },
      {id:"sumsung",name:" Sumsung "},
       {id:"xiaomi",name:" Xiaomi"} ,
       {id:"nokiya",name:" nokiya"}
      ]
    },
     
    {
      id:"watch",
      name: "ساعت هوشمند",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="6" y="6" width="12" height="12" rx="3" />
          <path d="M9 6V3h6v3M9 18v3h6v-3" />
        </svg>
      ),
       submeno:[
      { id:"appel", name:"Appel" },
      {id:"sumsung",name:" Sumsung "},
       {id:"xiaomi",name:" Xiaomi"} ,
       {id:"nokiya",name:" nokiya"}
      ]
    },
    
    {
      id:"camera" ,
      name: "دوربین",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 8a2 2 0 012-2h2l2-2h6l2 2h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      ),
       submeno:[
      { id:"appel", name:"Appel" },
      {id:"sumsung",name:" Sumsung "},
       {id:"xiaomi",name:" Xiaomi"} ,
       {id:"nokiya",name:" nokiya"}
      ]
    },
    {
      id:"gaming" ,
      name: "گیمینگ",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="10" rx="4" />
          <line x1="7" y1="12" x2="7" y2="12" />
          <line x1="17" y1="12" x2="17" y2="12" />
        </svg>
      ),
       submeno:[
      { id:"appel", name:"Appel" },
      {id:"sumsung",name:" Sumsung "},
       {id:"xiaomi",name:" Xiaomi"} ,
       {id:"nokiya",name:" nokiya"}
      ]
    },
  ];
   const menue=[
        {name:" سوبر مارکت",
        icon:
        (
             <img src="11.webp" className="w-[50px] h-[50px]"></img>
        )},
         {name:"برندهای بوشاک" ,
        icon:(
          <img src="12.webp" className="w-[50px] h-[50px]"></img>
        )},
         {name:"بیشنهاد خریداران",
        icon:(
          <img src="13.webp" className="w-[50px] h-[50px]"></img>
        )},
         {name:"فروشگاه حضوری" ,
        icon:(
          <img src="14.webp" className="w-[50px] h-[50px]"></img>
        )},
         {name:"زندگی دانشجویی",
        icon:(
          <img src="15.webp" className="w-[50px] h-[50px]"></img>
        )},
         {name:"سوپرمارکت",
        icon:(
          <img src="16.webp" className="w-[50px] h-[50px]"></img>
        )},
         {name:"انبار تکانی پوشاک",
        icon:(
          <img src="17.webp" className="w-[50px] h-[50px]"></img>
        )}
      ]
  let Cards= [
    {id:1 , name:"دسته بازی فیلیپس" ,price:9800000 , newPrice:4628000  ,percent:"53%" ,img:"/111.webp"},
  {id:2 , name:"کنسول بازی سونی" ,price:190000000, newPrice:174000000 ,percent:"7%", img:"/113.webp"},
{id:3, name:" پاور بانک 2.5 وات " ,price:"ناموجو", newPrice:"_" ,percent:"51%" ,img:"./112.webp"},
{id:4, name:"پاوربانک 2.5 شیاءومی" ,price: "اتمام موجودی", newPrice:"_" ,percent:"43%" ,img:"./115.webp"},
{id:5, name:"دسته بازی پلی استیشن" ,price:2003800 , newPrice:12499000 ,percent:"38%" ,img:"./114.webp"},
{id:6, name:"اندروید باکس نت" ,price:18990000, newPrice:17091000 ,percent:"10%" ,img:"./116.webp"},
{id:7, name:"اندروید باکس نت" ,price:18990000, newPrice:17091000 ,percent:"10%" ,img:"./112.webp"} ,  
{id:8, name:"دسته بازی پلی استیشن" ,price:2003800 , newPrice:12499000 ,percent:"38%" ,img:"./114.webp"}
  ]
let Cards2=[
    {id:1 , img:"/211.gif"},
     {id:2 , img:"/212.jpg"},
      {id:3 , img:"/213.jpg"},
       {id:4 , img:"/214.jpg"},
       
  ]
    return(
        <NewContext.Provider value={{categories,slides,menue,Cards,Cards2}}>
            {children}
        </NewContext.Provider>
    )
  }