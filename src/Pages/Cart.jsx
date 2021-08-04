import { useEffect, useState, useContext } from 'react';
import { cartContext } from "../cartContext";
import CartItem from "../Components/CartItem";
import { stringPrice } from "../utils";

function Cart(){       
    const { cart, setCart } = useContext(cartContext);
    const [cartKeys, setCartKeys] = useState([]);

    useEffect(()=>{        
        
        if(cart && cart.items){
            setCartKeys(Object.keys(cart.items));
        }
                       
    }, [cart]);

    function emptyCart(){
        const voidCart = {}
        voidCart.items = {};
        voidCart.total = 0;
        voidCart.amount = 0;

        setCart(voidCart);
        alert("THANK YOU FOR SHOPPING!");
    }


    return (
        cartKeys.length 
            ? (<div className="container cart-container mt-5 w-75">
                    <h5>Cart Items</h5>
                    <div className="item-box d-flex flex-column mx-auto">
                        
                        <ul className="list-group">
                            {cartKeys.map((id, index)=>{
                                return (
                                    <li key={index} className="list-group-item">
                                        <CartItem key={id} Id={id} qty={cart.items[id]} />
                                    </li>
                                ); 
                            })}                    
                        </ul>                                
                        
                    </div>

                    <div className="text-end mt-3 me-2 grand-total-box">
                        <h5>
                            Grand Total: &nbsp; ₹ { stringPrice(cart.amount) }
                        </h5>
                    </div>
                    
                    <button type="button" className="btn order-btn float-end my-4" onClick={emptyCart}>Order Now</button>                    
                    
                </div>)
            : (<div className="blank-box">                    
                    <img src="empty_cart.png" alt="empty-cart-img" />
            </div>)
        
    );
}

export default Cart;