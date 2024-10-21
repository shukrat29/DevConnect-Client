import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const Body = () => {
  // getting loggedIn user profile and adding to redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL + "/profile/view",
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="bg-neutral">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
