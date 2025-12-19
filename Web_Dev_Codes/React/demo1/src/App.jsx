import Student from "./Student";


// Below is first simple approach to call Student component multple times.
// function App() {
//   return (
//     <div style={{ display: "flex", gap: "20px" }}>
//       <Student name="Vaidik Patel" age={19} sem={6} image="https://tse1.mm.bing.net/th/id/OIP.zSjnJGFe_TxQyoSX48_Z6wHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" />
//       <Student name="Yug Sakariya" age={20} sem={6} image="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" />
//       <Student name="Raj Mehta" age={22} sem={6} image="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?w=2000" />
//     </div>
//   );
// }


// Below is second approach to call Student component multple times using map which is preferable as it is scalable.
function App() {
  const students = [
    { name: "Tom", age: 21, sem: 6, image: "https://tse1.mm.bing.net/th/id/OIP.zSjnJGFe_TxQyoSX48_Z6wHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Will", age: 22, sem: 5, image: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?w=2000" },
    { name: "Keanu", age: 23, sem: 7, image: "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" },
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {students.map((s, index) => (
        <Student
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