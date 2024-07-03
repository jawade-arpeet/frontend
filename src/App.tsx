import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { AuthLayout, Login, SignUp } from "./pages/auth";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<AuthLayout />}></Route>
      <Route path="/signUp" element={<AuthLayout />}></Route>
    </Routes>
  );
}
