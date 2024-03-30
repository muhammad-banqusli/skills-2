import { useState, useRef, useCallback } from "react";

import InfiniteLoadingImage from "./components/LoadMoreImage";
import Loading from "./components/Loading";
import useImages from "./hooks/useImagesSearch";

const InfiniteLoading = () => {
    const [pageNum, setPageNum] = useState<number>(1);
    const { isLoading, isError, results, hasNextPage } =
        useImages(pageNum);

    const intObserver = useRef<IntersectionObserver>();

    console.log(pageNum)
    console.log(results)

    const lastImageRef = useCallback(
        (image: HTMLDivElement | null) => {
            if (!image || isLoading) return;
            if (intObserver.current) intObserver.current.disconnect();
    
            intObserver.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    console.log("you scrolled to the last image")
                    setPageNum((prev) => prev + 1);
                }
            });
    
            if (image) {
                intObserver.current.observe(image); // Start observing the last image element
            }
        },
        [isLoading, hasNextPage]
    );

    return (
        <section className="section-min-height p-2 md:p-8 flex flex-col items-center gap-8 pt-8">
            <h2 className="text-xl font-titles">Infinite Loading</h2>
            <p className="text-center text-sm md:text-lg mb-3">In this component the loading of images will happen as you scroll.</p>
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {results &&
                    results.photos.map((image, i) => {
                        if (results.photos.length === i + 1) {
                            return (
                                <InfiniteLoadingImage
                                    key={i}
                                    image={image}
                                    ref={lastImageRef}
                                />
                            );
                        }
                        return <InfiniteLoadingImage key={i} image={image} />;
                    })}
            </div>
            {isLoading && <Loading />}
            {isError && <p className="p-3">Something went wrong while fetching data.</p>}
        </section>
    );
};
export default InfiniteLoading;
