import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../cartContext';
import SingleProduct from '../Pages/SingleProduct';
import ProductPage from '../Pages/ProductPage';
import AboutUs from '../Pages/AboutUs';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import PageNotFound from '../Pages/PageNotFound';


function Links(){           
    const { cart } = useContext(cartContext);  
    
    let cartTotalItems = cart ? cart.total : 0;

    return (
        <div className="container">      
            <Router>
                <nav className="m-2 d-flex justify-content-between align-items-center">                    
                    <div className="logo-img">                        
                        <Link to='/'>
                            <i className="fas fa-mobile-alt"></i>                            
                            <span className="ms-2"> Mobile World </span>
                        </Link>
                    </div>                    

                    <div className="link-bar d-flex justify-content-between align-items-center">              
                        <Link to="/">Home</Link>          
                        <Link to="/products">Products</Link>
                        <Link to="/about">About</Link>
                        <Link to="/cart">
                            <div className="cart">
                                <span>{cartTotalItems ? cartTotalItems : 0}</span>
                                <i className="fas fa-shopping-cart ms-2"></i>                                
                            </div>
                        </Link>
                    </div>           
                </nav>  

                <Switch>        
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/about" component={AboutUs}></Route>
                    <Route path="/products" component={ProductPage}></Route>
                    <Route path="/product/:id" component={SingleProduct} exact></Route>                    
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/*" component={PageNotFound}></Route>
                </Switch>
            </Router>
        </div>  
    );
}

export default Links;