import { useDispatch, useSelector } from "react-redux";
import CartSlice from "../Redux/CartSlice";


export default function Cart(){

    let cartProducts=useSelector((state)=>state.cart)

    let dispatch=useDispatch()
    let {remove,changeQuantity,clearCart}=CartSlice.actions

    let total=0
    function calculatePrice(){
        cartProducts.map((item)=> total+= item.price* item.quantity
        )
        return total;
    }

    return (

        <div>
            {
                cartProducts.map((item,index)=>(
                <div key={index} className="flex">
                    <img src={item.image} style={{width:"200px"}} alt={item.title} className="col-2"></img>
                    <div className="col-2">
                        <button disabled={item.quantity<=1} onClick={()=>dispatch(changeQuantity({id:item.id,change:-1}))}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={()=>dispatch(changeQuantity({id:item.id,change:+1}))} >+</button>
                    </div>
                    <p className="col-1">{item.title}</p>
                    <p className="col-1">{item.price}</p>
                    <p>total price {item.price * item.quantity}</p>
                    <button className="col-1" onClick={()=>dispatch(remove(item.id))}>remove</button>
                </div>
                ))
            }

            <div>
                <p>total price {calculatePrice()}</p>
                <button onClick={()=>dispatch(clearCart())}> clear all cart</button>
            </div>
        </div>
    )
}