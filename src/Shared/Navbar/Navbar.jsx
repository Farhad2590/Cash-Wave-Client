import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img className="w-10" src={logo} alt="" />
                <h1 className="text-3xl font-bold text-green-500">CashWave</h1>
            </div>
            <div className="flex-none">
                <Link to="/login">
                    <button className="btn bg-green-400  text-white hover:border border-green-400">
                        Join Us
                    </button>

                </Link>
                {/* <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
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
                        <li><a>Logout</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;