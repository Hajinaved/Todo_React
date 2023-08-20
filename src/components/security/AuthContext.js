import { createContext, useState } from "react";

// 1 . Create a context
export const AuthContext = createContext();




//2 . Share the context with some components
export default function AuthProvider({ children }) {
    // 3 . put the state inside a context
    const [number, setNumber] = useState(12)

    return (
        <AuthContext.Provider value={{ number }}>
            {children}
        </AuthContext.Provider>
    );

}