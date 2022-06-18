import React from "react";
import { Link } from "react-router-dom";
import productsData from "./../../../data/Data";
import styled from 'styled-components'
import './Products.scss'

const Products = () => {
  const products = productsData;

  const Error = styled.div`
    color: #1c3e58;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
  `;

  return (
    <section className="products" dir="rtl">
      <div className="container products-container">
        {products.map((product) => (
          <div className="products-container__box" key={product._id}>
            <img
              src={product.img}
              alt={product.title}
              className="products-container__box-img"
            />
            <Link to="/" className="products-container__box-title">
              {product.title}
            </Link>
            <div className="products-container__box-produce">
              فروشنده : {product.producer}
            </div>
            <div className="products-container__box-actions">
              <button className="products-container__box-actions__btn">
                بره تو سبد
              </button>
              <div className="products-container__box-actions__price">
                {product.price} تومان
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
