import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ id, text, updateMode, DeleteToDo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete
          className="icon"
          onClick={() => DeleteToDo(id)} // Pass the 'id' to the DeleteToDo function
        />
      </div>
    </div>
  );
};

export default ToDo;
