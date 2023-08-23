import { createContext, useContext, useState } from "react";

// 1 . Create a context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


//2 . Share the context with some components
export default function AuthProvider({ children }) {
    // 3 . put the state inside a context
    const [number, setNumber] = useState(12)
    const [isAuthenticated, setIsAUthenticated] = useState(false);
    const [username, setUsername] = useState('haji');
    const [password, setPassword] = useState('boss');
    // const valuesToBeShare = { number, isAuthenticated, setIsAUthenticated };

    //setInterval(() => setNumber(number + 1), 10000)
    function getUsername() {
        return username;
    }

    function login(username, password) {
        if (username === "haji" && password === "boss") {
            setUsername('haji');
            setIsAUthenticated(true);
            return true;
        } else if (username === "satu" && password === "boss") {
            setIsAUthenticated(true);
            setUsername('satu');
            return true;
        } else {
            setIsAUthenticated(false);
            return false;
        }
    }

    function isUserAuthenticated() {
        return isAuthenticated;
    }
    function logout() {
        setIsAUthenticated(false);

    }


    return (
        <AuthContext.Provider value={{ logout, isUserAuthenticated, username, password, setUsername, setPassword, login, getUsername }}>
            {children}
        </AuthContext.Provider>
    );

}