import React from "react";
import { useState, useEffect } from "react";
import StudentCard from "../components/results/StudentCard";


const Results = () => {
    const [students, setStudents] = useState([]);
  
    useEffect(() => {
      fetch("/get-results")
        .then((response) => response.json())
        .then((response) => setStudents(response.students));
    }, []);

    console.log("students", students);
  return (
    <main className="results-body">
        {students.map((student) => {
            return (<StudentCard key={student.id} student={student}/>)
          })}
    </main>
  );
};

export default Results;
