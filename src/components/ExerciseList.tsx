import React from 'react';

const exercises = [
    { id: 1, name: 'Agachamento', description: '3 séries de 15 repetições' },
    { id: 2, name: 'Supino', description: '4 séries de 10 repetições' },
    { id: 3, name: 'Puxada na Barra', description: '3 séries de 12 repetições' },
];

const ExerciseList: React.FC = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-semibold mb-4">Lista de Exercícios</h2>
            <ul className="space-y-4">
                {exercises.map(exercise => (
                    <li key={exercise.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">{exercise.name}</h3>
                        <p className="text-gray-600">{exercise.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExerciseList;
