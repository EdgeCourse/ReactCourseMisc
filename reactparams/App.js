import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useSearchParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', category: 'Electronics' },
  { id: 2, name: 'Product 2', category: 'Clothing' },
  { id: 3, name: 'Product 3', category: 'Electronics' },
];

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const filteredProducts = products.filter((product) =>
    categoryFilter ? product.category === categoryFilter : true
  );

  const handleCategoryFilter = (category) => {
    setSearchParams({ category });
  };

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <button onClick={() => handleCategoryFilter('Electronics')}>Electronics</button>
        <button onClick={() => handleCategoryFilter('Clothing')}>Clothing</button>
        <button onClick={() => setSearchParams({})}>All</button>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductDetails() {
  const { productId } = useParams();

  const product = products.find((product) => product.id === parseInt(productId));

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product?.name}</h2>
      <p>{product?.description}</p>
      {/* Add more product details as needed */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;