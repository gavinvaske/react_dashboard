import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import LoginPortal from '../LoginPortal/LoginPortal';

export default function App(props) {
    return (
        <Routes>
            <Route path='' element={<Dashboard />}></Route>
            <Route path='/login' element={<LoginPortal />}></Route>
        </Routes>
    );
}