import useImages from "../hooks/useImagesSearch";
import LoadMoreImage from "../components/LoadMoreImage";
import Loading from "../components/Loading";
import { useState } from "react";

const LoadMorePagination = () => {
    const [page, setPage] = useState(1);
    const { results, isError, isLoading, hasNextPage } = useImages(page);
    console.log(window.isSecureContext)
    return (
        <section className="section-min-height p-2 md:p-8 flex flex-col items-center gap-8 pt-8 w-full">
            <h2 className="text-xl font-titles">Pagination with Load More Button</h2>
            <p className="text-center text-sm md:text-lg mb-3">
               Load More Images by Pressing the Button Below
            </p>
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {results &&
                    results.photos.map((image, i) => (
                        <LoadMoreImage key={i} image={image} />
                    ))}
            </div>
            {isLoading ? (
                <Loading />
            ) : (
                <button
                    disabled={!hasNextPage}
                    onClick={() => setPage((prev) => prev + 1)}
                    className="bg-gray-300 px-4 py-1 hover:bg-gray-200 transition-all rounded-md"
                >
                    Load More
                </button>
            )}
            {isError && (
                <p className="p-3">Something went wrong while fetching data.</p>
            )}
        </section>
    );
};
export default LoadMorePagination;
