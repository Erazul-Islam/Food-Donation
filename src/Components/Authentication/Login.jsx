import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useState } from "react";




const Login = () => {

    const {googleSignIn,signInUser} = useContext(AuthContext)
    console.log(googleSignIn)
    const navigate = useNavigate();

    const [loginError,setLoginError] = useState('')

    const handleGoogleLogin = () => {
        console.log('done')
        googleSignIn()
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl text-purple-700 font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control gap-4 mt-6">
                                <button className="btn bg-[#FF444A] border-none btn-secondary">Login</button>
                                <p>Dont have an account? <p className="text-blue-600 underline"><NavLink to='/register'>Register</NavLink></p></p>
                            </div>
                        </form>
                        <div className="pb-16 pl-10">
                            <p className="pb-4">OR Login With</p>
                            <button onClick={handleGoogleLogin} className=" btn btn-secondary">Google</button>
                        </div>
                        {/* {
                            loginError && <p className="pl-6 pb-3 text-red-500">{loginError}</p>
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;