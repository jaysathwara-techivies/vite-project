import React from "react";
import { useLocation,useNavigate  } from "react-router-dom";
import "./ProductCompare.css"
function ProductCompare() {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedProducts } = location.state || { selectedProducts: [] };


    const removeProduct = (id) => {
        const updatedProducts = selectedProducts.filter(product => product.id !== id);
        navigate("/product-compare", { state: { selectedProducts: updatedProducts } });
    };

    if (selectedProducts.length === 0) {
        return <div>No products selected for comparison.</div>;
    }
    return (
        <div className="compare-container">
            {selectedProducts.map(product => (
                <div key={product.id} className="compare-card">
                    <img src={product.thumbnail} alt={product.brand} />
                    <h3>{product.brand}</h3>
                    <p>Category: {product.category}</p>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Description: {product.description}</p>
                    <button onClick={() => removeProduct(product.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default ProductCompare;
