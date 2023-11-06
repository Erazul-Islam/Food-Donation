import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ManageMyFood = () => {

    const foods = useLoaderData();
    console.log(foods)

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
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            console.log('delete confirmed')
            }
          });
    }

    return (
        <div>
            <div className="text-center text-4xl font-bold mt-16">
                <p>All the foods that is added</p>
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
                            foods.map(food => <tr key={food._id}>
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
                                    <button className="btn btn-ghost btn-xs">Edit</button>
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