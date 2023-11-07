import { useEffect, useState } from "react";
import FoodCard from "../Components/Featured/FoodCard";
import Footer from "./Footer";
import PopularDonator from "../Components/ExtraHomePageSection/PopularDonator";
import { Link } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import Review from "../Components/ExtraHomePageSection/Review";
import Contact from "../Components/ExtraHomePageSection/Contact";
// food_quantity


const Home = () => {

    const [foods, setFoods] = useState([]);
    const strAscending = [...foods].sort((a, b) =>
        a.food_quantity > b.food_quantity ? -1 : 1,
    );
    console.log(strAscending)

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
                        strAscending.map(food => <FoodCard food={food} key={food.food_id}></FoodCard>)
                    }
                </div>
            </div>
            <div>
                <Link to='/available'>
                    <button className="btn btn-error lg:ml-[1000px]">See All</button>
                </Link>
            </div>
            <div>
                <PopularDonator></PopularDonator>
            </div>
                    <Review></Review>
                    <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;