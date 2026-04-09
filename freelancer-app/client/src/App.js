import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import AllProjects from "./pages/AllProjects";
import NewProject from "./pages/NewProject";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Chat from "./pages/Chat";

// ✅ NEW PAGES
import Dashboard from "./pages/Dashboard";
import MyProjects from "./pages/MyProjects";
import Applications from "./pages/Applications";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Existing */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/freelancer" element={<FreelancerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/chat" element={<Chat />} />

        {/* ✅ NEW */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/applications" element={<Applications />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
