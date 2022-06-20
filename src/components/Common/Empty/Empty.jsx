import { Link } from "react-router-dom";
import imgEmpty from "../../../assets/emp.png";
import "./Empty.scss";
const EmptyCom = ({ title }) => {
  return (
    <section className="empty">
      <img src={imgEmpty} alt="Empty-list" />
      <h4>{title}</h4>
      <p>برای مشاهده محصولات به صفحه زیر بروید:</p>
      <Link to={"/"}>
        <button>صفحه اصلی</button>
      </Link>
    </section>
  );
};

export default EmptyCom;
