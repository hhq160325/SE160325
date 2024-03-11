import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { Delete, Edit, Add } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://65e51cbb3070132b3b258b9d.mockapi.io/api/studentManagement/studentManagement"
      )
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      axios
        .delete(
          `https://65e51cbb3070132b3b258b9d.mockapi.io/api/studentManagement/studentManagement/${id}`
        )
        .then(() => {
          const updatedStudents = students.filter(
            (student) => student.id !== id
          );
          setStudents(updatedStudents);
          alert("Student deleted successfully.");
        })
        .catch((error) => {
          console.error("Error deleting student:", error);
        });
    }
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell>{student.id}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>
              <IconButton component={Link} to={`/add`} aria-label="add">
                <Add />
              </IconButton>
              <IconButton
                component={Link}
                to={`/update/${student.id}`}
                aria-label="edit"
              >
                <Edit />
              </IconButton>
              <IconButton
                onClick={() => handleDelete(student.id)}
                aria-label="delete"
              >
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Dashboard;
