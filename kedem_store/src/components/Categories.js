import React, { useEffect, useState } from "react";
import fetchData from "./API";
// import APIInit from "./APIInit";

const Categories = () => {
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
        <div className="container py-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
            <div className="grid grid-cols-4 gap-3">
                {data.map((category) => (
                    <div className="relative rounded-sm overflow-hidden group">
                        <img src="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="category 1" className="w-full" />
                        <a href="#"
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">{category}</a>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default Categories;