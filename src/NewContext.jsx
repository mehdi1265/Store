import {createContext, useEffect, useState } from "react";
import { FaMobile } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
} from "lucide-react";


export let NewContext=createContext()

export function AppProvider({children}){
   const slides = [
    { img: "/1.webp", id: "mobile" },
    { img: "/2.webp", id: "laptop" },
    { img: "/3.webp", id: "headphone" },
    { img: "/4.webp", id: "watch" },
  ];
        
const categories = [
  { id: "mobile", name: "موبایل", icon: Smartphone },
  { id: "laptop", name: "لپ‌تاپ", icon: Laptop },
  { id: "headphone", name: "هدفون و هدست", icon: Headphones },
  { id: "watch", name: "ساعت هوشمند", icon: Watch },
  { id: "camera", name: "دوربین", icon: Camera },
  { id: "gaming", name: "بازی و کنسول", icon: Gamepad2 },
];


const products = [
  // موبایل
  {
    id: 1,
    name: "iPhone 15",
    category: "mobile",
    brand: "Apple",
    price: 45000000,
    image: "",
    features: { storage: 128, ram: 6, color: "مشکی" },
  },
  {
    id: 2,
    name: "iPhone 14",
    category: "mobile",
    brand: "Apple",
    price: 35000000,
    image: "",
    features: { storage: 128, ram: 6, color: "آبی" },
  },
  {
    id: 3,
    name: "Galaxy A55",
    category: "mobile",
    brand: "Samsung",
    price: 22000000,
    image: "",
    features: { storage: 256, ram: 8, color: "آبی" },
  },
  {
    id: 4,
    name: "Redmi Note 13",
    category: "mobile",
    brand: "Xiaomi",
    price: 14000000,
    image: "",
    features: { storage: 256, ram: 8, color: "سبز" },
  },

  // لپ‌تاپ
  {
    id: 5,
    name: "Asus Vivobook 15",
    category: "laptop",
    brand: "Asus",
    price: 38000000,
    image: "",
    features: { ram: 16, storage: 512, gpu: "integrated" },
  },
  {
    id: 6,
    name: "Lenovo IdeaPad Slim 3",
    category: "laptop",
    brand: "Lenovo",
    price: 32000000,
    image: "",
    features: { ram: 8, storage: 512, gpu: "integrated" },
  },
  {
    id: 7,
    name: "MacBook Air M2",
    category: "laptop",
    brand: "Apple",
    price: 65000000,
    image: "",
    features: { ram: 8, storage: 256, gpu: "integrated" },
  },

  // هدفون
  {
    id: 8,
    name: "Sony WH-1000XM5",
    category: "headphone",
    brand: "Sony",
    price: 18000000,
    image: "",
    features: {
      connection: "wireless",
      noiseCancellation: true,
      color: "مشکی",
    },
  },
  {
    id: 9,
    name: "AirPods Pro 2",
    category: "headphone",
    brand: "Apple",
    price: 12000000,
    image: "",
    features: {
      connection: "wireless",
      noiseCancellation: true,
      color: "سفید",
    },
  },
  {
    id: 10,
    name: "Redmi Buds 5",
    category: "headphone",
    brand: "Xiaomi",
    price: 2500000,
    image: "",
    features: {
      connection: "wireless",
      noiseCancellation: true,
      color: "سفید",
    },
  },

  // ساعت هوشمند
  {
    id: 11,
    name: "Apple Watch SE",
    category: "watch",
    brand: "Apple",
    price: 15000000,
    image: "",
    features: {
      compatibility: "ios",
      waterResistance: true,
      color: "مشکی",
    },
  },
  {
    id: 12,
    name: "Galaxy Watch 6",
    category: "watch",
    brand: "Samsung",
    price: 13000000,
    image: "",
    features: {
      compatibility: "android",
      waterResistance: true,
      color: "نقره‌ای",
    },
  },
  {
    id: 13,
    name: "Redmi Watch 4",
    category: "watch",
    brand: "Xiaomi",
    price: 4500000,
    image: "",
    features: {
      compatibility: "android",
      waterResistance: true,
      color: "مشکی",
    },
  },

  // دوربین
  {
    id: 14,
    name: "Canon EOS R50",
    category: "camera",
    brand: "Canon",
    price: 52000000,
    image: "",
    features: { cameraType: "mirrorless", resolution: 24 },
  },
  {
    id: 15,
    name: "Sony Alpha A6400",
    category: "camera",
    brand: "Sony",
    price: 48000000,
    image: "",
    features: { cameraType: "mirrorless", resolution: 24 },
  },
  {
    id: 16,
    name: "Nikon D7500",
    category: "camera",
    brand: "Nikon",
    price: 42000000,
    image: "",
    features: { cameraType: "dslr", resolution: 21 },
  },

  // بازی و کنسول
  {
    id: 17,
    name: "PlayStation 5",
    category: "gaming",
    brand: "Sony",
    price: 35000000,
    image: "",
    features: { platform: "playstation", storage: 825 },
  },
  {
    id: 18,
    name: "Xbox Series X",
    category: "gaming",
    brand: "Microsoft",
    price: 38000000,
    image: "",
    features: { platform: "xbox", storage: 1024 },
  },
  {
    id: 19,
    name: "Nintendo Switch OLED",
    category: "gaming",
    brand: "Nintendo",
    price: 20000000,
    image: "",
    features: { platform: "switch", storage: 64 },
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
        <NewContext.Provider value={{categories,slides,menue,Cards,Cards2,products}}>
            {children}
        </NewContext.Provider>
    )
  }