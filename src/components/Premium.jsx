import React from "react";

const Premium = () => {
  return (
    <div>
      <div className="flex w-full flex-col lg:flex-row p-5">
        <div className="card bg-base-300 rounded-box grid h-80 flex-grow text-center">
          <h1 className="text-2xl text-center mt-4">Silver Membership</h1>
          <ul>
            <li className="items-center">-Chat with other</li>
            <li className="items-center">-100 connection requests per day</li>
            <li className="items-center">-Blue Tick</li>
            <li className="items-center">-3 Months</li>
          </ul>
          <button className="btn btn-secondary">Buy Silver</button>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 flex-grow text-center">
          <h1 className="text-2xl text-center mt-4">Gold Membership</h1>
          <ul>
            <li className="items-center">-Chat with other</li>
            <li className="items-center">-Chat with other</li>
            <li className="items-center">-Chat with other</li>
            <li className="items-center">-Chat with other</li>
          </ul>
          <button className="btn btn-primary">Buy Gold</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
