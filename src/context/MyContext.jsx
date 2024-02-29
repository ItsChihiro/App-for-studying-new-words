import React, { createContext, useEffect, useState } from 'react';
import Get from "../services/Api"
import Loader from '../components/UI/Loader/Loader';
import '../components/UI/Loader/Loader.scss'
import { useFetching } from '../hooks/useFetching'

export const MyContext = createContext();

export function MyContextComponent({ children }) {
    const [getWordsServer, isLoading, error] = useFetching(async () => {
        const wordsServer = await Get.getWords();
        setDataServer(wordsServer);
    })
    const [dataServer, setDataServer] = useState(false);

    const value = { dataServer, setDataServer, getWordsServer };


    //при первичной отрисовке подгружается список слов
    useEffect(() => {
        getWordsServer();
    }, []);

    if (error) {
        return <h1>Error happened "{error}"</h1>
    } else if (!dataServer | isLoading) {
        return <div className='loader-wrap'><Loader /></div>;
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}