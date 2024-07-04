import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { AuthLayout } from "./pages/auth";
import { PostJob } from "./pages/postJob";
import { JobPage } from "./pages/jobpage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<AuthLayout />}></Route>
      <Route path="/signUp" element={<AuthLayout />}></Route>
      <Route path="/post-job" element={<PostJob />}></Route>
      <Route path="/:id" element={<JobPage />}></Route>
    </Routes>
  );
}
