import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import ExploreBikes from './pages/User/ExploreBikes';
import Rent from './pages/User/Rent';
import './App.css';
import './Admin.css';
import CheckOut from './pages/User/CheckOut';
import Events from './pages/User/Events';
import EventInfo from './pages/User/EventsInfo';
import About from './pages/User/About';
import Contact from './pages/User/Contact';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/SignUp';

import Layout from "./pages/Admin/theme/Layout";
import UserManagement from "./pages/Admin/BikeManagement/UserManagement";
// import AddUser from "./pages/Admin/UserManagement/AddUser";
// import Faq from "./pages/Faq";
// import Contact from "./pages/Contact";
// import UserDetail from "./pages/Admin/UserManagement/UserDetail";
// import Login from "./pages/Auth/Login";
// import PrivateRoute from "./routes/PrivateRoute";
// import UserDelete from "./pages/Admin/UserManagement/UserDelete";

// Bike Management
import AddBike from "./pages/Admin/BikeManagement/AddBike";
import EditBike from "./pages/Admin/BikeManagement/EditBike";
import ViewBikes from "./pages/Admin/BikeManagement/ViewBikes";
import AvailableBikes from "./pages/Admin/BikeManagement/AvailableBikes";
import RentedBikes from "./pages/Admin/BikeManagement/RentedBikes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/explore-bikes" element={<ExploreBikes />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/eventsinfo" element={<EventInfo />} /> 

        {/* Admin Layout with Nested Routes */}
        <Route path="/layout" element={<Layout />}>
          {/* User Management Routes */}
          <Route path="user-management" element={<UserManagement />} />
          {/* Uncomment these when you need them */}
          {/* <Route path="user-management/add" element={<AddUser />} />
          <Route path="user-management/edit/:userId" element={<AddUser />} />
          <Route path="user-management/detail/:userId" element={<UserDetail />} />
          <Route path="user-management/delete/:userId" element={<UserDelete />} /> */}


  {/* Nested routes for Admin pages */}
  <Route path="admin/bike-management/add" element={<AddBike />} />
  <Route path="admin/bike-management/edit/:id" element={<EditBike />} />
  <Route path="admin/bike-management/view" element={<ViewBikes />} />
  <Route path="admin/bike-management/available" element={<AvailableBikes />} />
  <Route path="admin/rented-bikes" element={<RentedBikes />} />
</Route>


      </Routes>
    </Router>
  );
}

export default App;
