import { Routes, Route } from "react-router-dom";
import Calender from "./Components/Calender";
import CompletedTask from "./Components/CompletedTask";
import Homepage from "./Components/Homepage";
import ToDoApps from "./Components/ToDoApps";
import Navbar from "../src/Components/Shared/Navbar";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import PrivateAuth from "./Components/Login/PrivateAuth";
import { ToastContainer } from "react-toastify";
import NotFound from "./Components/Shared/NotFound";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div className="bg-base text-text " >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={
          <PrivateAuth>
            <Homepage />
          </PrivateAuth>
        }></Route>
        <Route path="/to-do-task" element={
          <PrivateAuth>
            <ToDoApps />
          </PrivateAuth>
        }></Route>
        <Route path="/completed-task" element={
          <PrivateAuth>
            <CompletedTask />
          </PrivateAuth>}>
        </Route>
        <Route path="/calendar" element={<Calender />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
