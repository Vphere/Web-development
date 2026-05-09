import React from 'react'

export default function SearchType({value, onChange}) {
  return (
    <>
        <select value={value} onChange={onChange}>
            <option value="">Select Type</option>
            <option value="name">name</option>
            <option value="email">email</option>
        </select>
    </>
  )
}