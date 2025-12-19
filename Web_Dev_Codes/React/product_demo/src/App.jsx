//File path: src/App.js
import React from 'react';
import ProductList from './ProductList.jsx';

const App = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];

    return (
        <div style={{ margin: '5px' }}>
            <h2 style={{ color: 'green' }}>
                GeeksForGeeks | Reusable Components Example
            </h2>
            <ProductList products={products} />
        </div>
    );
};

export default App;