import { Link, Routes, Route, useLocation } from "react-router-dom";

function Profile() {
  return <h3>Teacher Profile</h3>;
}

function Salary() {
  return <h3>Teacher Salary</h3>;
}

function DefaultStudent() {
  return <h3>Welcome to Teacher Dashboard</h3>;
}

function Teacher() {
    const location = useLocation();

    const pathParts = location.pathname.split("/").filter(Boolean);
    const formattedPath = pathParts
    .map(part => `"${part}"`)
    .join(", ");
  return (
    <>

      <h2>Teacher Page</h2>

      <div style={{ background: "lightgreen", padding: "10px" }}>
        <Link to="/teacher/profile" style={{ marginRight: "15px" }}>
          Profile
        </Link>
        <Link to="/teacher/salary">
          Salary
        </Link>
      </div>

        <p>
        <strong>Path:</strong> {"{" + formattedPath + "}"}
      </p>
      <Routes>
        <Route index element={<DefaultStudent />} />
        <Route path="profile" element={<Profile />} />
        <Route path="salary" element={<Salary />} />
      </Routes>
    </>
  );
}

export default Teacher;