import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './pages/Authentication/AuthContext';
import ProtectedRoute from './pages/Authentication/ProtectedRoute';
import { useLocation } from 'react-router-dom';
import Login from './pages/Login';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import Home from './pages/Dashboard/Home';
import BuildingForm from './pages/Form/BuildingForm';
import OccupancyForm from './pages/Form/OccupancyForm';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Schedules from './pages/Schedules';
import 'preline/preline';
import { IStaticMethods } from 'preline/preline';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.HSStaticMethods.autoInit();
    setTimeout(() => setLoading(false), 1000);
  }, [pathname]);

  useEffect(() => {}, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/src/pages/login" element={<Login />} />
          <Route
            index
            element={
              <>
                <PageTitle title="LPMS Home" />
                <Home />
              </>
            }
          />
          <Route
            path="/schedules"
            element={
              <>
                <PageTitle title="LPMS Schedules" />
                <Schedules />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <PageTitle title="LPMS Profile" />
                <Profile />
              </>
            }
          />
          <Route
            path="/forms/buildingform"
            element={
              <>
                <PageTitle title="LPMS Building Forms" />
                <BuildingForm />
              </>
            }
          />
          <Route
            path="/forms/occupancyform"
            element={
              <>
                <PageTitle title="LPMS Occupancy Forms" />
                <OccupancyForm />
              </>
            }
          />
          <Route
            path="/tables"
            element={
              <>
                <PageTitle title="LPMS Tables" />
                <Tables />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="LPMS Settings" />
                <Settings />
              </>
            }
          />
          <Route
            path="/chart"
            element={
              <>
                <PageTitle title="LPMS Basic Chart" />
                <Chart />
              </>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <>
                <PageTitle title="LPMS Alerts" />
                <Alerts />
              </>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <>
                <PageTitle title="LPMS Buttons" />
                <Buttons />
              </>
            }
          />
          <Route
            path="/auth/signin"
            element={
              <>
                <PageTitle title="LPMS Signin" />
                <SignIn />
              </>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <>
                <PageTitle title="LPMS Signup" />
                <SignUp />
              </>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
