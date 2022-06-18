import { useEffect, useState } from "react";
import "./Slider.scss";
import User from "../../../assets/user.svg";

const dataSlider = [
  {
    id: "1",
    title: "آزموده - خیاط",
    desc: `
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد
    `,
    Img: User,
  },
  {
    id: "2",
    title: "سامان - موبایل فروشی",
    desc: `
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد
    `,
    Img: User,
  },
  {
    id: "3",
    title: "ابراهیمی - فروشنده لوازم آرایشی",
    desc: `
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد
    `,
    Img: User,
  },
  {
    id: "4",
    title: "صفایی - فروشنده لباس",
    desc: `
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد
    `,
    Img: User,
  },
];

const Slider = () => {
  const [active, setActive] = useState(1);
  const moveDot = (index) => setActive(index);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(active === dataSlider.length ? 1 : active + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="slide" dir="rtl">
      <div className="container slide-container">
        {dataSlider.map((data, index) => (
          <div
            key={data.id}
            className={
              active === index + 1
                ? "slide-container__box active-box"
                : "slide-container__box"
            }
          >
            <div className="slide-container__box-user">
              <img
                src={data.Img}
                className="slide-container__box-user__img"
                alt={data.title}
              />
              <div className="slide-container__box-user__name">
                {data.title}
              </div>
            </div>
            <div className="slide-container__box-desc">
              <p>{data.desc}</p>
            </div>
          </div>
        ))}

        <div className="slide-container__dots">
          {Array.from({ length: 4 }).map((item, index) => (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={
                active === index + 1
                  ? "slide-container__dots-icon active-icon"
                  : "slide-container__dots-icon"
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
