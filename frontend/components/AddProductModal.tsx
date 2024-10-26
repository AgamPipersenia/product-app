import { useState } from 'react';
import { Product } from '../types';

interface AddProductModalProps {
  onClose: () => void;
  onAddProduct: (product: Product) => void;
}

const AddProductModal = ({ onClose, onAddProduct }: AddProductModalProps) => {
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 0,
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: string[] = [];
    if (!product.name) newErrors.push('Name is required.');
    if (!product.description) newErrors.push('Description is required.');
    if (product.price <= 0) newErrors.push('Price must be greater than 0.');
    if (product.quantity < 0) newErrors.push('Quantity cannot be negative.');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onAddProduct(product);
      onClose(); // Close modal after adding
    }
  };

  return (
    <div className="modal fade show d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Product</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control mb-2"
                onChange={handleChange}
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="form-control mb-2"
                onChange={handleChange}
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="form-control mb-2"
                onChange={handleChange}
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="form-control mb-2"
                onChange={handleChange}
              />
              {errors.length > 0 && (
                <div className="alert alert-danger mt-2">
                  <ul>
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
