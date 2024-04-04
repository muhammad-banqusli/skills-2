import { Orientation } from "../../types/ImageSearch";

type PropTypes = {
    modalOrientation: Orientation;
    setModalOrientation: React.Dispatch<React.SetStateAction<Orientation>>;
};

const OrientationChoice = ({
    modalOrientation,
    setModalOrientation,
}: PropTypes) => {
    return (
        <div
            className="flex m-1 border-2 rounded-md overflow-hidden w-min self-center shadow-md"
            id="orientation"
        >
            <button
                title="Landscape"
                className={`py-1 px-2 flex items-center ${
                    modalOrientation === "landscape"
                        ? "bg-black bg-opacity-10 shadow-inner"
                        : ""
                }`}
                onClick={() => setModalOrientation("landscape")}
            >
                <div className=" bg-blue-700 bg-opacity-80 h-6 w-8 rounded-sm hover:bg-opacity-90"></div>
            </button>
            <button
                title="Portrait"
                className={`py-1 px-2 flex items-center ${
                    modalOrientation === "portrait"
                        ? "bg-black bg-opacity-10 shadow-inner"
                        : ""
                }`}
                onClick={() => setModalOrientation("portrait")}
            >
                <div className=" bg-blue-700 bg-opacity-80 h-6 w-4 rounded-sm"></div>
            </button>
            <button
                title="Square"
                className={`py-1 px-2 flex items-center ${
                    modalOrientation === "square"
                        ? "bg-black bg-opacity-10 shadow-inner"
                        : ""
                }`}
                onClick={() => setModalOrientation("square")}
            >
                <div className=" bg-blue-700 bg-opacity-80 h-6 w-6 rounded-sm"></div>
            </button>
        </div>
    );
};
export default OrientationChoice;
