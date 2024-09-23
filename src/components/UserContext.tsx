import React, { createContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface UserContextProps {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const UserContext = createContext<UserContextProps>({
    users: [],
    setUsers: () => {},
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};
