/* eslint-disable react/prop-types */
const FeaturedDetailLayout = ({ food }) => {
    console.log(food)

    const { _id, image, food_name, donator_name, donator_img, food_quantity, expired_date, additional_note } = food || {}

    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();

    return (
        <div className="ml-56 mt-20">
            <div className="card w-96 glass">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{food_name}</h2>
                    <p>{donator_name}</p>
                    <p>{food_quantity}</p>
                    <p>{expired_date}</p>
                    <div className="card-actions justify-end">
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Request</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                               
                                <h3 className="font-bold text-lg">{food_name}</h3>
                                <img className="rounded-full" src={donator_img} alt="" />
                                <img src={image} alt="" />
                                <p>{donator_name}</p>
                                <p>{expired_date}</p>
                                <p>{additional_note}</p>
                                <p className="py-4">{dateTimeString}</p>
                                <p>{_id}</p>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedDetailLayout;