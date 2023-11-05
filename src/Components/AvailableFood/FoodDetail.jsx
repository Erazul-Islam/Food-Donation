import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AvailFoodLayout from "./AvailFoodLayout";

const FoodDetail = () => {


    const {_id} = useParams()

    const [food, setFood] = useState({})

    const foods = useLoaderData();

    useEffect(() => {
        const findFoods = foods.find(food => food._id == _id)
        setFood(findFoods)
    }, [_id, foods])


    return (
        <div>
            <AvailFoodLayout food={food}></AvailFoodLayout>
        </div>
    );
};

export default FoodDetail;