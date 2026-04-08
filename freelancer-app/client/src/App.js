import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import AllProjects from "./pages/AllProjects";
import NewProject from "./pages/NewProject";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/freelancer" element={<FreelancerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
