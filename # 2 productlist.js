import React, { useState, useEffect } from 'react';
import { getProducts } from '../utils/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        };
        fetchProucts();

    }, []);

    return (
        <u1>
            {products.map((product) => (
                <li key={product.id}>
                    <productItem product={product} />
                </li>
            ))}
        </u1>
    );
};

export default ProductList;
