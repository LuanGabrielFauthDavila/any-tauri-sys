import React, { 
    useState, 
    useEffect, 
    createContext, 
    ReactNode,
    useContext
} from "react";


type AuthContextData = {
    token: boolean;
    setToken: React.Dispatch<React.SetStateAction<boolean>>; 
    login: any;
    logout: any;
}

interface AuthProviderProps {
    children: ReactNode;
}
interface LoginProps {
    email: string;
    password: string;
}

const AuthContext = createContext({} as AuthContextData)


export function AuthProvider({ children }: AuthProviderProps) {
    const [token, setToken] = useState<boolean>(false);

    async function login(loginData: LoginProps) {
        if (loginData.email == 'suporte@deltasistemas.net' && loginData.password == 'De!ta2017') {
            setToken(true)
        }
    }
    
    async function logout() {
        setToken(false)
    }

    return (<>
        <AuthContext.Provider value={{
            token,
            setToken,
            login,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    </>)
}

export const useAuth = () => useContext(AuthContext);