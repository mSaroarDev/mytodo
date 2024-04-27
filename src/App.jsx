import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* login outlet */}

          <Route
            path="/login"
            element={
              <LoginOutlet>
                <Login />
              </LoginOutlet>
            }
          />
          <Route
            path="/register"
            element={
              <LoginOutlet>
                <Register />
              </LoginOutlet>
            }
          />

          {/* protected outlet */}

          <Route
            path="/user/dashboard"
            element={
              <ProtectedOutlet>
                <Dashboard />
              </ProtectedOutlet>
            }
          />
          <Route
            path="/user/task-group"
            element={
              <ProtectedOutlet>
                <TaskGroup />
              </ProtectedOutlet>
            }
          />
          <Route
            path="/user/task-group"
            element={
              <ProtectedOutlet>
                <TaskGroup />
              </ProtectedOutlet>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
