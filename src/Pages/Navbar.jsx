import { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../Components/Providers/AuthProvider";
import amimationData from '../../public/Animation - 1699262990966.json';
import Lottie from "lottie-react";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => <Navigate to='/'></Navigate>)
            .catch(error => console.log(error))
    }


    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 text-xl font-bold px-2 mx-2"> <span>
                                <Lottie className="w-40" loop={true} autoplay={true} animationData={amimationData}></Lottie>
                            </span> Wave</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu text-lg gap-2 font-semibold menu-horizontal">
                                {/* Navbar menu content here */}
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/available'>Available</NavLink></li>
                                <li><NavLink to='/addfood'>Add</NavLink></li>
                                <li><NavLink to='/manage'>Manage</NavLink></li>
                                <li><NavLink to='/myfood'>My Food</NavLink></li>
                                {/* <li><NavLink to='/login'>Login</NavLink></li> */}
                                {
                                    user ? <>
                                        <div className="flex mt-32 lg:mt-2 gap-4">
                                            <p className=" lg:mt-2 lg">{user.displayName}</p>
                                            <img className="rounded-full h-8 w-8" src={user.photoURL} alt="" />
                                        </div>
                                        <button onClick={handleLogOut} className="btn- btn-sm">Sign Out</button>
                                    </>
                                        :
                                        <Link to="/login">
                                            <button className="btn btn-sm">Login</button>
                                        </Link>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li><NavLink to='/available'>Available</NavLink></li>
                        <li><NavLink to='/addfood'>Add</NavLink></li>
                        <li><NavLink to='/manage'>Manage</NavLink></li>
                        <li><NavLink to='/myfood'>My Food</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;