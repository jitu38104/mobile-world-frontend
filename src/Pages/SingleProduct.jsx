import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { cartContext } from "../cartContext";
import Footer from '../Components/Footer';
import { stringPrice } from "../utils";

function SingleProduct(){
    const history = useHistory();
    const params = useParams();
    const [prod, setProd] = useState({});
    const { cart, setCart } = useContext(cartContext);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() =>{        
        const url = `/mobile-world/single-product/${params.id}`;

        fetch(url).then(res=>{
            res.json().then(res=>{
                setProd(res);
            });
        }).catch(err=>{
            console.error(err);
        });
    }, [params.id]);
    

    function clickHandler(e){        
        const _cart = { ...cart };        
        setIsAdded(true);

        if(!_cart.items){
            _cart.items = {};
            _cart.total = 0;
            _cart.amount = 0;
        }

        if(_cart.items[prod._id]){
            _cart.items[prod._id] += 1;            

        } else {
            _cart.items[prod._id] = 1;
        }  

        _cart.total += 1;
        _cart.amount += prod.price;
        setCart(_cart);
        
        setTimeout(()=>{
            setIsAdded(false);
        }, 1000);
    }


    return (
        <div className="container mt-5 prod-page">
            <button className="mb-5" type="button" onClick={()=> history.goBack()}>
                Back
            </button>
            <div className="d-flex align-items-center">
                <img src={prod.imgPath} alt="prod-img" height="200" width="200" />                
                <div className="prod-detail">
                    <div className="w-50 mb-3 written-detail">
                        <h3>{prod.name}</h3>
                        <h6>
                            {prod.info}                            
                        </h6>
                        <h5 className="prod-price ms-2">₹ {stringPrice(prod.price)}</h5>
                    </div>                    
                    <button disabled={isAdded} className="btn" type="button" onClick={clickHandler}>{isAdded? "Added" : "Add to Cart"}</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SingleProduct;