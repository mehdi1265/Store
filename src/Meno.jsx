import { Link } from "react-router-dom"
import { NewContext } from "./NewContext"
import { useContext, useState } from "react"

export default function Meno(){
  let {categories}=useContext(NewContext)
  let [openmeno,setOpenmeno]=useState(null)
   const subMeno = (index)=>{
    setOpenmeno(openmeno === index ? null :index )
  }
    return(
        <div className="select-none">
            <ul className="text-right cursor-pointer">
                {categories.map((Item,index)=>{
                    return(
                    <li className="flex flex-row-reverse items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={
                        ()=>subMeno(index)
                    }
                    key={index}
                    >
                    {Item.icon}
                    <span>{Item.name}</span>
                            {openmeno === index && (
            <ul className="mr-6 mt-1 border-r-2 border-gray-200">
                {Item.submeno.map((sub) => (
                <li key={sub.id} 
                className="p-2 text-sm hover:bg-gray-50 cursor-pointer">
                    <Link  to={`/products?category=${sub.id}`}
                      className="block p-2 text-sm hover:bg-gray-50 rounded-lg">
                        {sub.name}
                      </Link>
                    
                    
                </li>
        ))}
      </ul>
    )}
                   </li>     
                )})}

            </ul>



        </div>
    )
}