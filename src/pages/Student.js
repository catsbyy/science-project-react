import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Student = () => {
    const {id} = useParams();
    const [student, setStudent] = useState([]);
    const [techAndTools, setTechAndTools] = useState([]);

    useEffect(() => {
        fetch("/get-student-details")
          .then((response) => response.json())
          .then((response) => setStudent(response.student));
          fetch("/server")
        .then((response) => response.json())
        .then((response) => setTechAndTools(response.techAndTools));
      }, []);

    console.log(student);

    
    return ( 
        <main>
            <p>{id}</p>
            {id && (
                <button></button>
            )}
        </main>
     );
}
 
export default Student;