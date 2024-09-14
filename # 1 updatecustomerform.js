import React, { useState } from 'react';
import { updateCustomer } from '../api/customerAPI';

const UpdateCustomerForm = ({ customerId }) => {
    const [name, setName] = useState('');
    cosnt [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        const customer = { name, email, phone };
        await updateCustomer(customerId, customer);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <label>Email:</label>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <br />
            <label>Phone:</label>
            <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
            <br />
            <button type="submit">Update Customer</button>
        </form>
    );
};

export default UpdateCustomerForm;
