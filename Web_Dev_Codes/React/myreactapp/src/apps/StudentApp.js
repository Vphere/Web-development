import React from 'react'
import Student from '../components/Student'
import './StudentApp.css'   

export const StudentApp = () => {
  const students = [
    {name: "Vaidik", sem: 6, age: 20},
    {name: "Pushya", sem: 5, age: 15},
    {name: "Prince", sem: 4, age: 10}
  ];

  return (
    <>
      <h2>Hello From StudentApp</h2>

      <div className="student-container">
        {students.map(s => (
            <Student name={s.name} semester={s.sem} age={s.age} />
        ))}
      </div>
    </>
  )
}
