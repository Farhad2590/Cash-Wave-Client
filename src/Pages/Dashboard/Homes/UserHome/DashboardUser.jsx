// import React from 'react';

import sendMoney from "../../../../assets/sendMoney.png"
import cashOut from "../../../../assets/cashOut.png"
import cashIn from "../../../../assets/cashIn.png"
import balanceInquiry from "../../../../assets/balanceInquiry.png"

const DashboardUser = () => {
    

    return (
        <div>
            <h1 className="text-center">Balance</h1>
            <div className="flex gap-5 justify-center">
                <div className=" p-5 bg-green-200">
                    <img className="w-44" src={balanceInquiry} alt="" />
                    <h1 className="text-xl">Balance</h1>
                </div>
                <div onClick={() => document.getElementById('cashIn').showModal()} className="p-5 bg-green-200">
                    <img className="w-44" src={cashIn} alt="" />
                    <h1 className="text-xl">Balance</h1>
                </div>
                <div onClick={() => document.getElementById('cashOut').showModal()} className="p-5 bg-green-200">
                    <img className="w-44" src={cashOut} alt="" />
                    <h1 className="text-xl">Cashout</h1>
                </div>
                <div onClick={() => document.getElementById('send_money').showModal()} className="p-5 bg-green-200">
                    <img className="w-44" src={sendMoney} alt="" />
                    <h1 className="text-xl">Send Money</h1>
                </div>
            </div>
            <dialog id="send_money" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center">Send Money</h3>

                    <div className="modal-action">

                        <form method="dialog" className="block sign_in mx-auto">
                            <div className="w-full bg-white p-3 md:rounded-l-0 rounded-l-lg rounded-r-lg flex items-center justify-center text-gray-950 text-center relative">
                                <div className="p-5">
                                    <div className="mb-[40px]">
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
                                                Reciever Phone Number
                                            </label>
                                            <span className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400">
                                                <i className="fa-solid fa-at"></i>
                                            </span>
                                        </div>
                                        <div className="relative mb-2">
                                            <input
                                                required
                                                type="number"
                                                name="money"
                                                id="floatingEmail"
                                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-950 bg-transparent border border-t-0 border-r-0 border-l-0 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                                placeholder=""
                                                maxLength="11"
                                            />
                                            <label
                                                htmlFor="floatingEmail"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                            >
                                                Money
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
                                            Confirm
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id="cashOut" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center">Cash Out</h3>

                    <div className="modal-action">

                        <form method="dialog" className="block sign_in mx-auto">
                            <div className="w-full bg-white p-3 md:rounded-l-0 rounded-l-lg rounded-r-lg flex items-center justify-center text-gray-950 text-center relative">
                                <div className="p-5">
                                    <div className="mb-[40px]">
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
                                                Agent Phone Number
                                            </label>
                                            <span className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400">
                                                <i className="fa-solid fa-at"></i>
                                            </span>
                                        </div>
                                        <div className="relative mb-2">
                                            <input
                                                required
                                                type="number"
                                                name="money"
                                                id="floatingEmail"
                                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-950 bg-transparent border border-t-0 border-r-0 border-l-0 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                                placeholder=""
                                                maxLength="11"
                                            />
                                            <label
                                                htmlFor="floatingEmail"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                            >
                                                Money
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
                                            Confirm
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id="cashIn" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center">Cash In</h3>

                    <div className="modal-action">

                        <form method="dialog" className="block sign_in mx-auto">
                            <div className="w-full bg-white p-3 md:rounded-l-0 rounded-l-lg rounded-r-lg flex items-center justify-center text-gray-950 text-center relative">
                                <div className="p-5">
                                    <div className="mb-[40px]">
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
                                                Agent Phone Number
                                            </label>
                                            <span className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400">
                                                <i className="fa-solid fa-at"></i>
                                            </span>
                                        </div>
                                        <div className="relative mb-2">
                                            <input
                                                required
                                                type="number"
                                                name="money"
                                                id="floatingEmail"
                                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-950 bg-transparent border border-t-0 border-r-0 border-l-0 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                                placeholder=""
                                                maxLength="11"
                                            />
                                            <label
                                                htmlFor="floatingEmail"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                            >
                                                Money
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
                                            Confirm
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    );

};

export default DashboardUser;