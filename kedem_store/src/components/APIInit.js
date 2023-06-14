import React, { useEffect, useState } from "react";
import fetchData from "./API";
const APIInit = (endpoint) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const response = await fetchData({ endpoint });
                setData(response);
                console.log(response);

            } catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false);
                return (data);
            }
            
        };
        fetchDataFromAPI();
    }, []);
    if (isLoading) {
        return <p>Loading...</p>; // or display a loading spinner
    }
}
export default APIInit;