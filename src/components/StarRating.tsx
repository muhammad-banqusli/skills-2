import { useState } from "react";
const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);

    const isRated = (index: number, rating: number) => {
        return rating >= index ? true : false;
    };

    const isHovered = (index: number, hovered: number) => {
        return hovered >= index ? true : false;
    };

    const color = (isRated: boolean, isHovered: boolean) => {
        if (isRated) return "fill-yellow-400";
        else if (!isRated && isHovered) return "fill-yellow-600";
        else if (!isRated && !isHovered) return "fill-yellow-900";
    };

    return (
        <div className="flex">
            {Array(5)
                .fill(1)
                .map((_, i) => (
                    <svg
                        key={i}
                        height="32px"
                        width="32px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 53.867 53.867"
                        xmlSpace="preserve"
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(0)}
                        onClick={() => setRating(i)}
                        fill="gray"
                        className={`${color(
                            isRated(i, rating),
                            isHovered(i, hovered)
                        )} cursor-pointer`}
                    >
                        <polygon
                            points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
	10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
                        />
                    </svg>
                ))}
        </div>
    );
};

export default StarRating;
