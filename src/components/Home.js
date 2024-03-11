import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, Typography, Button } from "@mui/material";

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://65e51cbb3070132b3b258b9d.mockapi.io/api/studentManagement/studentManagement"
      )
      .then((response) => {
        const sortedStudents = response.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setStudents(sortedStudents);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <div>
      {students.map((student) => (
        <Card key={student.id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5">{student.name}</Typography>
            <Typography>ID: {student.id}</Typography>
            <Typography>Date of Birth: {student.dateOfBirth}</Typography>
            <Typography>Gender: {student.gender}</Typography>
            <Typography>Class: {student.class}</Typography>
            <img
              src={student.image}
              alt={student.name}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
            <Button
              component={Link}
              to={`/detail/${student.id}`}
              variant="contained"
            >
              Detail
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;
