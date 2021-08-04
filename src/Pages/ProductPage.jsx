import Product from "../Components/Product";
import { useEffect, useState } from 'react';
import Footer from '../Components/Footer';

function ProductPage() {
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        const url = "/mobile-world/products";

        fetch(url).then(response=>{
            response.json().then(json=>{
                setProduct(json);
            });
        }).catch(err=>{
            console.error(err);
        });
    }, []);

    return (
        <div className="container single-container">
            <h1 className="text-center">Products</h1>
            <div className="row justify-content-center">

                {product.map((item)=>{                    
                    return <Product key={item._id} data={item} />
                })}
                               
            </div>
            <Footer />
        </div>
    );
}

export default ProductPage;