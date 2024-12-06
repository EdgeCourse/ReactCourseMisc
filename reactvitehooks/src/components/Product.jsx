// src/components/Product.js
import React, { useState } from 'react';

function Product({ product, onBack }) {
  const [productData, setProductData] = useState(product);

  const handleSave = () => {
    fetch(`http://localhost:5000/products/${productData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product updated:', data);
        onBack();
      })
      .catch(error => console.error('Error updating product:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <h2>{productData.name}</h2>
      <form>
        <div>
          <label>Description: </label>
          <input type="text" name="description" value={productData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Price: </label>
          <input type="text" name="price" value={productData.price} onChange={handleChange} />
        </div>
        <div>
          <label>Stock: </label>
          <input type="number" name="stock" value={productData.stock} onChange={handleChange} />
        </div>
      </form>
      <button onClick={handleSave}>Save</button>
      <button onClick={onBack}>Back to list</button>
    </div>
  );
}

export default Product;
