import { useState, useEffect } from "react";
import { ImagesResponse } from "../types/Pagination";

const useFetch = (url: string, optionsObj: {} = {}) => {
    const [results, setResults] = useState<ImagesResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        setError({});

        const controller = new AbortController();
        const { signal } = controller;

        fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            ...optionsObj,
        })
            .then((res) => res.json())
            .then((data) => {
                setResults(data);
                setIsLoading(false);
            })
            .catch((e: Error) => {
                setIsLoading(false);
                if (signal.aborted) return;
                setIsError(true);
                setError({ message: e.message });
            });
        return () => controller.abort();
    }, []);

    return { isLoading, isError, error, results };
};

export default useFetch;
