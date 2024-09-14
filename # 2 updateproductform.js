import React, {useState } from 'react';
import { updateproduct } from '../api/productAPI';

const UpdateProductForm = ({ productId }) => {
    const [name, setName] = useState('');
    cosnt [price, setPrice] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const product = { name, price };
        await updateProduct(productId, product);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <label>Price:</label>
            <input type="number" value={price} onChange={(event) =>Price(event.target.value)} />
            <br />
            <button type="submit">Update Product</button>
        </form>
    );
};

export default UpdateProductForm;

