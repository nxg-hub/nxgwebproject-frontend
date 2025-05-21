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
import DetailedCard from "./Admin/Dashboard/routes/Registered/Components/DetailedCard";
import PartialUsers from "./Admin/Dashboard/routes/PartialUsers/PartialUsers";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ScholarshipForm from "./pages/Scholarship";
import ScholarshipSuccessful from "./pages/Scholarship/components/ScholarshipSuccessful";
import Scholarship from "./Admin/Dashboard/routes/Scholarship/Scholarship";
import ScholarshipDetailCard from "./Admin/Dashboard/routes/Scholarship/components/ScholarshipDetailCard";
import TrainingInfo from "./Admin/Dashboard/routes/TrainingInformation/TrainingInfo";
import Ignite from "./pages/Ignite/Index";

function App() {
  return (
    <div className="relative md:static overflow-hidden">
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/training" element={<Training />} />
          <Route path="/form" element={<RegisterForm />} />
          <Route path="/scholarship" element={<ScholarshipForm />} />
          <Route path="/ignite" element={<Ignite/>}/>
          <Route
            path="/applicationSuccessful"
            element={<SuccessfulApplication />}
          />
          <Route
            path="/scholarshipSuccessful"
            element={<ScholarshipSuccessful />}
          />
        </Routes>
        <Routes>
          {/* Admin section */}
          <Route path="/admin" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/admin" element={<Dashboard />}>
              <Route path="/admin/dashboard" element={<Registered />} />
              <Route path="/admin/partialUsers" element={<PartialUsers />} />
              <Route path="/admin/scholarship" element={<Scholarship />} />
              <Route
                path="/admin/registereduser/:id"
                element={<DetailedCard />}
              />
              <Route
                path="/admin/scholarshipuser/:id"
                element={<ScholarshipDetailCard />}
              />
              <Route
                path="/admin/trainng-information"
                element={<TrainingInfo />}
              />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
