import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header" dir="rtl">
      <div className="container header-container">
        <div className="header-container__title">در شاپاَپ</div>
        <p className="header-container__subtitle">
          هم بخرید | هم بفروشید | هم معرفی کنید
        </p>
        <p className="header-container__subtitle">جهت راهنمایی بیشتر ایمیل یا شماره تماس خود را وارد کنید</p>
        <div className="header-container__input">
            <input type="text" placeholder="Phone & Email" dir="ltr"/>
            <button>ارسال</button>
        </div>

      </div>
    </header>
  );
};

export default Header;
