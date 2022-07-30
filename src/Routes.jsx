import { Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}