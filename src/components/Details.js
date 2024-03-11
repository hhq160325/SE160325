import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

const Detail = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://65e51cbb3070132b3b258b9d.mockapi.io/api/studentManagement/studentManagement/${id}`
      )
      .then((response) => {
        setStudent(response.data);
        console.log(response.data.id);
      })
      .catch((error) => {
        console.error("Error fetching student detail:", error);
      });
  }, [id]);

  return (
    <div>
      {student && (
        <Card>
          <CardContent>
            <Typography variant="h5">{student.name}</Typography>
            <Typography>ID: {student.id}</Typography>
            <Typography>
              Date of Birth:{" "}
              {new Date(student.dateOfBirth).toLocaleDateString()}
            </Typography>
            <Typography>Gender: {student.gender}</Typography>
            <Typography>Class: {student.class}</Typography>
            <img
              src={student.image}
              alt={student.name}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
            <Typography>Feedback: {student.feedback}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Detail;
