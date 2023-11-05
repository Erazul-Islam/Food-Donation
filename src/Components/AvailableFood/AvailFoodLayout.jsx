/* eslint-disable react/prop-types */
const AvailFoodLayout = ({ food }) => {
    const { _id, image, food_name, donator_name, donator_img, food_quantity, expired_date, additional_note, picup_Location } = food || {}
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{food_name}</h2>
                    <img src={donator_img} alt="" />
                    <p>{donator_name}</p>
                    <p>{food_quantity}</p>
                    <p>{expired_date}</p>
                    <p>{additional_note}</p>
                    <p>{picup_Location}</p>
                    <p>{_id}</p>
                </div>
            </div>
        </div>
    );
};

export default AvailFoodLayout;