import { useLoaderData } from "react-router-dom";
import FoodLayout from "./FoodLayout";
import Footer from "../../Pages/Footer";
import { useState } from "react";
import Serach from "./Serach";
import animationData from "../../../public/loading.json"
import Lottie from "lottie-react";
import { useEffect } from "react";

const AvailableFood = () => {
    // expired_date
    const data = useLoaderData();

    const strAscending = [...data].sort((a, b) =>
        a.expired_date > b.expired_date ? 1 : -1,
    );
    // console.log(strAscending);


    const [query, setQuery] = useState('');
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(result)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const handleSearch = () => {
        const filteredResult = data.filter(item =>
            item.food_name.toLowerCase().includes(query.toLowerCase())
        );
        // console.log(filteredResult)
        setResult(filteredResult)
    }

    return (
        <div>
            {
                loading ? <Lottie className="w-96 lg:ml-80 mt-40" loop={true} autoplay={true} animationData={animationData}></Lottie> : <div>
                    <p className="text-4xl font-bold text-center mt-14">This Foods are shown sortly by exipired date</p>
                    <div className="ml-28">
                        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Type here" className="input rounded-xl input-bordered input-info w-full max-w-xs" />
                        <button onClick={handleSearch} className="btn rounded-xl btn-secondary">Search</button>
                    </div>

                    <div className="grid lg:ml-60 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            result.map(item => <Serach item={item} key={item._id}></Serach>
                            )
                        }
                    </div>


                    <div className="grid lg:ml-60 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            strAscending.map(food => <FoodLayout food={food} key={food._id}></FoodLayout>)
                        }
                    </div>
                    <Footer></Footer>
                </div>
            }
        </div>
    );
};

export default AvailableFood;