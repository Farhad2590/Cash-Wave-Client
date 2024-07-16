import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";



const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            setCurrentUser(JSON.parse(user));
        }
    }, []);
    return (
        <div className="flex flex-col md:flex-row">
            <aside className="flex flex-col w-64 h-screen px-4  overflow-y-auto bg-white dark:bg-gray-900 dark:border-gray-700">

                <div className="flex flex-col justify-between flex-1 mt-6">
                    {currentUser && currentUser.uses === 'admin' && (
                        <ul className="flex flex-col gap-5">
                            <li className="">
                                <NavLink to="/dashboard/adminHome" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <FaHome />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/dashboard/allUsers" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <FaHome />
                                    All Users
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/dashboard/allAgents" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <FaHome />
                                    All Agents
                                </NavLink>
                            </li>
                        </ul>
                    )}
                    {currentUser && currentUser.uses === 'user' && (
                        <ul>
                            <li className="">
                                <NavLink to="/dashboard/userHome" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <FaHome />
                                    User Home
                                </NavLink>
                            </li>
                        </ul>
                    )}
                    {currentUser && currentUser.uses === 'agent' && (
                        <ul>
                            <li className="">
                                <NavLink to="/dashboard/agentHome" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <FaHome />
                                    Agent Home
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </aside>
            <div className="flex-1 p-4 md:p-8 bg-gray-100">
                <Outlet></Outlet>
            </div >
        </div>


    );
};

export default Dashboard;