import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegEye, FaPen, FaTrash } from "react-icons/fa";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto my-12 p-6 min-h-screen">
      <div className="w-11/12 md:w-4/5 mx-auto my-12">
        <Link to={"/"} className="btn">
          Back To Home
        </Link>
      </div>
      <div
        key={coffee._id}
        className="flex flex-col items-center gap-5 shadow-xl p-4 rounded-xl my-6"
      >
        <figure className="">
          <img src={coffee.image} alt="Coffee Image" className="rounded-xl" />
        </figure>
        <div className="items-start text-start">
          <h3 className="text-xl font-medium">
            Name : <span className="text-2xl font-bold">{coffee.name}</span>
          </h3>
          <h3 className="text-xl font-medium">
            Chef : <span className="text-2xl font-bold">{coffee.chef}</span>
          </h3>
          <h3 className="text-xl font-medium">
            Price :<span className="text-2xl font-bold">{coffee.price}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
