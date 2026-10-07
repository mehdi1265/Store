import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NewContext } from "./NewContext";
import { useContext} from "react"
import Header from "./Header";



export default function CategoryPages(){
    const [searchParams]=useSearchParams()
    const category=searchParams.get("category")
    const navigate = useNavigate();     
    const { categories } = useContext(NewContext);
    const found = categories.find((item) =>String(item.id)===String(category));
    const title = found ? found.name : category;



 return(
    
    <div>
        
        <Header/>
    <div className=" flex justify-between p-10 rtl text-right select-none">
        
        <button 
        onClick={()=>navigate(-1)}
        className="text-blue-500 hover:underline">
            بازگشت
        </button>
        <h1 dir="rtl" className="text-3xl font-bold mt-5">
            {category ?`محصول:${title}` : "همه محصولات"}
        </h1>
    </div>
    </div>
 )
}