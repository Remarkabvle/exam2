import "./Products.scss";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/index";
import { NavLink } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((response) => {
        setProducts(response.data.products || []);
        setFetchError(null);
      })
      .catch((error) => {
        setFetchError(error.response?.data || "An error occurred");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const uniqueCategories = ["All", ...new Set(products.map((item) => item.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  const renderCategories = () => {
    return uniqueCategories.map((category, index) => (
      <li
        key={index}
        className={`category-item ${selectedCategory === category ? "active" : ""}`}
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </li>
    ));
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }

    if (halfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return stars;
  };

  const renderProductCards = () => {
    return filteredProducts.map((item) => (
      <div className="item-card" key={item.id}>
        <NavLink to={`/product/${item.id}`}>
          <img src={item.thumbnail} alt={item.description} />
        </NavLink>
        <div className="item-card-info">
          <p className="category">{item.category}</p>
          <h3 className="description" title={item.description}>
            {item.description}
          </h3>
          <div className="rating">{renderStars(item.rating)}</div>
          <p className="brand">
            by <span>{item.brand ? item.brand : "Unknown Brand"}</span>
          </p>
          <div className="item-card-footer">
            <h3 className="price">
              ${item.price}
              {item.originalPrice && (
                <span className="original-price">${item.originalPrice}</span>
              )}
            </h3>
            <button className="add-to-cart">Add</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="product-list container">
      <div className="product-list-header">
        <h2>Featured Products</h2>
        <ul className="category-list">{renderCategories()}</ul>
      </div>
      <div className="product-card-container">
        {isLoading ? <p>Loading...</p> : renderProductCards()}
        {fetchError && <p>Error: {fetchError}</p>}
      </div>
    </section>
  );
};

export default ProductList;
