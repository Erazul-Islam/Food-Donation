import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Components/Providers/AuthProvider";

const ManageMyFood = () => {

    const foods = useLoaderData();
    // console.log(foods)
    const [users, setUsers] = useState(foods)

    const { user } = useContext(AuthContext)
    const email = user.email
    console.log(email)

    const filteredFoods = foods.filter(food => food.email === email)
    console.log(filteredFoods)

    const handleDelete = _id => {
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

                fetch(`http://localhost:5000/avail/${_id}`, {
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
            <div className="text-center text-4xl font-bold mt-16">
                <p>All the foods that You is added</p>
            </div>
            <div className="overflow-x-auto mt-20 ml-16 mr-16">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Food Name</th>
                            <th>Food Quantity</th>
                            <th>Pickup Location</th>
                            <th>Expired Date & Time</th>
                            <th>Additional Note</th>
                            <th>Food Status</th>
                            <th>Edit & Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            filteredFoods.map(food => <tr key={food._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{food.food_name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {food.food_quantity}
                                </td>
                                <td>{food.picup_Location}</td>
                                <td>
                                    {food.expired_date}
                                </td>
                                <td>
                                    N/A
                                </td>
                                <td>
                                    Available
                                </td>
                                <th>
                                    <Link to={`/edit/${food._id}`}>
                                        <button className="btn btn-ghost btn-xs">Edit</button>
                                    </Link>
                                    <Link to={`/single/${food._id}`}>
                                        <button className="btn btn-ghost btn-xs">Manage</button>
                                    </Link>
                                    <button onClick={() => handleDelete(food._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMyFood;