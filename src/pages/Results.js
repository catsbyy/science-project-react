import React from "react";
import { useState, useEffect } from "react";
import StudentCard from "../components/results/StudentCard";


const Results = () => {
    const [students, setStudents] = useState([]);
    const [techAndTools, setTechAndTools] = useState([]);
  
    useEffect(() => {
      fetch("/get-results")
        .then((response) => response.json())
        .then((response) => setStudents(response.students));
        fetch("/server")
      .then((response) => response.json())
      .then((response) => setTechAndTools(response.techAndTools));
    }, []);

  return (
    
    <main className="results-body">
      <h2 className="landing-title">Рекомендовані кандидати</h2>
      <ul className="result-students">
      {students.map((student) => {
            return (<StudentCard key={student.id} student={student} techAndToolsData={techAndTools}/>)
          })}
      </ul>
        
    </main>
  );
};

export default Results;
