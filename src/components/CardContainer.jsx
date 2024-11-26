import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CardContainer = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount > 0){
            const remaining = coffees.filter(coffee=>coffee._id !== id)
            setCoffees(remaining)
            Swal.fire({
              title: "Deleted!",
              text: "Your Coffee has been deleted.",
              icon: "success"
            });
          }else{
            Swal.fire({
              title: "Failed!",
              text: "Failed To Delete",
              icon: "error"
            });
          }
        })
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto my-12">
      {/* coffee-info-container */}
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xs text-secondary">--- Sip & Savor ---</p>
          <h3 className="text-4xl font-bold text-primary">
            Our Popular Products
          </h3>
          <Link
            to={"AddCoffee"}
            className="btn bg-highlight text-white hover:text-primary"
          >
            Add Coffee
          </Link>
        </div>
      </div>
      {/* coffee-card-container */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5">
        {coffees.map((coffee) => (
          <div
            key={coffee._id}
            className="flex flex-col md:flex-row items-center gap-5 shadow-xl p-4 rounded-xl my-6"
          >
            <figure className="">
              <img
                src={coffee.image}
                alt="Coffee Image"
                className="rounded-xl"
              />
            </figure>
            <div className="items-start text-start">
              <h3 className="text-xl font-medium">
                Name : <span className="text-2xl font-bold">{coffee.name}</span>
              </h3>
              <h3 className="text-xl font-medium">
                Chef : <span className="text-2xl font-bold">{coffee.chef}</span>
              </h3>
              <h3 className="text-xl font-medium">
                Price :
                <span className="text-2xl font-bold">{coffee.price}</span>
              </h3>
            </div>
            <div className="flex flex-row md:flex-col items-center gap-3">
              <Link to={`CoffeeDetails/${coffee._id}`} className="btn bg-highlight">
                <FaRegEye />
              </Link>
              <Link
                to={`CoffeeEdit/${coffee._id}`}
                className="btn bg-black text-highlight hover:text-black"
              >
                <FaPen />
              </Link>
              <button
                onClick={() => handleDelete(coffee._id)}
                className="btn bg-orange-400 hover:text-orange-400"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
