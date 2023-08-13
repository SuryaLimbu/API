import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const ProductCard = ({ product }) => {
    // console.log(product);
    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="h-80">
                    <div className="bg-gray-100 hover:bg-purple-600 rounded-full w-8 h-8 absolute flex items-center justify-center m-4 ">
                        <FiHeart className=" w-5 h-5 hover:text-white cursor-pointer" />
                    </div>

                    <img src={product.image} alt="" className="w-full h-full object-cover object-center rounded-lg" />
                </div>
                <div className="flex items-center justify-between ">
                    <div>
                        <Link to="">
                            <h1 className=" font-bold"><Link to={`/productDetails/${product.id}`}>{product.title.substring(0, 40)}</Link></h1>
                        </Link>
                        <Link to="">
                            <h2>{product.category}</h2>
                        </Link>
                    </div>
                    <div>
                        <button className="btn rounded-lg">${product.price}</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ProductCard;