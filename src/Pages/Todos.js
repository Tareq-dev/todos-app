import React from "react";

const Todos = ({ todo }) => {
  const { name, description } = todo;

  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-5">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <div className="flex mx-6 px-6">
          <button className="btn btn-primary btn-sm w-24">complete</button>
          <button className="btn bg-red-500 btn-sm w-24 mx-6">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todos;
