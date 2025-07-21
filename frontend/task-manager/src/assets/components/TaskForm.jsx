import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const TaskForm = ({ fetchtask, edittask, setEdittask }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  //prefill when editing

  useEffect(() => {
    if (edittask) {
      settitle(edittask.title);
      setdescription(edittask.description);
    }
  }, [edittask]);

  const handelsubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    try {
      if (edittask) {
        //update task
        await axios.put("http://localhost:5000/task/update", {
            id: edittask._id,
          title,
          description,
        });
        setEdittask(null);
        alert("Task updated successfully");
      } else {
        //create task
        await axios.post("http://localhost:5000/task/create", {
          title,
          description,
        });
      }
      settitle("");
      setdescription("");
      fetchtask();
      alert("Task submitted successfully");
    } catch (err) {
      console.error("Error submitting task:", err);
      alert("Error submitting task: " + err.message);
    }
  };

  const handelcancel = () => {
        setEdittask(null);
        settitle("");
        setdescription("");
  }
  return (
    <div>
      <form onSubmit={handelsubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <button type="submit">{edittask ? "update task" : "add task"}</button>

        {edittask && (
            <button type="button" onClick={handelcancel} >cancel</button>
        )}
      </form>
    </div>
  );
};

export default TaskForm;
