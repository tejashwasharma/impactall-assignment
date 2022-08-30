
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Profile from '../screens/auth/Profile';
import Chapters from '../screens/auth/Chapters';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route exact path="/chapters" element={<Chapters />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AuthRoutes;
