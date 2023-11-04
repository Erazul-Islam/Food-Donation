import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FeaturedDetailLayout from "./FeaturedDetailLayout";

const FeaturedDetail = () => {

    const {_id} = useParams();

    const [food,setFood] = useState({})

    const foods = useLoaderData();
    
    useEffect(() => {
        const findFoods = foods.find(food => food._id == _id)
        setFood(findFoods)
    },[_id,foods])

    return (
        <div>
            <FeaturedDetailLayout food={food}></FeaturedDetailLayout>
        </div>
    );
};

export default FeaturedDetail;