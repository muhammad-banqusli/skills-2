import { useState, useEffect, useRef } from "react";
import { Orientation, LocaleCode } from "../types/ImageSearch";
import useImagesSearch from "../hooks/useImagesSearch";
import useDebounce from "../hooks/useDebounce";
import Loading from "../components/Loading";
import FilterModal from "../components/FilterModal";
import { SearchResults } from "../components";

const ImageSearch = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [pageNum, setPageNum] = useState<number>(1);
    const [color, setColor] = useState<string | null>(null);
    const [orientation, setOrientation] = useState<Orientation>(null);
    const { isLoading, isError, results } = useImagesSearch(
        pageNum,
        searchTerm,
        color,
        orientation
    );

    const debouncedSearchTerm = useDebounce(searchTerm);

    useEffect(() => {
        setPageNum(1);
    }, [debouncedSearchTerm]);

    const modalRef = useRef<{ openModal: () => void } | null>(null);

    const handleOpenModal = () => {
        if (modalRef.current) {
            modalRef.current.openModal();
        }
    };

    return (
        <section className="section-min-height p-2 md:p-8 flex flex-col items-center gap-8 pt-8 w-full">
            <h2 className="text-xl font-titles">
                Image Search with debounced value and search filter
            </h2>
            <p className="text-center text-sm md:text-lg mb-3">
                Debounced value aims to minimize the count of http requests
            </p>
            <div className="flex gap-3 w-full justify-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="px-2 py-1 rounded-lg w-72 max-w-[70%] bg-gray-200 placeholder-gray-800 focus:outline-gray-500"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <button
                    className="bg-gray-200 px-4 py-1 rounded-lg"
                    onClick={handleOpenModal}
                >
                    Filters
                </button>
            </div>
           
            {!isLoading && !isError && results?.photos && (
                <SearchResults results={results} setPage={setPageNum} />
            )}
             <div className="h-full grow grid place-content-center">
                {isLoading && searchTerm && <Loading />}
            </div>

            <FilterModal
                ref={modalRef}
                color={color}
                setColor={setColor}
                orientaion={orientation}
                setOrientation={setOrientation}
            />
        </section>
    );
};
export default ImageSearch;
