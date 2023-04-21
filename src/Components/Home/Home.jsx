import React from 'react';
import Header from '../Header/Header';
import Category from '../Category/Category';
import Product from '../Product/Products';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Category></Category>
           <Product></Product>
        </div>
    );
};

export default Home;