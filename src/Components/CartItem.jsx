import { useEffect, useState, useContext } from 'react';
import { cartContext } from "../cartContext";
import { stringPrice } from '../utils';

function CartItem(props){
    const [itemVal, setItemVal] = useState({});
    const [qty, setQty] = useState(props.qty);
    const { cart, setCart } = useContext(cartContext);

    useEffect(()=>{
        const url = `https://mobile-world-app.herokuapp.com/mobile-world/single-product/${props.Id}`;
        fetch(url).then(res=>{
            res.json().then(res=>{
                setItemVal(res);
            });
        }).catch(err=>{
            console.error(err);
        });
    }, [props.Id]);

    function qtyIncHandler() {
        const _cart = { ...cart };
        _cart.items[props.Id] += 1;
                
        _cart.total += 1;
        _cart.amount += itemVal.price;
                
        setQty(_cart.items[props.Id]);
        setCart(_cart);
    }   

    function qtyDecHandler() {
        const _cart = { ...cart };        

        if(_cart.items[props.Id] > 1){
            _cart.items[props.Id] -= 1;
            setQty(_cart.items[props.Id]);
            _cart.total -= 1;          
            _cart.amount -= itemVal.price;           
        } else {
            _cart.items[props.Id] = 1;
            setQty(1);
        }        
        setCart(_cart);
    }

    function delHandler() {
        const _cart = { ...cart };
        const newCart = {items: {}};

        for(let item in _cart.items){
            if(item !== props.Id){
                newCart.items[item] = _cart.items[item];
            }            
        }
        newCart.total = _cart.total - _cart.items[props.Id];
        newCart.amount = _cart.amount - (_cart.items[props.Id] * itemVal.price);
        setCart(newCart);
    }
    return (        
        <div className="cart-box d-flex justify-content-between align-items-center my-1">
            <div className="cart-img-box d-flex align-items-center">
                <img src={itemVal.imgPath} className="" height="50" width="50" alt="cart-img" style={{objectFit: "contain"}} />
                <h5 className="ms-4">{itemVal.name}</h5>
            </div>
            <div className="control-panel d-flex align-items-center">
                <button type="button" className="btn" onClick={qtyIncHandler}><strong>+</strong></button>
                <h5 className="mx-3">{qty}</h5>
                <button type="button" className="btn" onClick={qtyDecHandler}><strong>-</strong></button>
            </div>
            <span>
                <h5>₹ { stringPrice(itemVal.price * qty) }</h5>
            </span>            
            <div className="my-auto del-btn">
                <button type="button" className="btn" onClick={delHandler}>Delete</button>
            </div>
        </div>
    );
}

export default CartItem;