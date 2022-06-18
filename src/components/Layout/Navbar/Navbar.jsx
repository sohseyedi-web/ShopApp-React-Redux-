import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FaShopware } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.shop);
  const numberCart = cartItems.length;

  return (
    <nav className="navbars" dir="rtl">
      <div className="container navbars-container">
        <div className="navbars-container__right">
          <div className="navbars-container__right-logo">
            <span>
              <FaShopware />
            </span>
            شاپاَپ
          </div>
          <div className="navbars-container__right-links">
            <Link to={"/"}>خانه</Link>
            <Link to={"/"}>محصولات</Link>
            <Link to={"/"}>راهنما</Link>
          </div>
        </div>
        <div className="navbars-container__left">
          <Link to={"/cart"} className="navbars-container__left-icon">
            <HiShoppingCart size={28} />
            <div className="navbars-container__left-icon__num">
              {numberCart}
            </div>
          </Link>
          <Link to={"/auth"} className="navbars-container__left-btn">
            <button>ورود / ثبت نام</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
