import React, { useState, useEffect } from 'react';
import { getCustomer } from '../api/customerAPI';

const CustomerDetails = ({ customerId }) => {
    cosnt [customer, setCustomer] = useState(null);

    useeffect(() => {
        const fetchCustomer = async () => {
            const customer = await getCustomer(customerId);
            setCustomer(customer);
        };
        fetchCustomer();
    }, [customerId]);

    return (
        <div>
            <h2>Customer Details</h2>
            <p>Name: {customer?.name}</p>
            <p>Email: {customer?.email}</p>
            <p>Phone: {customer?. phone}</p>
            <button onClick={() => deleteCustomer(customerId)}>Delete Customer</button>
        </div>

    );
};

export default CustomerDetails;
