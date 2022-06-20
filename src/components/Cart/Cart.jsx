import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import Container from "./../../container/Container";
import EmptyCom from "./../Common/Empty/Empty";
import { FiTrash, FiPlus, FiMinus } from "react-icons/fi";
import {
  addItem,
  deleteItem,
  removeItem,
} from "../../redux/reducers/shopping-reducer";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const hasItem = cartItems.length > 0;

  const handleDeleteItem = (product) => {
    dispatch(deleteItem(product));
  };

  return (
    <Container>
      <section className="cart" dir="rtl">
        <div className="container">
          {hasItem ? (
            <div className="cart-box">
              <div className="cart-box__right">
                {cartItems.map((cart) => (
                  <div className="cart-box__right-box" key={cart._id}>
                    <div className="cart-box__right-box__details">
                      <img src={cart.img} alt={cart.title} />
                      <div className="cart-box__right-box__details-product">
                        <div className="cart-box__right-box__details-product__title">
                          {cart.title}
                        </div>
                        <div className="cart-box__right-box__details-product__price">
                          {cart.price}
                        </div>
                      </div>
                    </div>
                    <div className="cart-box__right-box__actions">
                      <button
                        className="cart-box__right-box__actions-btn"
                        onClick={() => dispatch(addItem(cart))}
                      >
                        <FiPlus size={24} />
                      </button>
                      <span className="cart-box__right-box__actions-quantity">
                        {cart.quantity}
                      </span>
                      <button
                        className="cart-box__right-box__actions-btn"
                        onClick={() => dispatch(removeItem(cart))}
                      >
                        <FiMinus size={24} />
                      </button>
                      <button
                        className="cart-box__right-box__actions-trash"
                        onClick={() => handleDeleteItem(cart)}
                      >
                        <FiTrash size={24} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-box__left">
                <div className="cart-box__left-total">
                  <span>جمع خرید</span>
                  <span>{cartItems.length} تومان</span>
                </div>
                <div className="cart-box__left-count">
                  <span>تعداد محصولات</span>
                  <span>{cartItems.length} عدد</span>
                </div>
                <div className="cart-box__left-off">
                  <span>تخفیفات</span>
                  <span>{cartItems.length} تومان</span>
                </div>
                <div className="cart-box__left-finall">
                  <span>مبلغ نهایی</span>
                  <span>{cartItems.length} تومان</span>
                </div>
                <button className="cart-box__left-btn">ثبت سفارش</button>
              </div>
            </div>
          ) : (
            <EmptyCom title={"سبد خرید شما خالی است"} />
          )}
        </div>
      </section>
    </Container>
  );
};

export default Cart;
