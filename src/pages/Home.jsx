import { useDispatch, useSelector } from "react-redux"
import "../App.css"
import { useEffect } from "react"
import { fetchProducts } from "../Redux/ProductSlice"
import CartSlice from "../Redux/CartSlice"

export default function Home(){

    let dispatch=useDispatch()

     let {add}=CartSlice.actions // دسترسی به اکشن های صفحه که در reducer هستند 
     
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])//یک مقدار اولیه

   

    let {data ,status}= useSelector((state)=>state.product)//دسترسی به state

    if(status=="LOADING"){
        return <h2>در حال بارگزاری</h2>
    }

    if(status=="ERROR")
         return <h2>عملیات با خطا مواجه شد .</h2>

    return (

        <div  className="row">{
            data.map((item,index)=>(
                 <div key={index} className="col-3">
                  <img style={{width:"200px"}} src={item.image} alt={item.title}></img>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                  <button onClick={()=>dispatch(add(item))}>add to cart</button>
                </div>
            ))}
        </div>
    )
}