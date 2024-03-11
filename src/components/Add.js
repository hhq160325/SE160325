import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    gender: "",
    dateOfBirth: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://65e51cbb3070132b3b258b9d.mockapi.io/api/studentManagement/studentManagement",
        formData
      )
      .then(() => {
        alert("Student added successfully.");
        return <Navigate to="/dashboard" />;
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <Button type="submit">Add Student</Button>
    </form>
  );
};

export default Add;
