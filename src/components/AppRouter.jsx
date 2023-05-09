import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Crew from "../pages/Crew";
import Destination from "../pages/Destination";
import Technology from "../pages/Technology";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/crew" element={<Crew />}></Route>
      <Route path="/destination" element={<Destination />}></Route>
      <Route path="/technology" element={<Technology />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}
