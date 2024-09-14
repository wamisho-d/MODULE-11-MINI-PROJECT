import React from 'react';
import { deleteProduct } from '../api/productAPI';

const deleteProduct = async (productId) => {
    await deleteProduct(productId); 
};

export default deleteProduct;
