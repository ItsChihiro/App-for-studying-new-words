import React, { createContext, useEffect, useState } from 'react';
import Get from "../services/Get"

export const MyContext = createContext();


export function MyContextComponent({ children }) {
    const [dataServer, setDataServer] = useState(false);

    const value = { dataServer, setDataServer };

    async function getWordsServer() {
        const wordsServer = await Get.getWords();
        setDataServer(wordsServer);
    }

    //при первичной отрисовке подгружается список слов
    useEffect(() => {
        getWordsServer();
    }, []);

    if (!dataServer) {
        return <h1>Loading...</h1>;
    }
    return (
        <MyContext.Provider value={value} >
            {children}
        </MyContext.Provider>
    )
}