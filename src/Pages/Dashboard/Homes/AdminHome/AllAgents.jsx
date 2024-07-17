// import React from 'react';

import { useNavigate } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import toast from "react-hot-toast";
import Spinner from "../../../../Shared/Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";

const AllAgents = () => {
    const axiosUrl = useAxios()
    const navigate = useNavigate()

    const { data: users = [], isLoading: usersLoading, refetch: refetchUsers } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosUrl.get('/users');
            return res.data;
        }
    });
    const handleMakeAdmin = user => {
        console.log(user);
        axiosUrl.patch(`/users/makeAgents/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetchUsers();
                    toast.success(`${user.email} is an CashWave User Now!`);
                }
            });
    };

    const filteredAgents = users.filter(user => user.uses === 'agent-pending' || user.uses === 'agent');
    return (
        <div>
            {/* <SharedTitle heading="All Users" /> */}
            {(usersLoading) ? (
                <div className="flex justify-center items-center h-screen">
                    <Spinner></Spinner>
                </div>
            ) : (

                <div>
                    <h1 className="text-3xl text-center">All Users</h1>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Role</th>
                                    <th>Make User</th>

                                </tr>
                            </thead>
                            <tbody>
                                {filteredAgents.map((user, index) => {
                                    return (
                                        <tr key={user._id}>
                                            <th>{index + 1}</th>
                                            <td>{user.email}</td>
                                            <td>{user.phone_number}</td>

                                            <td>{user.uses}</td>

                                            <td>
                                                {user.uses === 'agent' ? <button
                                                    disabled
                                                    className="btn btn-lg bg-green-500"
                                                >
                                                    <FaUsers className="text-white text-2xl"></FaUsers>
                                                </button> : (
                                                    <button
                                                        onClick={() => handleMakeAdmin(user)}
                                                        className="btn btn-lg bg-green-500"
                                                    >
                                                        <FaUsers className="text-white text-2xl"></FaUsers>
                                                    </button>
                                                )}
                                            </td>

                                            {/* {user.role === 'admin' ? 'Admin' : (
                                        
                                    )} */}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            )}
        </div>
    );
};

export default AllAgents;