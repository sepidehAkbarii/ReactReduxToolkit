import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(){
        let navigate=useNavigate()
       let cartProducts=useSelector((state)=>state.cart)
      let dispatch=useDispatch()
      const totalItems = cartProducts.length

    
    return (
        <div style={{backgroundColor:"gray",position:"fixed",top :0,width:"100%"}}>
           <div style={{textAlign:"left" ,padding :"5px"}}>
            <Link to="/" style={{color:'white'}}>home</Link>
            </div> 

           <button  onClick={()=>{navigate('/cart')}} style={{float:"right"}}>
              <FontAwesomeIcon icon={faShoppingCart} />
            {totalItems}
           </button>
        </div>
    )
}