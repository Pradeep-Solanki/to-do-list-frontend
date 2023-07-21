import axios from "axios";

const baseUrl = "https://to-do-list-e8pg.onrender.com"; // Corrected 'localhost' spelling and added '/api' endpoint
const getAllToDo = (setToDo) => {
  axios.get(`${baseUrl}/`).then(({ data }) => {
    // Added the '/' endpoint to fetch the todos
    console.log("data --->", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  return axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      // Added the '/save' endpoint for saving todos
      console.log(data);
      getAllToDo(setToDo); // Fetch all todos after adding a new one
      setText(""); // Moved this line after fetching todos
    })
    .catch((error) => {
      console.error("Error while adding ToDo:", error);
      // Handle errors, show error messages, etc.
    });
};
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  return axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.error("Error while updating ToDo:", err);
      // Handle errors, show error messages, etc.
    });
};

const deleteToDo = (toDoId, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id: toDoId })
    .then((data) => {
      getAllToDo(setToDo);
    })
    .catch((error) => {
      console.error("Error while adding ToDo:", error);
      // Handle errors, show error messages, etc.
    });
};
export { getAllToDo, addToDo, updateToDo, deleteToDo };
