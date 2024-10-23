import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const res = await axios.post(
      import.meta.env.VITE_BASE_URL + "/logout",
      {},
      { withCredentials: true }
    );
    dispatch(removeUser());
    navigate("/login");
    try {
    } catch (error) {
      // error logic redirect to error page
    }
  };
  return (
    <>
      <div className="navbar bg-neutral">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl text-white">
            DevConnect
          </Link>
        </div>

        {user && (
          <div className="flex-none gap-2">
            <div className="form-control text-white">
              Welcome, {user.firstName}
            </div>
            <div className="dropdown dropdown-end mx-5 flex ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoUrl}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/connections">Friends</Link>
                </li>
                <li>
                  <Link to="/requests">Requests</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
