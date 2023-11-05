import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const FoodLayout = ({ food }) => {

    const { _id, image, food_name, donator_name, donator_img, food_quantity, expired_date, additional_note, picup_Location } = food || {}

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-48 w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{food_name}</h2>
                    <p>{donator_img}</p>
                    <p>{food_quantity}</p>
                    <p>{expired_date}</p>
                    <p>{_id}</p>
                    <p>{additional_note}</p>
                    <p>{donator_name}</p>
                    <p>{picup_Location}</p>
                    <div className="card-actions">
                        <Link to={`/avail/${_id}`}>
                            <button className="btn btn-primary"> View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FoodLayout;