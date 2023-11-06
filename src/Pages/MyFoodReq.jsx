import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyFoodReq = () => {

    const foods = useLoaderData();
    const [users, setUsers] = useState(foods)

    const handleCancel = _id => {
        console.log(_id)
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
                                text: "Your file has been deleted.",
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
            <div className="grid grid-cols-3 ml-28 mt-28">
                {
                    foods.map(food => <div key={food._id} className="card card-side lg:w-[500px] mt-14 bg-base-100 shadow-xl">
                        <figure><img src={food.image} className="w-60 h-60" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{food.food_name}</h2>
                            <p>{food.donator_name}</p>
                            <p>{food.expired_date}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleCancel(food._id)} className="btn btn-primary">Cancel</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyFoodReq;