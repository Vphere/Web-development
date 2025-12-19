//File path: src/ProductList.js
import React from 'react';
import ProductItem from '../../product_demo/src/ProductItem.jsx';

const ProductList = ({ products }) => {
    return (
        <div>
            <h2>Products List</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <ProductItem key={product.id}
                            product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;