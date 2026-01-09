import React from 'react'

export default function Topic({name, isCompleted}) {
  return (
    <li className={isCompleted ? "topic-completed" : "topic-incomplete"}>
        {name} {isCompleted && '✔'}
    </li>
  );
}