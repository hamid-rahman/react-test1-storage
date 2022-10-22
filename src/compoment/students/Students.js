import React, { useEffect, useState } from 'react';
import Student from '../student/Student';

const Students = () => {
    const [students, setStudents] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())    
        .then(data => setStudents(data))
    },[])
    return (
        <div>
            <h1>Students</h1>
            {
                students.map(student => <Student key={student.id} student={student}></Student>)
            }
            
        </div>
    );
};

export default Students;