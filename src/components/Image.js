import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  //const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();

  const { toggleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);

  // destuction toggleFavorite from the object in context

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }
  // if the item already in the cart
  // return <i className="ri-shopping-cart-fill cart"></i>
  //else if the image is beaing hovereds
  //return ri-add-circle-line cart"></i>
  //

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} className="image-grid" alt="" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
