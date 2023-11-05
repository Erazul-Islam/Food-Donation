import { useEffect } from "react";
import { useState } from "react";

const PopularDonator = () => {

    const [donators, setDonator] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/add')
            .then(res => res.json())
            .then(data => setDonator(data))
    })

    return (
        <div className="mt-10  mb-12">
            <div>
                <p className="text-4xl text-orange-500 font-bold text-center">Our most efficient donator</p>
            </div>
            <div className="mt-10 lg:ml-[500px]">
                {
                    donators.map(donator => <div  key={donator._id} className="avatar ml-20">
                        <div className="w-24 rounded-full">
                            <img src={donator.donator_img} />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularDonator;