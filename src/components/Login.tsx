import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';


const Login: React.FC = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { users } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = users.find(u => u.name === name);
        if (user) {
            if (user.password === password) {
                navigate('/user-workout');
            } else {
                setErrorMessage('Senha incorreta.');
            }
        } else {
            setErrorMessage('Usuário não possui cadastro.');
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
            <input
                type="text"
                placeholder="Nome do Usuário"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
            />
            <button
                onClick={handleLogin}
                className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-500"
            >
                Entrar
            </button>
        </div>
    );
};

export default Login;
