import React, { useState, useContext } from 'react';
import { WorkoutType } from '../types';
import { UserContext } from '../components/UserContext';

const CreateWorkout: React.FC = () => {
    const [workoutType, setWorkoutType] = useState<WorkoutType>('A');
    const [exercise, setExercise] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [sets, setSets] = useState<number>(1);
    const [reps, setReps] = useState<number>(1);
    const { users, setUsers } = useContext(UserContext);

    const handleAddExercise = () => {
        const updatedUsers = users.map(u => {
            if (u.name === user) {
                return {
                    ...u,
                    workouts: {
                        ...u.workouts,
                        [workoutType]: [
                            ...u.workouts[workoutType],
                            { exercise, sets, reps }
                        ]
                    }
                };
            }
            return u;
        });

        setUsers(updatedUsers);
        setExercise('');
        setSets(1);
        setReps(1);
        alert(`Exercício "${exercise}" adicionado ao Treino ${workoutType} de ${user}.`);
    };

    const handleSaveAllWorkouts = () => {
        const updatedUsers = users.map(u => {
            if (u.name === user) {
                return {
                    ...u,
                    workouts: {
                        ...u.workouts,
                    }
                };
            }
            return u;
        });

        setUsers(updatedUsers);
        alert(`Ficha de treino salva para ${user}.`);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Criar Ficha de Treino</h2>
            <input
                type="text"
                placeholder="Nome do Usuário"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
            />
            <select
                value={workoutType}
                onChange={(e) => setWorkoutType(e.target.value as WorkoutType)}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
            >
                <option value="A">Treino A</option>
                <option value="B">Treino B</option>
                <option value="C">Treino C</option>
            </select>
            <input
                type="text"
                placeholder="Nome do Exercício"
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
            />
            <div className="flex mb-4">
                <div className="mr-4">
                    <label className="block mb-1">Séries:</label>
                    <input
                        type="number"
                        min="1"
                        value={sets}
                        onChange={(e) => setSets(Number(e.target.value))}
                        className="border border-gray-300 rounded-lg p-2 w-20"
                    />
                </div>
                <div>
                    <label className="block mb-1">Repetições:</label>
                    <input
                        type="number"
                        min="1"
                        value={reps}
                        onChange={(e) => setReps(Number(e.target.value))}
                        className="border border-gray-300 rounded-lg p-2 w-20"
                    />
                </div>
            </div>
            <button
                onClick={handleAddExercise}
                className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-500 mb-4"
            >
                Adicionar Exercício
            </button>
            <button
                onClick={handleSaveAllWorkouts}
                className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-500"
            >
                Salvar Ficha de Treino
            </button>
        </div>
    );
};

export default CreateWorkout;
