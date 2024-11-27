import { createContext, useState } from 'react';

const GlobalContext = createContext();

export function GlobalContext({ children }) {
    const [posts, setPosts] = useState([]);

    const value = {
        posts,
        setPosts
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;
