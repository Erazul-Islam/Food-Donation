import { useLoaderData } from "react-router-dom";
import FoodLayout from "./FoodLayout";
import Footer from "../../Pages/Footer";

const AvailableFood = () => {
    // expired_date
    const data = useLoaderData();
    console.log(data)
    const strAscending = [...data].sort((a, b) =>
        a.expired_date > b.expired_date ? -1 : 1,
    );
    console.log(strAscending);

    return (
        <div> 
            <p className="text-4xl font-bold text-center mt-14">This Foods are shown sortly by exipired date</p>
            <div className="grid lg:ml-60 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    strAscending.map(food => <FoodLayout food={food} key={food._id}></FoodLayout>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AvailableFood;