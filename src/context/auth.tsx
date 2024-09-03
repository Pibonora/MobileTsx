import {createContext, useState} from "react"

interface PropsUser {
    signed: boolean;
    user: object | null;
}
const AuthContext = createContext<PropsUser>({} as PropsUser);

// cria provedor de contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);
    return (
        <AuthContext.Provider value={{signed: true, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;