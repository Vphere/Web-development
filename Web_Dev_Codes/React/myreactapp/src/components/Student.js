import React from 'react'
import './Student.css'

const Student = (props) => {
  return (
    <div className="student-card">
      <p>Name:{props.name}</p>
      <p>Semester: {props.semester}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

export default Student
