import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateToAddTodos = () => {
    navigate("/add-todos");
  };
  return (
    <div className="py-24">
      <div>
        <h2 className="text-4xl text-center font-serif font-bold">
          Todos Lists
        </h2>
        <div className="flex justify-center">
          <button onClick={navigateToAddTodos} className="btn btn-default mt-5">
            <img
              className="w-14"
              src="https://i.ibb.co/2qR7DwV/addicon.png"
              alt=""
            />
            Add Todos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
