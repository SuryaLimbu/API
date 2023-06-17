import { useEffect, useState } from "react";
import fetchData from "../components/API";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";



const Wishlist = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const response = await fetchData(`/carts`);
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
            {/* // <!-- breadcrumb --> */}
            <div class="container py-4 flex items-center gap-3">
                <Link to="../index.html" class="text-primary text-base">
                    <i class="fa-solid fa-house"></i>
                </Link>
                <span class="text-sm text-gray-400">
                    <i class="fa-solid fa-chevron-right"></i>
                </span>
                <p class="text-gray-600 font-medium">Profile</p>
            </div>
            {/* <!-- ./breadcrumb --> */}

            {/* <!-- wrapper --> */}
            <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">

                {/* <!-- sidebar --> */}
                <Sidebar />
                {/* <!-- ./sidebar --> */}

                {/* <!-- wishlist --> */}
                <div class="col-span-9 space-y-4">
                    {data.map((wishlist) => (

                        <div class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                            <div class="w-28">
                                <img src={wishlist.image} alt="product 6" class="w-full" />
                            </div>
                            <div class="w-1/3">
                                <h2 class="text-gray-800 text-xl font-medium uppercase">{wishlist.title}</h2>
                                <p class="text-gray-500 text-sm">Availability: <span class="text-green-600">In Stock</span></p>
                            </div>
                            <div class="text-primary text-lg font-semibold">${wishlist.price}.00</div>
                            <Link to="#"
                                class="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">add
                                to cart</Link>

                            <div class="text-gray-600 cursor-pointer hover:text-primary">
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    ))}


                </div>
                {/* <!-- ./wishlist --> */}

            </div>
            {/* <!-- ./wrapper --> */}
        </>
    );
}
export default Wishlist;