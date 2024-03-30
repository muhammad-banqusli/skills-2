import { useState } from "react";
import accordionData from "./accordionData";
import arrowUp from "../../assets/up-arrow-svgrepo-com.svg";

const Accordion = () => {
    const [isMultiple, setIsMultiple] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);
    const [multipleChoice, setMultipleChoice] = useState<number[]>([]);

    const isItemOpen = (itemId: number) => {
        return !isMultiple
            ? selected === itemId
                ? true
                : false
            : multipleChoice.includes(itemId)
            ? true
            : false;
    };

    const handleItemClick = (itemId: number) => {
        setSelected((prev) =>
            !!prev ? (prev === itemId ? null : itemId) : itemId
        );

        setMultipleChoice((prev) =>
            prev.includes(itemId)
                ? prev.filter((num) => num !== itemId)
                : [...prev, itemId]
        );
    };

    return (
        <div className=" flex flex-col w-full">
            <div className="rounded-lg overflow-hidden drop-shadow-xl flex flex-col justify-center bg-gray-300">
                <button
                    className=" self-center py-2 hover:bg-gray-200 w-full transition-all"
                    onClick={() => {
                        setIsMultiple((prev) => !prev);
                        setSelected(null);
                        setMultipleChoice([]);
                    }}
                >
                    {!isMultiple
                        ? "Enable Multiple Selections"
                        : "Disable Multiple Selections"}
                </button>
                {accordionData.map((item) => (
                    <div key={item.id}>
                        <div
                            onClick={() => handleItemClick(item.id)}
                            className="flex justify-between bg-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-200 gap-2 transition-all"
                        >
                            <h3>{item.title}</h3>
                            <button onClick={() => handleItemClick(item.id)}>
                                <img
                                    src={arrowUp}
                                    onClick={() => handleItemClick(item.id)}
                                    alt="toggle Cordion Item"
                                    className={`h-3 ${
                                        !isItemOpen(item.id)
                                            ? "-rotate-180"
                                            : "rotate-0"
                                    } transition-all duration-500`}
                                />
                            </button>
                        </div>
                        <div
                            className={`px-4 bg-gray-100 ${
                                !isItemOpen(item.id)
                                    ? "max-h-0"
                                    : "max-h-96 py-2"
                            } overflow-hidden transition-all duration-500`}
                        >
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Accordion;
