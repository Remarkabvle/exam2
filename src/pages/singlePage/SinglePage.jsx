import "./single.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/index";
import Loading from "../../components/Loading/Loading";
import AboutGet from "../../components/abuotget/AboutGet"


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
    console.log(
      `Added ${quantity} of product ID: ${productId} with size ${selectedSize} to the cart`
    );
  };

  if (isLoading) return <Loading />;
  if (fetchError) return <p>Error: {fetchError}</p>;

  return product ? (
    <section>
      <div className="product-detail-container">
        <div className="product-image-section">
          <img
            className="product-image"
            src={product.thumbnail}
            alt={product.description}
          />
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
              <span className="product-original-price">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <p className="product-description-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus
            dolore impedit fuga eum eligendi.
          </p>
          <div className="product-size-selection">
            <label className="product-size-label">Size / Weight:</label>
            {["50g", "60g", "80g", "100g", "150g"].map((size) => (
              <button
                key={size}
                className={`product-size-button ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="product-controls">
            <input
              className="quantity-input"
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />
            <button onClick={handleAddToCart} className="add-to-cart-button">
              Add to cart
            </button>
            <button className="wishlist-button">♥</button>
          </div>
          <div className="product-meta">
            <p>
              Type: <span>{product.type}</span>
            </p>
            <p>
              MFG: <span>Jun 4, 2022</span>
            </p>
            <p>
              Tags: <span>{product.tags.join(", ")}</span>
            </p>
            <p>
              SKU: <span>{product.sku}</span>
            </p>
            <p>
              LIFE: <span>70 days</span>
            </p>
            <p>
              Stock: <span>{product.stock} items in stock</span>
            </p>
          </div>
        </div>
      </div>
      <div className="product-details container">
        <div className="tabs">
          <button className="tab-button active">Description</button>
          <button className="tab-button">Additional info</button>
          <button className="tab-button">Vendor</button>
          <button className="tab-button">Reviews (3)</button>
        </div>
        <div className="content-section">
          <p>
            Uninhibited carnally hired played in whimpered dear gorilla koala
            depending and much yikes off far quetzal goodness and from for
            grimaced goodness unaccountably and meadowlark near unblushingly
            crucial scallop tightly neurotic hungrily some and dear furiously
            this apart. Spluttered narrowly yikes left moth in yikes bowed this
            that grizzly much hello on spoon-fed that alas rethought much
            decently richly and wow against the frequent fluidly at formidable
            acceptably flapped besides and much circa far over the bucolically
            hey precarious goldfinch mastodon goodness gnashed a jellyfish and
            one however because.
          </p>
          <ul>
            <li>Type Of Packing: Bottle</li>
            <li>Color: Green, Pink, Powder Blue, Purple</li>
            <li>Quantity Per Case: 100ml</li>
            <li>Ethyl Alcohol: 70%</li>
            <li>Piece In One: Carton</li>
          </ul>
          <p>
            Laconic overheard dear woodchuck wow this outrageously taut beaver
            hey hello far meadowlark imitatively egregiously hugged that yikes
            minimally unanimous pouted flirtatiously as beaver beheld above
            forward energetic across this jeepers beneficently cockily less a
            the raucously that magic upheld far so the this where crud then
            below after jeez enchanting drunkenly more much wow callously
            irrespective limpet.
          </p>

          <h3>Packaging & Delivery</h3>
          <p>
            Less lion goodness that euphemistically robin expeditiously bluebird
            smugly scratched far while thus cackled sheepishly rigid after due
            one assenting regarding censorious while occasional or this more
            crane went more as this less much amid overhung anathematic because
            much held one exuberantly sheep goodness so where rat wry well
            concomitantly.
          </p>
          <p>
            Scallop or far crud plain remarkably far by thus iguana lewd
            precociously and and less rattlesnake contrary caustic wow this near
            alas and next and pled the yikes articulate about as less cackled
            dalmatian in much less well jeering for the thanks blindly
            sentimental whimpered less across objectively fanciful grimaced
            wildly some wow and rose jeepers outgrew lugubrious luridly
            irrationally attractively dachshund.
          </p>

          <h3>Suggested Use</h3>
          <p>Refrigeration not necessary.</p>
          <p>Stir before serving</p>

          <h3>Other Ingredients</h3>
          <p>
            Organic raw pecans, organic raw cashews. <br />
            This butter was produced using a LTG (Low Temperature Grinding)
            process <br />
            Made in machinery that processes tree nuts but does not process
            peanuts, gluten, dairy or soy
          </p>

          <h3>Warnings</h3>
          <p>Oil separation occurs naturally. May contain pieces of shell.</p>
        </div>
      </div>
      <AboutGet />
    </section>
  ) : null;
};

export default ProductDetail;
