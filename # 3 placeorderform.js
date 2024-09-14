import React, { useState } from 'react';
import { createOrder } from '../api/orderAPI';

const PlaceOrderForm = () => {
    const [products, setProducts] = useState([]);
    const [customer, setCustomer] = useState(null)
    const [orderDate, setOrderDate] = useState(new Date());

    const handleSubmit = async (event) => {
        event.preventdefault();
        const order = { product, customer, orderDate};
        await createOrder(order);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Products:</label>
            <select multiple value={products} onChange={(event) => setProducts(event.target.value)}>
                {/* product options */}
            </select>
            <br />
            <label>Customer:</label>
            <select value={customer} onChange={(event) => setCustomer(event.target.value)}>
                {/* customer options */}
            </select>
            <br />
            <label>Order Date:</label>
            <input type="date" value={orderDate} onChange={(event) => setOrderDate(event.target.value)} />
            <br />
            <button type="submit">Place Order</button>
        </form>

    );
};

export default PlaceOrderForm;
