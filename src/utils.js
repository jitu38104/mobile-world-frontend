export const getCartProduct = () => {
    return new Promise((resolve, reject)=>{
        const cartItem = JSON.parse(window.localStorage.getItem('cart'));
        resolve(cartItem);
    });    
}

export const setCartProduct = (cartContext) => {
    return window.localStorage.setItem('cart', JSON.stringify(cartContext));    
}

export const stringPrice = (x=0) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}