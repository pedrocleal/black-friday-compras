import { Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  )
}