import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Academia Fitness</h1>
                <nav className="space-x-4">
                    <Link to="/" className="text-white hover:text-blue-300">Login</Link>
                    <Link to="/register" className="text-white hover:text-blue-300">Cadastro</Link>
                    <Link to="/checkin" className="text-white hover:text-blue-300">CheckIn</Link>
                    <Link to="/create-workout" className="text-white hover:text-blue-300">Criar Treino</Link>
                    <Link to="/user-workout" className="text-white hover:text-blue-300">Meus Treinos</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
