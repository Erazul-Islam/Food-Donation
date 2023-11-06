import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";

const Edit = () => {

    const editFood = useLoaderData();
         
    const {_id, food_name, image, food_quantity, picup_Location, expired_date, additional_note, donator_img, donator_name, email, availability} = editFood;

    const handleEdit = e => {
        e.preventDefault()

        const form = e.target;

        const food_name = form.food.value;
        const image = form.img.value;
        const food_quantity = form.quantity.value;
        const picup_Location = form.location.value;
        const expired_date = form.expiration.value;
        const additional_note = form.notes.value;
        const donator_img = form.donator.value;
        const donator_name = form.name.value;
        const email = form.email.value;
        const availability = form.availability.value

        // console.log(food,img,quantity,location,expiration,notes,donator,name,email,availability)

        const EditFood = { food_name, image, food_quantity, picup_Location, expired_date, additional_note, donator_img, donator_name, email, availability }
        console.log(EditFood)

        fetch(`http://localhost:5000/avail/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(EditFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
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
            <div className="lg:ml-64 mt-24 mr-64 rounded bg-cyan-600 text-black">
                <h1 className="text-center pt-8 text-3xl">Edit Food</h1>
                <form onSubmit={handleEdit} className="pl-36 mt-8 pb-8 pr-36">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:justify-between">
                        <div>
                            <div>
                                <span className="">Food Name</span><br />
                                <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Enter a food name" defaultValue={food_name} name="food" type="text" />
                            </div>
                            <div>
                                <span className="">Food Image</span><br />
                                <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Publish a food image" defaultValue={image} name="img" type="text" />
                            </div>
                            <div>
                                <span className="">Food Quantity</span><br />
                                <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Quantity" defaultValue={food_quantity} name="quantity" type="text" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="">Pickup Location</span><br />
                                <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Pickup" defaultValue={picup_Location} name="location" type="text" />
                            </div>
                            <div>
                                <span className="">Expired Date</span><br />
                                <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Date" defaultValue={expired_date} name="expiration" type="text" />
                            </div>
                            <div>
                                <span className="">Additional Notes</span><br />
                                <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Notes" defaultValue={additional_note} name="notes" type="text" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="">Donator img</span><br />
                                <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Donatior" defaultValue={donator_img}  name="donator" type="text" />
                            </div>
                            <div>
                                <span className="">Donator Name</span><br />
                                <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Donator name" defaultValue={donator_name} name="name" type="text" />
                            </div>
                            <div>
                                <span className="">Email</span><br />
                                <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="email" defaultValue={email}  name="email" type="text" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="">Available</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Available" defaultValue={availability} name="availability" type="text" />
                    </div>
                    <div>
                        <button className="btn w-full h-12 mt-4 rounded-lg hover:bg-yellow-600 bg-yellow-400 border-none text-[#331A15]">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;