import React, { useState } from "react";
import Todos from "./Todos";

const AddTodos = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (event) => {
    event.preventDefault();
    const name = event.target.task_name.value;
    const description = event.target.task_description.value;
    const data = {
      name: name,
      description: description,
    };
    //post to backend

    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newTodos = [...todos, data];
        console.log(newTodos);
        setTodos(newTodos);
      });
    console.log(data);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
      <div>
        <h2 className="text-2xl text-center mt-14">Add Your Todos</h2>
        <form className="flex justify-center" onSubmit={addTodos}>
          <div className="mt-6">
            <label className="">Tasks Name</label>
            <input
              required
              type="text"
              name="task_name"
              placeholder="Type here"
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <label className="mt-5 block">Tasks description</label>
            <textarea
              required
              name="task_description"
              class="textarea textarea-info block w-full max-w-xs"
              placeholder="Description"
            ></textarea>
            <input
              className="btn btn-outline btn-info mt-5 block"
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </div>
      <div className="bg-amber-200 h-screen sm:p-3">
        {todos.map((todo) => (
          <Todos todo={todo} key={todo._id}></Todos>
        ))}
      </div>
    </div>
  );
};

export default AddTodos;
