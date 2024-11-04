import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL + "/user/feed",
        {
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(addFeed(res.data));
    } catch (error) {
      console.error("Error fetching feed", error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  if (!feed) return;
  if (feed.length <= 0)
    return (
      <h1 className="flex items-center justify-center font-bold pt-10">
        No new users found
      </h1>
    );
  return (
    feed && (
      <>
        <h1 className="text-white text-center">feed</h1>
        <div className="flex justify-center my-10">
          <UserCard user={feed[0]} />
        </div>
      </>
    )
  );
};

export default Feed;
