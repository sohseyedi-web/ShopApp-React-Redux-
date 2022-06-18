import React from 'react'
import Container from './../../container/Container';
import Header from './Header/Header';
import Products from './Products/Products';
import Slider from './Slider/Slider';

const Layout = () => {
  return (
    <Container>
        <Header/>
        <Products/>
        <Slider/>
    </Container>
  )
}

export default Layout