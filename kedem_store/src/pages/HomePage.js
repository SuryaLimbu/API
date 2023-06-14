import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/Features';
import Categories from '../components/Categories';
import Ads from '../components/Ads';
import Products from '../components/Products';
import NewArrival from '../components/NewArrival';

const HomePage = () => {
    return (
        <>
            <Banner />
            <Features />
            <Categories />
            <NewArrival />
            <Ads />
            <Products />
        </>
    );
}
export default HomePage;