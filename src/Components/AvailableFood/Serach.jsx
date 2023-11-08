/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Serach = ({ item }) => {

    const { _id, image, food_name, donator_name, food_quantity, expired_date, picup_Location, additional_note } = item || {}

    const { user } = useContext(AuthContext)

    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    const userEmail = user.email;
    console.log(userEmail)

    const handleReq = () => {
        const reqFood = { _id, image, food_name, donator_name, food_quantity, expired_date, additional_note, dateTimeString, userEmail }

        console.log(reqFood)

        fetch(' https://share-eat-server-6nzd1gacu-erazul-islam.vercel.app/request', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reqFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
            })
    }


    return (
        <div>
            <div className="ml-20 mt-20">
                <div className="card w-96 glass">
                    <figure><img src={image} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{food_name}</h2>
                        <p>{donator_name}</p>
                        <p>{food_quantity}</p>
                        <p>{expired_date}</p>
                        <div className="card-actions justify-end">
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Request</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <img className="rounded-xl" src={image} alt="" />
                                    <div className="mt-4">
                                        <div className="ml-16">
                                            <input type="text" value={food_name} className="input pl-12 input-bordered w-full max-w-xs" disabled />
                                            <input type="text" value={_id} className="input pl-12 input-bordered w-full max-w-xs mt-4" disabled />
                                            <input type="text" placeholder="email" className="input pl-12 input-bordered w-full mt-4 max-w-xs" disabled />
                                            <input type="text" value={donator_name} className="input pl-12 input-bordered w-full mt-4 max-w-xs" disabled />
                                            <input type="text" value={user.email} className="input pl-12 input-bordered w-full mt-4 max-w-xs" disabled />
                                            <input type="text" value={picup_Location} className="input pl-12 input-bordered w-full mt-4 max-w-xs" disabled />
                                            <input type="text" value={dateTimeString} className="input pl-12 input-bordered mt-4 w-full max-w-xs" disabled />
                                            <input type="text" value={expired_date} className="input pl-12 input-bordered w-full mt-4 max-w-xs" disabled />
                                            <input type="text" defaultValue={additional_note} className="input pl-12 input-bordered mt-4 w-full max-w-xs" />
                                            <input type="text" defaultValue={`$5000`} className="input pl-12 input-bordered mt-4 w-full max-w-xs" />
                                        </div>
                                    </div>
                                    <div className="modal-action">
                                        <form onSubmit={handleReq} method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-secondary">Request</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Serach;