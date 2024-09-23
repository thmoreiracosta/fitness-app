import React, { useContext } from 'react';
import { UserContext } from '../components/UserContext';

const UserWorkout: React.FC = () => {
    const { users } = useContext(UserContext);

    return (
        <div>
            <h2>Lista de Workouts dos Usuários</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.name}>
                        <h3>{user.name}</h3>
                        <p>Treino A: {user.workouts.A.join(', ')}</p>
                        <p>Treino B: {user.workouts.B.join(', ')}</p>
                        <p>Treino C: {user.workouts.C.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserWorkout;
