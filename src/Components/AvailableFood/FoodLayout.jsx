import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const FoodLayout = ({ food }) => {

    const { _id, image, food_name, donator_name, donator_img, food_quantity, expired_date, picup_Location } = food || {}
    // console.log(food)

    return (
        <div>
            <div className="card mt-14 mb-28 w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-48 w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{food_name}</h2>
                    <img src={donator_img} className="rounded-3xl w-16" alt="" />
                    <p>{food_quantity}</p>
                    <p className="text-red-600">{expired_date}</p>
                    <p>{_id}</p>
                    {/* <p>{additional_note}</p> */}
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