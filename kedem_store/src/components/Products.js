import React, { useEffect, useState } from "react";
import fetchData from "./API";
import Items from "./Items";
// import APIInit from "./APIInit";

const Products = () => {
    
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const response = await fetchData('/products?limit=6');
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
        <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
            <div className="grid grid-cols-5 md:grid-cols-5 gap-6">

                {data.map((product) => (
                    <Items product={product} />
                ))}

            </div>
        </div>
    );
}
export default Products;