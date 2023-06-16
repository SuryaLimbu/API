import React, { useEffect, useState } from "react";
import fetchData from "./API";
// import Categories from "./Categories";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const response = await fetchData('/products/categories');
                setData(response);
                console.log(response);

            } catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false);

            }

        };
        fetchDataFromAPI();
    }, []);
    if (isLoading) {
        return <p>Loading...</p>; // or display a loading spinner
    }

    return (
        <>
            <nav className="bg-gray-800">
                <div className="container flex">


                    <div class="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                        <span class="text-white">
                            <i class="fa-solid fa-bars"></i>
                        </span>
                        <span class="capitalize ml-2 text-white">All Categories</span>

                        {/* <!-- dropdown --> */}
                        <div
                            class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                            {data.map((Categories) => (
                                <Link href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                    <img src="assets/images/icons/sofa.svg" alt="sofa" className="w-5 h-5 object-contain" />
                                    <span className="ml-6 text-gray-600 text-sm">{Categories}</span>
                                </Link>
                            ))}

                        </div>
                    </div>

                    <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                        <div className="flex items-center space-x-6 capitalize">
                            <Link to={`/`} className="text-gray-200 hover:text-white transition">Home</Link >
                            <Link to={`/shop`} className="text-gray-200 hover:text-white transition">Shop</Link>
                            <Link href="#" className="text-gray-200 hover:text-white transition">About us</Link>
                            <Link href="#" className="text-gray-200 hover:text-white transition">Contact us</Link>
                        </div>
                        <Link to={`/login`} className="text-gray-200 hover:text-white transition">Login</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;