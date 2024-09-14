import React from 'react';
const ProductConfirmation = ({ productId, action}) => {
    const handleConfirm = async () => {
    // Call API to confirm action (create, update, delete)
    };

    return (
        <div>
            <p>Confirm {action} product {productId}?</p>
            <button onClick={handleConfirm}>Confirm</button>
        </div>
    );
};

export default ProductConfirmation;
