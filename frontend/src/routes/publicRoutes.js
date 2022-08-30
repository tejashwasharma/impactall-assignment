
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../screens/public/Login';
import Signup from '../screens/public/Signup';

const PublicRoutes = () => (
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
);

export default PublicRoutes;