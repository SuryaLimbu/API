import React from "react";

import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";


const HomeLayout = () => {
    return (
        <div>

            <Hero />
            {/* products lists */}
            <div className=" max-w-7xl mx-auto flex flex-col px-4 sm:px-10 md:px-20 lg:px-30 mt-10 space-y-8">
                <div className=" flex space-x-4 justify-end">
                    <h1 className=" font-semibold text-xl text-purple-600"><Link to="">New</Link></h1>
                    <h1 className=" font-semibold text-xl"><Link to="">Recommended</Link></h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

            </div>


        </div>
    )
}

export default HomeLayout;