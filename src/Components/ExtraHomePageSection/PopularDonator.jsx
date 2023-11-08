import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const PopularDonator = () => {

    const [donators, setDonator] = useState([])

    useEffect(() => {
        fetch(' https://share-eat-server-6nzd1gacu-erazul-islam.vercel.app/add')
            .then(res => res.json())
            .then(data => setDonator(data))
    })

    return (
        <div className="mt-10  mb-12">
            <div>
                <p className="text-4xl text-orange-500 font-bold text-center">Our most efficient donator</p>
            </div>
            <Marquee pauseOnHover={true} >
                <div className="mt-10 grid gap-8 grid-cols-3 lg:ml-[200px]">
                    {
                        donators.map(donator => <div key={donator._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={donator.donator_img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{donator.donator_name}</h2>
                                <div className="">
                                    <Link className="flex gap-4">
                                        <img className="w-8" src="https://i.ibb.co/7pSPmmb/5296500-fb-social-media-facebook-facebook-logo-social-network-icon.png" alt="" />
                                        <img className="w-8" src="https://i.ibb.co/fMtHfLz/3225191-app-instagram-logo-media-popular-icon.png" alt="" />
                                        <img className="w-8" src="https://i.ibb.co/F4xWrKH/5296514-bird-tweet-twitter-twitter-logo-icon.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default PopularDonator;