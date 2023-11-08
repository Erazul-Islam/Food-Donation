import { useContext, useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Components/Providers/AuthProvider";
import animationData from "../../public/loading.json"
import Lottie from "lottie-react";

const SingleManage = () => {

    const { _id } = useParams()

    const { user } = useContext(AuthContext)
    console.log(user)

    const [food, setFood] = useState({})

    const foods = useLoaderData();

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        const findFoods = foods.find(food => food._id == _id)
        setFood(findFoods)
    }, [_id, foods])


    return (
        <div className="lg:ml-96 lg:mt-24">

            {
                loading ? <Lottie className="w-96" loop={true} autoplay={true} animationData={animationData}></Lottie> :
                    <div>
                        {
                            food ? <div className="card w-96 bg-base-100 shadow-xl">

                                <div className="card-body">
                                    <p>{user?.email}</p>
                                    <p>{user?.displayName}</p>
                                    <img className="w-10" src={user?.photoURL} alt="" />
                                    <p> Requsest Time {food.dateTimeString}</p>
                                </div>

                            </div> : <div className="text-3xl font-bold text-center mt-12"> No request </div>
                        }
                    </div>
            }


        </div>
    );
};

export default SingleManage;