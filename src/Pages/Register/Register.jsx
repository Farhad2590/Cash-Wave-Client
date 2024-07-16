// import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import toast from 'react-hot-toast'
import useAxios from "../../hooks/useAxios";
import { useState } from "react";


const Register = () => {
    const axiosUrl = useAxios()
    const [uses, setUses] = useState("user-pending");
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = e.target;

        const email = formData.email.value;
        // const role = formData.role.value;
        const phone_number = formData.phone_number.value;
        const password = formData.password.value;

        if (phone_number.length !== 11) {
            toast.error('Phone number must be exactly 11 digits long.')
            // console.error('Phone number must be exactly 11 digits long.');
            return;
        }

        if (password.length !== 5) {
            toast.error('Password must be exactly 5 digits long.')
            // console.error('Password must be exactly 5 digits long.');
            return;
        }

        console.log(uses);
        // if(uses === '')

        const userInfo = {
            email, uses, phone_number, password
        }
        axiosUrl.post('/user', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('user added to the database')
                    // reset();
                    toast.success(`${uses} created successfully`)

                }
            })
        console.log(userInfo);

        // console.log(users); // This will log the form data as an object
        // You can now send `data` to your server or handle it as needed
    };
    return (
        <div className="bg-gradient-to-r from-green-400  to-green-700 h-screen flex justify-center items-center">
            <div className="custom-bg bg-cover w-7/12 h-10/12 text-white relative">
                <div className="flex form_flex">
                    <div className="bg-white p-2 md:w-[500px] w-full h-[600px]">

                        <form onSubmit={handleSubmit} className="block sign_in mx-auto">
                            <div className="w-full bg-white p-3 md:rounded-l-0 rounded-l-lg rounded-r-lg flex items-center justify-center text-gray-950 text-center relative">
                                <div className="p-5">
                                    <div className="mb-5">
                                        <div className="mb-2 flex items-center justify-center">
                                            <div className="flex">
                                                <img className="w-10" src={logo} alt="" />
                                                <h1 className="text-3xl font-bold text-green-500">CashWave</h1>
                                            </div>
                                        </div>

                                        <div className="md:hidden block text-xl md:text-2xl mb-2 font-normal">
                                            Hello Again!
                                        </div>
                                        <div className="md:hidden block text-xs md:text-sm mb-2 font-normal text-gray-400">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Fuga veniam ea minima vitae.
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center gap-10 my-5 brandFont text-lg'>
                                        {/* <p onClick={() => setUses("admin")} className={`cursor-pointer ${uses === "admin" ? "border-b-2 border-green-500 text-green-500 font-extrabold" : ""}`}>Admin</p> */}
                                        <p onClick={() => setUses("agent-pending")} className={`cursor-pointer ${uses === "agent" ? "border-b-2 border-green-500 text-green-500 font-extrabold" : ""}`}>Agent</p>
                                        <p onClick={() => setUses("user-pending")} className={`cursor-pointer ${uses === "user-pending" ? "border-b-2 border-green-500 text-green-500 font-extrabold" : ""}`}>User</p>
                                    </div>
                                    {/* <div className="relative mb-2">
                                        <select
                                            required
                                            name="role"
                                            className="block w-full px-2.5 pb-2.5 pt-4 text-sm text-gray-950 bg-transparent border border-t-0 border-r-0 border-l-0 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                        >
                                            <option value="" disabled>Select Role</option>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                            <option value="agent">Agent</option>
                                        </select>
                                        <label
                                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                        >
                                            Role
                                        </label>
                                    </div> */}
                                    <div className="mb-[40px]">
                                        <div className="relative mb-2">
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                id="floatingEmail"
                                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-950 bg-transparent border border-t-0 border-r-0 border-l-0 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                                placeholder=""
                                            />
                                            <label
                                                htmlFor="floatingEmail"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                            >
                                                Email
                                            </label>
                                            <span className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400">
                                                <i className="fa-solid fa-at"></i>
                                            </span>
                                        </div>
                                        <div className="relative mb-2">
                                            <input
                                                required
                                                type="number"
                                                name="phone_number"
                                                id="floatingEmail"
                                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-950 bg-transparent border border-t-0 border-r-0 border-l-0 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                                placeholder=""
                                                maxLength="11"
                                            />
                                            <label
                                                htmlFor="floatingEmail"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                            >
                                                Phone Number
                                            </label>
                                            <span className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400">
                                                <i className="fa-solid fa-at"></i>
                                            </span>
                                        </div>
                                        <div className="relative mb-2">
                                            <input
                                                required
                                                type="number"
                                                id="floatingnumber"
                                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-950 bg-transparent border border-t-0 border-r-0 border-l-0 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                                placeholder=""
                                                maxLength="5"
                                                name="password"
                                            />
                                            <label
                                                htmlFor="floatingnumber"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                            >
                                                Pin
                                            </label>
                                            <span className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400">
                                                <i className="fa-solid fa-lock"></i>
                                            </span>
                                        </div>

                                    </div>
                                    <div className="mb-5">
                                        <button className="w-full text-center text-white bg-gradient-to-r from-green-400 to-green-700 rounded p-2 text-sm">
                                            Sign up
                                        </button>
                                    </div>


                                    <div className="block md:hidden absolute bottom-7 left-0 right-0 flex justify-center items-center text-sm text-gray-400">
                                        Dont have an account yet?
                                        <span
                                            className="font-bold text-green-500 mx-1 cursor-pointer"
                                            id="showSignUpFrom"
                                        >
                                            Sign up
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="hidden buttons md:flex md:items-center md:justify-center mx-auto h-full">
                        <div
                            className="mt-5 signup block text-center w-[230px] text-center"
                            id="signupButton"
                        >
                            <div className="mb-2">
                                <span className="md:text-2xl lg:text-3xl text-xl">Hello Again</span>
                            </div>
                            <div>
                                <span className="mt-2 text-sm text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </span>
                            </div>
                            <Link to="/login">
                                <button className="mx-auto mt-[230px] w-[90px] p-3 border border-gray-300 text-center rounded-full text-sm">
                                    Sign in
                                </button>
                            </Link>
                        </div>
                        <div className="mt-5 signin hidden text-center" id="signinButton">
                            <div className="mb-2">
                                <span className="md:text-2xl lg:text-3xl text-xl">
                                    Be a member!
                                </span>
                            </div>
                            <div>
                                <span className="mt-2 text-sm text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </span>
                            </div>
                            <button className="mx-auto mt-[230px] w-[90px] p-3 border border-gray-300 text-center rounded-full text-sm">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
