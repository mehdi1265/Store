import Meno from "./Meno"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NewContext } from "./NewContext"
import { useContext} from "react"
import { useEffect } from "react";
import Header from "./Header";
import Fotter from "./Fotter";


function Timer(){
    const[timeLeft,setTimeLeft]=useState(()=>{
      const saved =localStorage.getItem("timeLeft");
      return saved
        ? JSON.parse(saved)
        :{
        hours: 2,
        minutes:30,
        seconds:2}
      })
    useEffect(()=>{
    const timer = setInterval(()=>{
      setTimeLeft((prev)=>{
        let{hours,minutes,seconds} = prev ;
        if(seconds>0){
          seconds --;
        }else if (minutes>0){
          minutes --;
          seconds=59
        }else if(hours>0){
          hours --;
          minutes=59;
          seconds=59;
         
        }else{
          clearInterval(timer)
        }
        return{hours,minutes,seconds}
      })
    
    
    
  },1000)
    return () => clearInterval(timer);   
    }, []);   
      useEffect(() => {
    localStorage.setItem("timeLeft", JSON.stringify(timeLeft));
  }, [timeLeft]);
 return (
    <span className="flex flex-row gap-1">
      
      <button className="bg-white text-red-600 px-2 py-1 rounded">
        {String(timeLeft.hours).padStart(2, "0")}
      </button>
      <button className="bg-white text-red-600 px-2 py-1 rounded">
        {String(timeLeft.minutes).padStart(2, "0")}
      </button>
      <button className="bg-white text-red-600 px-2 py-1 rounded">
        {String(timeLeft.seconds).padStart(2, "0")}
      </button>
    </span>
  );}


export default function Home(){
     
      let {slides}=useContext(NewContext)
      let {menue}=useContext(NewContext)
      let {Cards}=useContext(NewContext)
      let {Cards2}=useContext(NewContext)
      let[isopen2,setIsopen2]=useState(null)   
      const whenCilck=(key)=>{
         setIsopen2(isopen2 ===key ?null : key)
      }
     
  
    return(
        
        <div className="flex flex-col select-none ">
          <Header/>
          <div className="mx-[40] mt-4">
   <section>     
          <div>
            <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="w-full  rounded-xl"
         >
            {slides.map((slide,i) => (
            <SwiperSlide key={i}>
          <Link to={`/products?category=${slide.id}`}>
                  <img
                  src={slide.img}
                  alt={`slide-${i}`}
                  className="w-full h-[400px] object-cover cursor-pointer"
                  />
               </Link>
        </SwiperSlide>
      ))}
    </Swiper>
          </div>
   </section> 

   <section>     
          <div>
             <ul className="flex flex-row justify-center items-center gap-32 mt-10 pt-3" >
               {
                  menue.map((item,key)=>{
                    return(
                    <Link key={key} to={`/products?category=${item.id}`}>
                     <li onClick={()=>whenCilck(key)} key={key} 
                     className="flex flex-col items-center gap-2">
                        {item.icon}
                      <span >{item.name}</span>  
                       { isopen2 === key }
                        </li>
                       </Link>

                  )})
               }
               </ul>
               
            </div>
   </section>

   <section>      
            <div className="flex felx-row m-auto w-[1620px] h-[300px] my-10 bg-red-600  border rounded-lg">
              
                  <div className="flex items-center overflow-hidden ">
                    <Swiper
                      modules={[Navigation]}
                      navigation
                      spaceBetween={12}
                      slidesPerView="auto"
                      dir="rtl"
                     className="h-full items-center"
                    >    
                   { Cards.map((card) => (
                    <SwiperSlide key={card.id} className="!w-[180px] !flex !items-center !h-auto">
                    <div
                      key={card.id}
                      className="flex-shrink-0 flex-col items-center w-[185px] h-[280px]  bg-white rounded-lg p-3"
                    >
                      <img src={card.img} alt={card.name} className=" h-30 w-30"/>
                      <h6>{card.name}</h6>
                      <div className="flex felx-row justify-end">
                      <p className="pl-2 text-red-800">{card.percent}</p>
                      <p className="text-gray-700 line-through text-left">{card.price.toLocaleString("fa-IR")}</p>
                      </div>
                      <div className="flex felx-row justify-end">
                      <h6 className="text-black text-left">{card.newPrice.toLocaleString("fa-IR")}</h6>
                      <p className="pr-2 font-bold">تومان</p>
                      </div>
                    </div>
                    </SwiperSlide>
                   ))}
                
               </Swiper>
                   </div >
                     <div id="shegeftangiz" className="flex flex-col items-center p-12 size-15 text-white">
                     <img src="./300.png" className="w-15 h-15 " ></img>
                     <h5 className="pl-3 py-2 text-xl">شگفت انگیز</h5>
                     <Timer/>
                     <Link to="/products"> <button className="bg-white text-black text-lg w-40  h-8 m-3 px-2 rounded-lg">مشاهده همه</button></Link>
                  </div>
               </div>

   </section>

   <section>
              <div className="flex gap-2 my-20 justify-center">
                 {
                   Cards2.map((card2)=>{
                    return(
                     <Link to={`/products?category=${card2.id}`}> <div key={card2.id} className="">
                      <img  src={card2.img} className="rounded-lg"/> 
                      </div>
                      </Link>
                   )}
              )}

              </div>
   </section> 

    <section>      
            <div className="flex felx-row m-auto w-[1620px] h-[300px] my-10 bg-green-600  border rounded-lg">
              
                  <div className="flex items-center  overflow-hidden ">
                    <Swiper
                      modules={[Navigation]}
                      navigation
                      spaceBetween={12}
                      slidesPerView="auto"
                      dir="rtl"
                     className="h-full items-center"
                    >    
                   { Cards.map((card) => (
                    <SwiperSlide key={card.id} className="!w-[180px] !flex !items-center !h-auto">
                    <div
                      key={card.id}
                      className="flex-shrink-0 flex-col items-center w-[185px] h-[280px]  bg-white rounded-lg p-3"
                    >
                      <img src={card.img} alt={card.name} className=" h-30 w-30"/>
                      <h6>{card.name}</h6>
                      <div className="flex felx-row justify-end">
                      <p className="pl-2 text-red-800">{card.percent}</p>
                      <p className="text-gray-700 line-through text-left">{card.price.toLocaleString("fa-IR")}</p>
                      </div>
                      <div className="flex felx-row justify-end">
                      <h6 className="text-black text-left">{card.newPrice.toLocaleString("fa-IR")}</h6>
                      <p className="pr-2 font-bold">تومان</p>
                      </div>
                    </div>
                    </SwiperSlide>
                   ))}
                
               </Swiper>
                   </div>
                     <div id="porforosh" className="flex flex-col items-center p-12 size-15 text-white">
                     <img src="./300.png" className="w-15 h-15 " ></img>
                     <h5 className="pl-3 py-2 text-xl">‍‍پرفروش ترین ها</h5>
                     <Timer/>
                     <Link to="/category"> <button className="bg-white text-black text-lg w-40  h-8 m-3 px-2 rounded-lg">مشاهده همه</button></Link>
                  </div>
               </div>

   </section>

   <section>
              <div className="flex gap-2 my-20 justify-center">
                 {
                   Cards2.reverse().map((card2)=>{
                    return(
                     <Link to="/category/:id"> <div key={card2.id} className="">
                      <img  src={card2.img} className="rounded-lg"/> 
                      </div>
                      </Link>
                   )}
              )}

              </div>
   </section>     
   <Fotter/>        

             </div>
            </div>
    )
}
