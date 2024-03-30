import { useState, useEffect } from "react";
import { ImagesResponse } from "../types/Pagination";
import useDebounce from "./useDebounce";
import { Orientation } from "../types/ImageSearch";

const useImagesSearch = (
    pageNum: number = 1,
    query: string ,
    color: string | null,
    orientation: Orientation
) => {
    const [results, setResults] = useState<ImagesResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState({});
    const [hasNextPage, setHasNextPage] = useState(false);
    const debouncedQuery = useDebounce(query)
    
    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        setError({});

        const controller = new AbortController();
        const { signal } = controller;

        const fetchUrl = `https://api.pexels.com/v1/search?${
            debouncedQuery ? "query=" + debouncedQuery : ""
        }${orientation? "&orientation="+orientation:""}&page=${pageNum}&per_page=40`;

        fetch(fetchUrl, {
            headers: {
                Authorization:
                    "Pz6CLNIDRA8EdrRp0s1Q4NEuNADFne7qLuRq8SuKuO3ECNaYusgoCeSl",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setResults(data);
                const { page, per_page, total_results } = data;
                const nextPageDisabled = total_results / per_page === page;
                nextPageDisabled ? setHasNextPage(false) : setHasNextPage(true);
                setIsLoading(false);
            })
            .catch((e: Error) => {
                setIsLoading(false);
                if (signal.aborted) return;
                setIsError(true);
                setError({ message: e.message });
            });
        return () => controller.abort();
    }, [pageNum, debouncedQuery, color, orientation]);

    return { isLoading, isError, error, results, hasNextPage };
};

export default useImagesSearch;
