// write product card here

import React from 'react';
import PropTypes from 'prop-types';
import ViewProductButton from '../components/button';

const ProductCard = ({ product }) => {
    const handleViewProduct = () => {
        alert(`Viewing product: ${product.name}`);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <ViewProductButton onClick={handleViewProduct} />
      </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCard;
