import StudentClass from "./StudentClass";

// Below is first simple approach to call StudentClass Class multiple times.
// function App1() {
//   return (
//     <div style={{ display: "flex", gap: "20px" }}>
//       <StudentClass
//         name="Tom"
//         age={21}
//         sem={6}
//         image="https://via.placeholder.com/100"
//       />
//       <StudentClass
//         name="Will"
//         age={22}
//         sem={5}
//         image="https://via.placeholder.com/100"
//       />
//       <StudentClass
//         name="Keanu"
//         age={23}
//         sem={7}
//         image="https://via.placeholder.com/100"
//       />
//     </div>
//   );
// }


// Below is second approach to call StudentClass Class multiple times using map which is preferable as it is scalable.
function App() {
  const students = [
    { name: "Tom", age: 21, sem: 6, image: "https://via.placeholder.com/20" },
    { name: "Will", age: 22, sem: 5, image: "https://via.placeholder.com/100" },
    { name: "Keanu", age: 23, sem: 7, image: "https://via.placeholder.com/100" },
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {students.map((s, index) => (
        <StudentClass
          key={index}
          name={s.name}
          age={s.age}
          sem={s.sem}
          image={s.image}
        />
      ))}
    </div>
  );
}

export default App;