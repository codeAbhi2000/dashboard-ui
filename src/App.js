import { Route,  Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard'
import UserDash from "./components/UserDash";
import Uploads from "./components/Uploads";
import Settings from "./components/Settings";
import Calender from "./components/Calender";
import Schedule from "./components/Schedule";
import Notification from "./components/Notification";
import Invoice from "./components/Invoice";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login/>} path="/" />
        <Route element={<Dashboard/>} path="/dashboard" >
          <Route element={<UserDash/>} path="udash"/>
          <Route element={<Uploads/>} path="uploads"/>
          <Route element={<Settings/>} path="settings"/>
          <Route element={<Invoice/>} path="invoice"/>
          <Route element={<Calender/>} path="calender"/>
          <Route element={<Schedule/>} path="schedule"/>
          <Route element={<Notification/>} path="notification"/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
