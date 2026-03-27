import {Link} from "react-router-dom";

function MainNavbar(){
    return(
        <div style={{ background: "#222", padding: "10px"}}>
            <Link to="/" style={{color: "white", marginRight: "15px"}}>Home</Link>
            <Link to="/about" style={{color: "white", marginRight: "15px"}}>About</Link>
            <Link to="/student" style={{ color: "white", marginRight: "15px" }}>Student</Link>
            <Link to="/teacher" style={{ color: "white" }}>Teacher</Link>
        </div>
    );
}

export default MainNavbar;