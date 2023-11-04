import { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import FoodCard from "../Components/Featured/FoodCard";
import Footer from "./Footer";

const Home = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/add')
            .then(res => res.json())
            .then(data => setFoods(data))
    })

    return (
        <div>
            <Slider></Slider>
            <div className="mt-14 mb-14">
                <p className="text-center text-5xl mb-12 font-bold animate__animated animate__fadeInTopLeft">Featured Foods</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-48">
                    {
                        foods.map(food => <FoodCard food={food} key={food.food_id}></FoodCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;