import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import ProfileSetting from "../pages/ProfileSetting";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Redux from "../pages/Redux";
import PrivateRoute from '../routes/PrivateRoute'
import Dashboard from "../pages/Dashboard";
import Members from "../pages/Members";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<PrivateRoute />} >
                <Route path='/profile' element={<Profile />} />
                <Route path='/members' element={<Members />} />
                <Route path='/profile-setting' element={<ProfileSetting />} />
                <Route path='/page1' element={<Page1 />} />
                <Route path='/page2' element={<Page2 />} />
                <Route path='/redux' element={<Redux />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;