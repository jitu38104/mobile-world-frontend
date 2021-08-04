import Product from "./Product";
import { useEffect, useState } from 'react';

function Products(){
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        const url = "https://mobile-world-app.herokuapp.com/mobile-world/products"; 
        
        fetch(url).then((response)=>{
            response.json().then((json)=>{
                // console.log(json);
                setProducts(json);
            });
        }).catch(err=>{
            console.error(err);
        });
    }, []);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">                
                
                {products.map((product)=>{
                    //console.log(product.name);
                    return <Product key={product._id} data={product} />
                })}

            </div>
        </div>
    );
}

export default Products;