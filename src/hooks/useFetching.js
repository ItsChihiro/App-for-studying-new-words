import { useState } from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...props) => {
        try {
            setIsLoading(true)
            await callback(...props)
        } catch (e) {
            setError(e.message)
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}