import React from "react";
import offerImage from '../assets/images/offer.jpg';
const Ads = () => {
    return (
        <div className="container pb-16">
            <a href="#">
                <img src={offerImage} alt="ads" className="w-full" />
            </a>
        </div>
    );
}
export default Ads;