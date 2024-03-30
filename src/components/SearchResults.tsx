import { PaginationImage, PaginationButtons } from "../components";
import { ImagesResponse } from "../types/Pagination";

type PropTypes = {
    results: ImagesResponse;
    setPage:  React.Dispatch<React.SetStateAction<number>>
};
const SearchResults = ({ results, setPage }: PropTypes) => {
    const { photos, next_page, ...paginationData } = results;
    return (
        <>
            <div className="container grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-0.5">
                {photos.map((photo) => (
                    <PaginationImage image={photo} />
                ))}
            </div>
            <PaginationButtons paginationData={paginationData} setPage={setPage} />
            {photos.length === 0 && <p>There were no results matching the search</p>}
        </>
    );
};
export default SearchResults;
