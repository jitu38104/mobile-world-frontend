import Links from './Components/Links';
import { cartContext } from './cartContext';
import { useState, useEffect } from 'react';
import { getCartProduct, setCartProduct } from './utils';

function App() {
  const [cart, setCart] = useState({});

  useEffect(() => { 
    getCartProduct().then(res =>{
      const cartItem = res;
      setCart(cartItem);
    });    
  }, []);

  useEffect(()=> {
    setCartProduct(cart);
  }, [cart]);

  return (
    <> 
      <cartContext.Provider value={{ cart, setCart }} >
        <Links />
        {/* pages will be rendered here! */}
      </cartContext.Provider>
    </>
  );
}

export default App;
