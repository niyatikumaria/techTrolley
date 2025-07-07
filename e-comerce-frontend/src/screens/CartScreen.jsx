import "./CartScreen.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CartItem from "../components/CartItem";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import useLogin from "../utils/hooks/useLogin";

const CartScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { loginInfo } = useLogin();
  const { cartItems } = cart;

  // State for checkout flow
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: ""
  });
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart({ pId: item.product, _id: item._id }));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleProceedToCheckout = () => {
    setIsCheckingOut(true);
  };

  const handlePlaceOrder = () => {
    // Frontend-only implementation
    const orderData = {
      items: cartItems,
      total: getCartSubTotal(),
      shippingAddress: address,
      paymentMethod,
      status: "Order Placed (COD)"
    };
    
    console.log("Order placed (frontend only):", orderData);
    alert(`Order placed successfully!\nTotal: $${orderData.total}\nPayment: ${orderData.paymentMethod}`);
    
    // Reset the form
    setIsCheckingOut(false);
    history.push("/");
  };

  if (loginInfo.loading) return <h1>Loading.....</h1>;
  
  if (!loginInfo.loading && loginInfo.isLogin) {
    return (
      <div className="cartscreen">
        {!isCheckingOut ? (
          <>
            <div className="cartscreen__left">
              <h2>Shopping Cart</h2>

              {cartItems.length === 0 ? (
                <div>
                  Your Cart Is Empty <Link to="/">Go Back</Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <CartItem
                    key={item.product}
                    item={item}
                    qtyChangeHandler={qtyChangeHandler}
                    removeHandler={() => removeFromCartHandler(item)}
                  />
                ))
              )}
            </div>

            <div className="cartscreen__right">
              <div className="cartscreen__info">
                <p>Subtotal ({getCartCount()}) items</p>
                <p>${getCartSubTotal()}</p>
              </div>
              <div>
                <button onClick={handleProceedToCheckout}>
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="checkout__container">
            <h2>Checkout</h2>
            
            <div className="checkout__section">
              <h3>Shipping Address</h3>
              <form className="address__form">
                <div className="form__group">
                  <label>Street Address*</label>
                  <input
                    type="text"
                    name="street"
                    value={address.street}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
                
                <div className="form__group">
                  <label>City*</label>
                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
                
                <div className="form__group">
                  <label>State/Province*</label>
                  <input
                    type="text"
                    name="state"
                    value={address.state}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
                
                <div className="form__group">
                  <label>Postal Code*</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={address.postalCode}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
                
                <div className="form__group">
                  <label>Country*</label>
                  <input
                    type="text"
                    name="country"
                    value={address.country}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
              </form>
            </div>
            
            <div className="checkout__section">
              <h3>Payment Method</h3>
              <div className="payment__method">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                  />
                  Cash on Delivery (COD)
                </label>
              </div>
            </div>
            
            <div className="checkout__summary">
              <h3>Order Summary</h3>
              <div className="summary__item">
                <span>Items ({getCartCount()}):</span>
                <span>${getCartSubTotal()}</span>
              </div>
              <div className="summary__item">
                <span>Shipping:</span>
                <span>$0.00</span>
              </div>
              <div className="summary__item total">
                <span>Total:</span>
                <span>${getCartSubTotal()}</span>
              </div>
              
              <button 
                className="place__order__btn"
                onClick={handlePlaceOrder}
                disabled={
                  !address.street || 
                  !address.city || 
                  !address.state || 
                  !address.postalCode || 
                  !address.country
                }
              >
                Place Order (COD)
              </button>
              
              <button 
                className="back__to__cart"
                onClick={() => setIsCheckingOut(false)}
              >
                Back to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default CartScreen;