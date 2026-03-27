import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Student from "./pages/Student"
import Teacher from "./pages/Teacher"
import store from "./Lab-11/store/store";
import UserList from "./Lab-11/UserList";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <MainNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/student/*" element={<Student/>}/>
        <Route path="/teacher/*" element={<Teacher/>}/>
      </Routes>
      <Provider store={store}>
      <div>
        <h1>User Information App</h1>
        <UserList/>
      </div>
    </Provider>
    </>
  )
}

export default App