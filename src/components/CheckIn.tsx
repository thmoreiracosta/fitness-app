import React, { useState } from 'react';

const exercises = [
    { id: 1, name: 'Agachamento', description: '3 séries de 15 repetições' },
    { id: 2, name: 'Supino', description: '4 séries de 10 repetições' },
    { id: 3, name: 'Puxada na Barra', description: '3 séries de 12 repetições' },
];

const CheckIn: React.FC = () => {
    const [name, setName] = useState('');
    const [checkInTime, setCheckInTime] = useState('');
    const [showExercises, setShowExercises] = useState(false);

    const handleCheckIn = () => {
        const currentTime = new Date().toLocaleTimeString();
        setCheckInTime(currentTime);
        setShowExercises(true);
        setName('');
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Bate Ponto</h2>
            <input
                type="text"
                placeholder="Seu Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
            />
            <button
                onClick={handleCheckIn}
                className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-500"
            >
                Registrar Presença
            </button>

            {showExercises && (
                <div className="mt-6 text-center">
                    <p className="text-lg">Bem-vindo(a), {name}! Você entrou às {checkInTime}.</p>
                    <h3 className="text-xl font-semibold mt-4">Exercícios para seu treino:</h3>
                    <ul className="mt-2 space-y-2">
                        {exercises.map(exercise => (
                            <li key={exercise.id} className="bg-white p-4 rounded-lg shadow-md">
                                <h4 className="font-bold">{exercise.name}</h4>
                                <p className="text-gray-600">{exercise.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CheckIn;
