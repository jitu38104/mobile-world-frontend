import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { cartContext } from '../cartContext';
import { stringPrice } from '../utils';

function Product(props) {
    const {_id, name, price, imgPath} = props.data;        
    const { cart, setCart } = useContext(cartContext);
    const [isAdded, setIsAdded] = useState(false);

    function clickHandler(e){        
        const _cart = { ...cart };        
        setIsAdded(true);

        if(!_cart.items){
            _cart.items = {};
            _cart.total = 0;
            _cart.amount = 0;
        }

        if(_cart.items[_id]){
            _cart.items[_id] += 1;            

        } else {
            _cart.items[_id] = 1;
        }  

        _cart.total += 1;
        _cart.amount += price;
        setCart(_cart);
        
        setTimeout(()=>{
            setIsAdded(false);
        }, 1000);
    }
    
    return (
        
        <div className="prod-item text-center col-12 col-md-3">
            
                <Link to={`product/${_id}`}>
                    <img src={imgPath} alt="prod-img" height="200" width="200" />
                    <hr className="mt-0 mb-2" />
                    <span className="prod-name">{name}</span>
                </Link>
                
            
            <div className="price-box d-flex justify-content-between align-items-center mt-2">
                <span>₹ { stringPrice(price) }</span>
                <button disabled={isAdded} className="btn" type="button" onClick={clickHandler}>ADD{isAdded ? 'ED':null}</button>
            </div>            
        </div>            
        
    );
}

export default Product;
