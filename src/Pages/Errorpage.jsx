import { Link } from "react-router-dom";
import animationData from '../../public/404.json'
import Lottie from "lottie-react";
const Errorpage = () => {
    return (
        <div>
            <div>
                <div>
                    <Lottie className='h-[600px]' animationData={animationData} loop={true} autoplay={true}>

                    </Lottie>
                    <div className="text-center gap-4 mt-16">
                        <h1 className="text-7xl text-blue-700 font-bold">OPPPS!!!!</h1>
                        <p className="text-2xl mt-4 font-semibold">404-page not found</p>
                        <p className="mt-4">The page you are looking for might have beent removed</p><br />
                        <p>had its name changed or is temporarily removed</p>
                        <Link to='/'><button className="btn btn-neutral mt-6">Go Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;