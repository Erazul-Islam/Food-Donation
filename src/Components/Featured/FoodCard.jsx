import { Link } from "react-router-dom";
import animationData from "../../../public/View.json"
import Lottie from "lottie-react";

/* eslint-disable react/prop-types */
const FoodCard = ({ food }) => {
    // console.log(food)

    const { _id,image, food_name, donator_name, donator_img, food_quantity, expired_date, additional_note } = food || {}
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-52 w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{food_name}</h2>
                    <p>{donator_name}</p>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={donator_img} />
                        </div>
                    </div>
                    <p>{food_quantity}</p>
                    <p>{expired_date}</p>
                    <p>{additional_note}</p>
                    <div className="card-actions">
                        <Link to={`/detail/${_id}`}>
                            <Lottie className="w-28" loop={true} autoPlay={true} animationData={animationData}></Lottie>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;