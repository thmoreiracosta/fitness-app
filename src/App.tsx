import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import UserRegistration from './components/UserRegistration';
import CreateWorkout from './components/CreateWorkout';
import UserWorkout from './components/UserWorkout';
import { UserProvider } from './components/UserContext';
import CheckIn from './components/CheckIn';

const App: React.FC = () => {
    return (
        <UserProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<UserRegistration />} />
                    <Route path="/create-workout" element={<CreateWorkout />} />
                    <Route path="/user-workout" element={<UserWorkout />} />
                    <Route path="/checkin" element={<CheckIn />} />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;
