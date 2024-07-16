import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { HiArrowSmallLeft } from 'react-icons/hi2';
// // import img from "../../assets/banner/signUp.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import axios from 'axios';
// import useAuth from '../../Hooks/useAuth';

const token = import.meta.env.VITE_IMAGE_TOKEN;

const Registers = () => {
    // const { updateUser, signUp, userVerify } = useAuth();
    const [type, setType] = useState("password");
    const [isShow, setIsShow] = useState(false);
    const [error, setError] = useState("");
    const [uses, setUses] = useState("alumni");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        photo: null,
        batch: '',
        department: '',
        company: '',
        position: '',
        academicYear: '',
        password: '',
        confirmPassword: ''
    });
    // const location = useLocation();
    // const navigate = useNavigate();
    // const from = location.state?.from?.pathname || "/";
    // const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`;

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, photo, batch, department, company, position, academicYear, password, confirmPassword } = formData;

        console.log(formData);
        // if (password.length < 6) {
        //     return setError("Password must be six characters in length");
        // }
        // if (password !== confirmPassword) {
        //     return setError("Password doesn't match");
        // }
        // if (!/(?=.*?[A-Z])/.test(password)) {
        //     return setError("At least one upper case include in your password");
        // }
        // if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
        //     return setError("At least one special character include in your password");
        // }

        // const imageData = new FormData();
        // imageData.append("image", photo);

        // try {
        //     const res = await fetch(hosting_url, {
        //         method: "POST",
        //         body: imageData
        //     });
        //     const resData = await res.json();
        //     const newUser = {
        //         email,
        //         name,
        //         phone,
        //         photo: resData.data?.url || "https://i.ibb.co/yyYWbyJ/user.png",
        //         role: uses,
        //         batch,
        //         department,
        //         company,
        //         position,
        //         academicYear
        //     };

        //     const signUpRes = await signUp(email, password);
        //     const loggedUser = signUpRes.user;
        //     await updateUser(loggedUser, name);
        //     await userVerify();
        //     const userRes = await axios.post('http://localhost:5000/users', newUser);
        //     if (userRes.data.insertedId) {
        //         navigate(from, { replace: true });
        //         Swal.fire({
        //             title: 'Success!',
        //             text: 'Sign up successful and check your email to verify!',
        //             icon: 'success',
        //             confirmButtonText: 'Ok'
        //         });
        //     }
        // } catch (error) {
        //     Swal.fire({
        //         title: 'Error!',
        //         text: error.message,
        //         icon: 'error',
        //         confirmButtonText: 'Cool'
        //     });
        // }
    };

    // const handleShow = () => {
    //     setType("text");
    // };

    // const handleHide = () => {
    //     setType("password");
    // };

    return (
        <section className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row w-4/5 mx-auto rounded-xl my-14 border-2 justify-center items-center'>
            {/* left part */}
            <div className='p-8 w-full lg:w-1/2 h-full border-r-2 bg-white relative'>
                {/* <Link to="/" className='inline-flex items-center gap-2 text-xl font-bold absolute top-0'><HiArrowSmallLeft className='h-6 w-6' />><HiArrowSmallLeft className='h-6 w-6' />Back</Link> */}
                {/* <img src={img} alt="" className='w-3/4 mx-auto rounded-lg mt-4' /> */}
                <p className='mt-7 text-center font-semibold'> Already Have An Account ? </p>
                <div className='text-center my-5 text-xs'>
                    <Link className='text-center' to="/login">
                        <button className='px-8 py-2 border border-primary text-base rounded-r-full rounded-l-full text-primary hover:text-white hover:bg-primary transition-all duration-300'>Sign In</button>
                    </Link>
                </div>
            </div>

            {/* right part */}
            <div className='w-full lg:w-1/2 p-8 bg-white'>
                <h1 className='text-center text-2xl font-bold pb-4 mt-4'> Create An Account </h1>
                <p className='text-center font-semibold'> Become a proud member of Alumni Association</p>
                <form onSubmit={onSubmit} className='flex flex-col space-y-4 w-[90%] mx-auto mt-10'>
                    <div className='flex justify-center'>
                        <input type="file" id='file' name="photo" onChange={handleChange} className='hidden' />
                        <label htmlFor="file" className='border rounded-full'>
                            {/* <img className='w-20 rounded-full hover:border-blue-500 border-4 transform duration-500' src={imgLogo} alt="" /> */}
                        </label>
                    </div>
                    <div className='flex items-center justify-center gap-10 my-5 brandFont text-lg'>
                        <p onClick={() => setUses("alumni")} className={`cursor-pointer ${uses === "alumni" ? "border-b-2 border-primary text-primary font-extrabold" : ""}`}>As Alumni</p>
                        <p onClick={() => setUses("student")} className={`cursor-pointer ${uses === "student" ? "border-b-2 border-primary text-primary font-extrabold" : ""}`}>As Current Student</p>
                    </div>

                    <input type='text' name="name" placeholder='Enter Your Name' value={formData.name} onChange={handleChange} className='inputField' />
                    {error && <p role="alert" className='text-error font-medium'>{error}</p>}

                    <input type='email' name="email" placeholder='Enter Your Email' value={formData.email} onChange={handleChange} className='inputField' />
                    {error && <p role="alert" className='text-error font-medium'>{error}</p>}

                    <input type='tel' name="phone" placeholder='Enter Your Number' value={formData.phone} onChange={handleChange} className='inputField' />
                    {error && <p role="alert" className='text-error font-medium'>{error}</p>}

                    <input type='text' name="batch" placeholder='Enter Your Batch (e.g CSE 01)' value={formData.batch} onChange={handleChange} className='inputField' />
                    {error && <p role="alert" className='text-error font-medium'>{error}</p>}

                    <input type='text' name="department" placeholder='Enter Your Department' value={formData.department} onChange={handleChange} className='inputField' />
                    {error && <p role="alert" className='text-error font-medium'>{error}</p>}

                    {uses === "alumni" && (
                        <>
                            <input type='text' name="company" placeholder='Enter Your Current Sector' value={formData.company} onChange={handleChange} className='inputField' />
                            {error && <p role="alert" className='text-error font-medium'>{error}</p>}

                            <input type='text' name="position" placeholder='Enter Your Current Position' value={formData.position} onChange={handleChange} className='inputField' />
                            {error && <p role="alert" className='text-error font-medium'>{error}</p>}

                            <input type='text' name="academicYear" placeholder='Enter Your Academic Year' value={formData.academicYear} onChange={handleChange} className='inputField' />
                            {error && <p role="alert" className='text-error font-medium'>{error}</p>}
                        </>
                    )}

                    <div className='inline-flex items-center w-full relative'>
                        <input type={type} name="password" placeholder='Enter Your Password' value={formData.password} onChange={handleChange} className='inputField' />
                        {/* <div className='absolute right-3 cursor-pointer' onClick={() => setIsShow(!isShow)}>
                            {isShow ? <FaEyeSlash className='h-5 w-5 text-red-600' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-red-600' onClick={handleShow} />}
                        </div> */}
                    </div>
                    {error && <p role="alert" className='text-error font-medium'>{error}</p>}

                    <div className='inline-flex items-center'>
                        <input type="password" name="confirmPassword" placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} className='inputField' />
                    </div>
                    {error && <p role="alert" className='text-error font-medium'>{error}</p>}

                    <p className='my-3 font-semibold text-red-600'>{error}</p>

                    <input type="submit" value="Sign Up" className="btn btn-primary" />
                </form>
            </div>
        </section>
    );
};

export default Registers;
