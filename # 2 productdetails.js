import React, {useState, useEffect} from 'react';
import { getProduct } from '../api/productAPI';

const ProductDetails = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProduct(productId);
            setProduct(product);
        };
        fetchProduct();
    }, [productId]);

    return (
        <div>
            <h2>Product Details</h2>
            <p>Name: {product?.name}</p>
            <p>price: {product?.price}</p>
            <button onClick={() => deleteProduct(productId)}>Delete Product</button>
        </div>
    );
};

export default ProductDetails;
