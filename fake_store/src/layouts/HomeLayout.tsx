import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";



const HomeLayout = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    // console.log(data);

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

                    {data.map(product => (
                        <ProductCard product={product} />
                    ))}


                </div>

            </div>


        </div>
    )
}

export default HomeLayout;