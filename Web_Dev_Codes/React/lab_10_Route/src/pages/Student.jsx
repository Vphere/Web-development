import { Link, Routes, Route, useLocation } from "react-router-dom";

function Profile() {
  return <h3>Student Profile</h3>;
}

function Marks() {
  return <h3>Student Marks</h3>;
}

function DefaultStudent() {
  return <h3>Welcome to Student Dashboard</h3>;
}

function Student() {

  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  // Add double quotes to each part
  const formattedPath = pathParts.map(part => `"${part}"`).join(", ");

  return (
    <>
      <h2>Student Page</h2>

      <div style={{ background: "lightblue", padding: "10px" }}>
        <Link to="/student/profile" style={{ marginRight: "15px" }}>Profile</Link>
        <Link to="/student/marks">Marks</Link>
      </div>

      <p> <strong>Path:</strong> {"{" + formattedPath + "}"} </p>
      
      <Routes>
        <Route index element={<DefaultStudent />} />
        <Route path="profile" element={<Profile />} />
        <Route path="marks" element={<Marks />} />
      </Routes>
    </>
  );
}

export default Student;