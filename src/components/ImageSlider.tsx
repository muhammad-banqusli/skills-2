import { ImagesResponse } from "../types/Pagination";
import { useState, useEffect } from "react";
import upArrow from "../assets/up-arrow-svgrepo-com.svg";

type PropTypes = {
    results: ImagesResponse;
    duration?: number;
};

const ImageSlider = ({ results, duration = 5 }: PropTypes) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = results.photos;

    const handlePrevious = () => {
        setCurrentSlide(
            currentSlide === 0 ? images.length - 1 : currentSlide - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide(
            currentSlide === images.length - 1 ? 0 : currentSlide + 1
        );
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, duration * 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [duration, images, currentSlide]);

    return (
        <div className="relative flex justify-center items-center w-56 overflow-hidden">
            <i onClick={handlePrevious} className="z-50">
                <img
                    src={upArrow}
                    alt="previous image"
                    className="-rotate-90 h-7 rounded-full absolute bg-black bg-opacity-30 cursor-pointer top-1/2 -translate-y-1/2 left-2 p-2"
                />
            </i>

            {images &&
                images.length &&
                images.map((image, index) => (
                    <img
                        key={image.id}
                        src={image.src.medium}
                        alt={image.alt}
                        title={image.alt}
                        className={`h-80 w-56 rounded-md overflow-hidden shadow-md transition-all ease-in-out duration-500 ${
                            currentSlide === index ? "" : "max-w-0 collapse "
                        }`}
                    />
                ))}
            <i onClick={handleNext}>
                <img
                    src={upArrow}
                    alt="next image"
                    className="rotate-90 h-7 rounded-full absolute bg-black bg-opacity-30 cursor-pointer top-1/2 -translate-y-1/2 right-2 p-2"
                />
            </i>
            <div className="absolute bg-black flex p-1 rounded-full gap-1 bg-opacity-30 bottom-2">
                {images &&
                    images.length &&
                    images.map((_, index) => (
                        <button
                            key={index}
                            className={
                                currentSlide === index
                                    ? "h-1.5 w-1.5 bg-gray-200 rounded-full"
                                    : "h-1.5 w-1.5 bg-gray-500 rounded-full"
                            }
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))}
            </div>
        </div>
    );
};
export default ImageSlider;
