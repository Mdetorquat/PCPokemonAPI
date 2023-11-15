import React, { ReactNode, createContext, useState } from 'react'

interface User {
    token: string;
    firstName: string;
    lastName: string;
    login: string;
    birthDate: string;
    password: string;
    loggedIn: boolean;
}

interface UserContext {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<UserContext>({} as UserContext);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User>({
        token:'',
        firstName:'',
        lastName:'',
        login:'',
        birthDate:'',
        password:'',
        loggedIn: false,
    });

    const value: UserContext = {
        user,
        setUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider