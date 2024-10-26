import { useState, useEffect } from 'react';
import { Product } from '../types';

interface EditProductModalProps {
  product: Product;
  onClose: () => void;
  onEditProduct: (product: Product) => void;
}

const EditProductModal = ({ product, onClose, onEditProduct }: EditProductModalProps) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onEditProduct(updatedProduct);
  };

  return (
    <div className="modal show d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Product</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              name="name"
              value={updatedProduct.name}
              className="form-control mb-2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              value={updatedProduct.description}
              className="form-control mb-2"
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              value={updatedProduct.price}
              className="form-control mb-2"
              onChange={handleChange}
            />
            <input
              type="number"
              name="quantity"
              value={updatedProduct.quantity}
              className="form-control mb-2"
              onChange={handleChange}
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-warning" onClick={handleSubmit}>
              Edit Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
