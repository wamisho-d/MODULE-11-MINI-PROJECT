import React, { useState } from 'react';
import { createProduct } from '../api/productAPI';

const CreateProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const product = { name, price };
        await creatProduct(product);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <button type="submit">Create Product</button>
        </form>
    );
};

export default CreateProductForm;
