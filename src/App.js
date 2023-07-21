import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo.js";
import {
  addToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
} from "./utils/HandleApi.js";

export default function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const handleAddToDo = () => {
    addToDo(text, setText, setToDo).catch((error) => {
      console.error("Error while adding ToDo:", error);
      // Handle errors, show error messages, etc.
    });
  };

  const handleUpdateToDo = () => {
    updateToDo(toDoId, text, setToDo, setText, setIsUpdating).catch((error) => {
      console.error("Error while updating ToDo:", error);
      // Handle errors, show error messages, etc.
    });
  };

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>To Do App</h1>

        <div className="top">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add ToDos..."
          />

          <div
            className="add"
            onClick={isUpdating ? handleUpdateToDo : handleAddToDo}
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              DeleteToDo={() => deleteToDo(item._id, setToDo)} // Ensure the prop name is DeleteToDo
            />
          ))}
        </div>
      </div>
    </div>
  );
}
