import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const request = useSelector((store) => store.request);
  const getRequsts = async () => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL + "/user/requests/received",
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addRequest(res.data.data));
    } catch (error) {}
  };

  useEffect(() => {
    getRequsts();
  }, []);

  if (request === null) return <h1>No Requests found</h1>;
  if (request.length === 0) return <h1>No connections found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-2xl">Requests</h1>
      {request.map((conn) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          conn.fromUserId;
        return (
          <div
            key={_id}
            className="mt-10 p-4 flex  items-center  rounded-lg bg-base-300 w-1/3 mx-auto "
          >
            <div>
              <img
                className="h-20 w-20 rounded-full"
                alt="photo"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2>{firstName + " " + lastName}</h2>
              {age && gender && <P>{age + " " + gender}</P>}
              <p>{about}</p>
            </div>
            <div className="card-actions my-4 flex">
              <button className="btn btn-error text-white mx-2">Reject</button>
              <button className="btn btn-primary mx-2">Accept</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
