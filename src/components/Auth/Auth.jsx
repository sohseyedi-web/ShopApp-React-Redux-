import React from "react";
import Container from "./../../container/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Auth.scss";
import Helmet from 'react-helmet'
// import { useNavigate } from "react-router-dom";
import { FaShopware } from "react-icons/fa";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("مقداری وارد نشده است")
    .email("آدرس ایمیل صحیح نیست"),
  password: Yup.string()
    .required("مقداری وارد نشده است")
    .min(8, "رمز عبور کوتاه است"),
});

const Auth = () => {
  // const history = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
    validationSchema,
    enableReinitialize: true,
  });

  return (
    <Container>
      <Helmet>
        <title>ShopApp / Login</title>
      </Helmet>
      <section className="form">
        <form className="form-wrap" onSubmit={formik.handleSubmit}>
          <h3 className="form-wrap__title">
            شاپاَپ
            <span>
              <FaShopware />
            </span>
          </h3>
          <div className="form-wrap__box">
            <input
              type="text"
              className="form-wrap__box-input"
              {...formik.getFieldProps("email")}
              placeholder=" "
              name="email"
            />
            <label htmlFor="email" className="form-wrap__box-label">
              Email
            </label>
            {formik.errors.email && formik.touched.email && (
              <div className="form-wrap__box-error">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-wrap__box">
            <input
              type="text"
              className="form-wrap__box-input"
              {...formik.getFieldProps("password")}
              placeholder=" "
              name="password"
            />
            <label htmlFor="password" className="form-wrap__box-label">
              Password
            </label>
            {formik.errors.password && formik.touched.password && (
              <div className="form-wrap__box-error">
                {formik.errors.password}
              </div>
            )}
          </div>
          <input
            type="submit"
            className="form-wrap__button"
            value="ورود به سایت"
            disabled={!formik.isValid}
          />
        </form>
      </section>
    </Container>
  );
};

export default Auth;
