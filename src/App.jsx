import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Training from "./pages/Training";
import SuccessfulApplication from "./pages/Form/components/SuccessfulApplication";
import RegisterForm from "./pages/Form";
import Login from "./Admin/Login/Index";
import Registered from "./Admin/Dashboard/routes/Registered/Registered";
import Dashboard from "./Admin/Dashboard/Dashboard";
import Setting from "./Admin/Dashboard/routes/Setting/Setting";
import DetailedCard from "./Admin/Dashboard/routes/Registered/Components/DetailedCard";
import PartialUsers from "./Admin/Dashboard/routes/PartialUsers/PartialUsers";

function App() {
  return (
    <div className="relative md:static overflow-hidden">
      {/* <Header /> */}
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/training" element={<Training />} />
          <Route path="/form" element={<RegisterForm />} />
          <Route
            path="/applicationSuccessful"
            element={<SuccessfulApplication />}
          />
        </Routes>
        <Routes>
          {/* Admin section */}
          <Route path="/admin" element={<Login />} />
          <Route exact path="/admin" element={<Dashboard />}>
            <Route path="/admin/dashboard" element={<Registered />} />
            <Route path="/admin/partialUsers" element={<PartialUsers />} />
            <Route
              path="/admin/registereduser/:id"
              element={<DetailedCard />}
            />
            <Route path="/admin/settings" element={<Setting />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
