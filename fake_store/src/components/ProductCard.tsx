import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const ProductCard = () => {
    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="h-80">
                    <div className="bg-gray-100 hover:bg-purple-600 rounded-full w-8 h-8 absolute flex items-center justify-center m-4 ">
                    <FiHeart className=" w-5 h-5 hover:text-white cursor-pointer"/>
                    </div>
                   
                    <img src="https://images.pexels.com/photos/6310924/pexels-photo-6310924.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="w-full h-full object-cover object-center rounded-lg" />
                </div>
                <div className="flex items-center justify-between ">
                    <div>
                        <Link to="">
                            <h1 className=" font-bold"><Link to={`/productDetails`}>Title</Link></h1>
                        </Link>
                        <Link to="">
                            <h2>Category</h2>
                        </Link>
                    </div>
                    <div>
                        <button className="btn rounded-lg">$20.00</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ProductCard;