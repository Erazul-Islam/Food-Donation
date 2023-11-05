import { useLoaderData } from "react-router-dom";
import FoodLayout from "./FoodLayout";
import Footer from "../../Pages/Footer";

const AvailableFood = () => {

    const data = useLoaderData();


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(food => <FoodLayout food={food} key={food._id}></FoodLayout>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AvailableFood;