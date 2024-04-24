import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TaskGroup from "./pages/TaskGroups";
import Task from "./pages/Task";
import ProfilePage from "./pages/Profile";
import ProtectedOutlet from "./components/ProtectedOutlet";
import LoginOutlet from "./components/LoginOutlet";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* login outlet */}
        <Route path="/*" element={<LoginOutlet />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* protected outlet */}
        <Route path="/user/*" element={<ProtectedOutlet />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="task-group" element={<TaskGroup />} />
          <Route path="task-group/:folder_id" element={<Task />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
