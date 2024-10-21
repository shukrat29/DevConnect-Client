import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div className="card bg-base-100 w-80 h-150 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photoUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions my-4">
          <button className="btn btn-error text-white">Remove</button>
          <button className="btn btn-primary">Add Friend</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
