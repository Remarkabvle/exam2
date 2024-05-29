import "./single.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/index";

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("60g");

    useEffect(() => {
        axiosInstance
            .get(`/products/${productId}`)
            .then((response) => {
                setProduct(response.data);
                setFetchError(null);
            })
            .catch((error) => {
                setFetchError(error.response?.data || "An error occurred");
            })
            .finally(() => setIsLoading(false));
    }, [productId]);

    const handleAddToCart = () => {
        console.log(`Added ${quantity} of product ID: ${productId} with size ${selectedSize} to the cart`);
    };

    if (isLoading) return <p>Loading...</p>;
    if (fetchError) return <p>Error: {fetchError}</p>;

    return product ? (
        <div className="product-detail-container">
            <div className="product-image-section">
                <img className="product-image" src={product.thumbnail} alt={product.description} />
            </div>
            <div className="product-info-section">
                <div className="product-header">
                    <span className="product-sale-badge">Sale Off</span>
                    <h2 className="product-title">{product.description}</h2>
                </div>
                <div className="product-rating">
                    <span className="product-star">★</span>
                    <span className="product-reviews">(32 reviews)</span>
                </div>
                <div className="product-pricing">
                    <span className="product-price">${product.price}</span>
                    {product.originalPrice && (
                        <span className="product-original-price">${product.originalPrice}</span>
                    )}
                </div>
                <p className="product-description-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
                </p>
                <div className="product-size-selection">
                    <label className="product-size-label">Size / Weight:</label>
                    {["50g", "60g", "80g", "100g", "150g"].map(size => (
                        <button
                            key={size}
                            className={`product-size-button ${selectedSize === size ? 'selected' : ''}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
                <div className="product-controls">
                    <label className="quantity-label" htmlFor="quantity">Qty:</label>
                    <input
                        className="quantity-input"
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="1"
                    />
                    <button onClick={handleAddToCart} className="add-to-cart-button">Add to cart</button>
                    <button className="wishlist-button">♥</button>
                </div>
                <div className="product-meta">
                    <p>Type: {product.type}</p>
                    <p>MFG: Jun 4, 2022</p>
                    <p>Tags: {product.tags.join(', ')}</p>
                    <p>SKU: {product.sku}</p>
                    <p>LIFE: 70 days</p>
                    <p>Stock: {product.stock} items in stock</p>
                </div>
            </div>
        </div>
    ) : null;
};

export default ProductDetail;
