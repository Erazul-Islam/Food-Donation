
import Swal from "sweetalert2";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Components/Providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/loading.json"

const MyFoodReq = () => {


    const { user } = useContext(AuthContext)
    const email = user.email
    console.log(email)


    const data = useLoaderData()
    console.log(data)

    const [users, setUsers] = useState(data)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    const filteredFoods = data.filter(food => food.userEmail === email)
    console.log(filteredFoods)





    const handleCancel = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/request/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your request has been cancelled.",
                                icon: "success"
                            });
                            const remaining = users.filter(user => user._id !== _id)
                            setUsers(remaining)
                        }
                    })

            }
        });
    }

    return (
        <div>
            {
                loading ? <Lottie className="w-96" loop={true} autoplay={true} animationData={animationData}></Lottie> :<div className="grid grid-cols-3 ml-28 mt-28">
                {
                    filteredFoods.map(one => <div key={one._id} className="card mt-14 w-96 card-side bg-base-100 shadow-xl">
                        <figure><img className="w-full h-full" src={one.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{one.donator_name}</h2>
                            <p>{one.dateTimeString}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleCancel(one._id)} className="btn rounded-lg btn-primary">Cancel</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            }
        </div>
    );
};

export default MyFoodReq;