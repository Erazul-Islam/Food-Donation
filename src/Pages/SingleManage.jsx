import { useContext, useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Components/Providers/AuthProvider";

const SingleManage = () => {

    const { _id } = useParams()

    const { user } = useContext(AuthContext)
    console.log(user)

    const [food, setFood] = useState({})

    const foods = useLoaderData();

    useEffect(() => {
        const findFoods = foods.find(food => food._id == _id)
        setFood(findFoods)
    }, [_id, foods])


    return (
        <div>
            {
                food ? <div className="card w-96 bg-base-100 shadow-xl">

                    <div className="card-body">
                        <h2 className="card-title">{food._id}</h2>
                        <p>{user.email}</p>
                        <p>{user.displayName}</p>
                        <img className="w-10" src={user.photoURL} alt="" />
                        <p> Requsest Time {food.dateTimeString}</p>
                    </div>

                </div> : <div className="text-3xl font-bold text-center mt-12"> No request </div>
            }
        </div>
    );
};

export default SingleManage;