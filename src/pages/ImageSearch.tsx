import { useState, useEffect } from "react";
import useImagesSearch from "../hooks/useImagesSearch";
import { Orientation } from "../types/ImageSearch";
import Loading from "../components/Loading";
import useDebounce from "../hooks/useDebounce";
import { SearchResults } from "../components";

const ImageSearch = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [pageNum, setPageNum] = useState<number>(1);
    const [color, setColor] = useState<string | null>(null);
    const [orientation, setOrientation] = useState<Orientation>(null);
    const { isLoading, isError, results, hasNextPage } = useImagesSearch(
        pageNum,
        searchTerm,
        color,
        orientation
    );

    const debouncedSearchTerm = useDebounce(searchTerm)

    useEffect(() => {
        setPageNum(1)
    }, [debouncedSearchTerm])

    return (
        <section className="section-min-height p-2 md:p-8 flex flex-col items-center gap-8 pt-8 w-full">
            <h2 className="text-xl font-titles">
                Image Search with debounced value and search filter
            </h2>
            <p className="text-center text-sm md:text-lg mb-3">
                Debounced value means to minimize the count of http requests
            </p>
            <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 rounded-lg w-96 max-w-screen-[80%]"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            <button>filters</button>
            {isLoading && searchTerm && <Loading />}

            {!isLoading && !isError && results?.photos && (
                <SearchResults results={results} setPage={setPageNum} />
            )}
        </section>
    );
};
export default ImageSearch;
