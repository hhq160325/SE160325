import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    gender: "",
    dateOfBirth: "",
    feedback: "",
  });

  useEffect(() => {
    axios
      .get(`api/students/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://65e51cbb3070132b3b258b9d.mockapi.io/api/studentManagement/studentManagement/${id}`,
        formData
      )
      .then(() => {
        alert("Student updated successfully.");
        return <Navigate to="/dashboard" />;
      })
      .catch((error) => {
        console.error("Error updating student:", error);
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
      {/* Add other fields with validation */}
      <Button type="submit">Update Student</Button>
    </form>
  );
};

export default Update;
