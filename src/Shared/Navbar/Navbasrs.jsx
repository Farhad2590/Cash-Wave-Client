// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";


const Navbasrs = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            setCurrentUser(JSON.parse(user));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
    };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="flex">
                    <img className="w-10" src={logo} alt="" />
                    <h1 className="text-3xl font-bold text-green-500">CashWave</h1>
                </div>
            </div>
            <div className="navbar-end">
            {currentUser && currentUser.uses === 'admin' && (
                        <ul className="menu menu-horizontal px-1">
                            <li className="">
                                <NavLink to="/adminHome" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <FaHome />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/allUsers" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <FaHome />
                                    All Users
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/allAgents" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <FaHome />
                                    All Agents
                                </NavLink>
                            </li>
                        </ul>
                    )}
                    {currentUser && currentUser.uses === 'user' && (
                        <ul className="menu menu-horizontal px-1">
                            <li className="">
                                <NavLink to="/userDashboard" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <FaHome />
                                   Dashboard
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/userHome" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <FaHome />
                                    User Home
                                </NavLink>
                            </li>
                        </ul>
                    )}
                    {currentUser && currentUser.uses === 'agent' && (
                        <ul className="menu menu-horizontal px-1">
                            <li className="">
                                <NavLink to="/agentHome" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <FaHome />
                                    Agent Home
                                </NavLink>
                            </li>
                        </ul>
                    )}

                {!currentUser ? (
                    <Link to="/login">
                        <button className="btn bg-green-400 text-white hover:border border-green-400">
                            Join Us
                        </button>
                    </Link>
                ) : (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User Avatar"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a onClick={handleLogout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Navbasrs;