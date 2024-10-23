import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connection = useSelector((store) => store.connection);

  const getConnections = async () => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL + "/user/connections",
        { withCredentials: true }
      );
      console.log(res.data);
      dispatch(addConnection(res.data.data));
    } catch (error) {}
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (connection === null) return <h1>No connections available</h1>;
  if (connection.length === 0) return <h1>No connections found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-2xl">Friends</h1>
      {connection.map((conn) => {
        const { firstName, lastName, photoUrl, age, gender, about } = conn;
        return (
          <div className="mt-10 p-4 flex items-center  rounded-lg bg-base-300 w-1/2 mx-auto ">
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
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
