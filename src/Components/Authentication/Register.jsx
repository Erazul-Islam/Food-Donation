
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const [errors, setErrors] = useState('')
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        console.log('form submitted')

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        createUser(email, password)
            .then(result => {
                navigate('/')
                console.log(result)
            })
            .catch(error => {
                console.log(error)
                if (password.length < 6) {
                    setErrors('Your password should have at least 6 character')
                    return;
                }

            })

        setErrors('')


        // else if (!/[A-Z]/.test(password)) {
        //     setErrors('One character should be upper case')
        //     return
        // }
        // else if (!/[!@#$%^&*()]/.test(password)) {
        //     setErrors('one character should be special character')
        //     return
        // }
    }




    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-5xl text-purple-700 font-bold">Register Now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name...." className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="submit your photo" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control gap-4 mt-6">
                                    <button className="btn bg-[#FF444A] border-none btn-secondary">Register</button>
                                    <p>Already have an account? <p className="text-blue-600 underline"><NavLink to='/login'>Login</NavLink></p></p>
                                </div>
                            </form>
                            {
                                errors && <p className="text-red-800 text-2xl pl-14 pb-3">{errors}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;