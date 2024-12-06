import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from './App';
import ProductList from './components/ProductList';
import Product from './components/Product';
import ProductForm from './components/ProductForm';

jest.mock('./components/ProductList', () => ({
  default: () => <div>Mock Product List</div>,
}));

jest.mock('./components/Product', () => ({
  default: () => <div>Mock Product</div>,
}));

jest.mock('./components/ProductForm', () => ({
  default: ({ onAddProduct, onCancel }) => (
    <div>
      <input data-testid="product-name" />
      <button data-testid="add-button" onClick={onAddProduct}>
        Add
      </button>
      <button data-testid="cancel-button" onClick={onCancel}>
        Cancel
      </button>
    </div>
  ),
}));

describe('App', () => {
  it('renders ProductList initially', () => {
    render(<App />);
    const productList = screen.getByText('Mock Product List');
    expect(productList).toBeInTheDocument();
  });

  it('renders Product when a product is selected', () => {
    render(<App />);
    const product = screen.getByText('Mock Product');
    expect(product).not.toBeInTheDocument();

    // Simulate selecting a product
    // (You'll need to implement a test for the ProductList component to trigger this)

    expect(product).toBeInTheDocument();
  });

  it('renders ProductForm when "Add Product" is clicked', () => {
    render(<App />);
    const addButton = screen.getByText('Add Product');
    userEvent.click(addButton);

    const productForm = screen.getByTestId('product-name');
    expect(productForm).toBeInTheDocument();
  });

  it('can add a product', async () => {
    render(<App />);
    const addButton = screen.getByText('Add Product');
    userEvent.click(addButton);

    const productNameInput = screen.getByTestId('product-name');
    userEvent.type(productNameInput, 'New Product');

    const addProductButton = screen.getByTestId('add-button');
    userEvent.click(addProductButton);

    // Assert that the product is added (e.g., by checking the console log or updating a state)
  });

  it('can cancel adding a product', () => {
    render(<App />);
    const addButton = screen.getByText('Add Product');
    userEvent.click(addButton);

    const cancelButton = screen.getByTestId('cancel-button');
    userEvent.click(cancelButton);

    const productList = screen.getByText('Mock Product List');
    expect(productList).toBeInTheDocument();
  });
});