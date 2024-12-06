// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Product from './components/Product';
import ProductForm from './components/ProductForm';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
    setIsAdding(false);
  };

  const handleAddProduct = (product) => {
    setIsAdding(false);
    // Ideally, update the product list here after adding
    // For now, we just log the added product
    console.log('Added product:', product);
  };

  const handleStartAdding = () => {
    setIsAdding(true);
  };

  return (
    <div className="App">
      {isAdding ? (
        <ProductForm onAddProduct={handleAddProduct} onCancel={handleBack} />
      ) : selectedProduct ? (
        <Product product={selectedProduct} onBack={handleBack} />
      ) : (
        <>
          <ProductList onSelectProduct={handleSelectProduct} />
          <button onClick={handleStartAdding}>Add Product</button>
        </>
      )}
    </div>
  );
}

export default App;
