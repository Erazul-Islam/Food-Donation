import { useEffect, useState } from "react";
import FoodCard from "../Components/Featured/FoodCard";
import Footer from "./Footer";
import PopularDonator from "../Components/ExtraHomePageSection/PopularDonator";
import { Link } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import Review from "../Components/ExtraHomePageSection/Review";
import Contact from "../Components/ExtraHomePageSection/Contact";
import animationData from "../../public/loading.json"
import Lottie from "lottie-react";
// food_quantity


const Home = () => {

    const [foods, setFoods] = useState([]);
    const strAscending = [...foods].sort((a, b) =>
        a.food_quantity > b.food_quantity ? -1 : 1,
    );
    // console.log(strAscending)

    useEffect(() => {
        fetch(' https://share-eat-server.vercel.app/add')
            .then(res => res.json())
            .then(data => setFoods(data))
    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <div>
            {
                loading ? <Lottie className="w-96" loop={true} autoplay={true} animationData={animationData}></Lottie> : <div>
                    <Slider></Slider>

                    <div className="mt-14 mb-14">
                        <p className="text-center text-5xl mb-12 font-bold animate__animated animate__fadeInTopLeft">Featured Foods</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-14 lg:ml-48">
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
            }
        </div>
    );
};

export default Home;