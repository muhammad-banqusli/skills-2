import { useState } from "react";
import upArrow from "../../assets/up-arrow-svgrepo-com.svg";

type PropTypes = {
    chosenColor: { color: string; code: string } | null;
    setChosenColor: React.Dispatch<any>;
    disabled: boolean
};

const ColorMenu = ({ chosenColor, setChosenColor, disabled }: PropTypes) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const colorsArray = [
        { color: "green", code: "#008000" },
        { color: "turquoise", code: "#40E0D0" },
        { color: "blue", code: "#0000FF" },
        { color: "violet", code: "#8A2BE2" },
        { color: "pink", code: "#FFC0CB" },
        { color: "brown", code: "#A52A2A" },
        { color: "black", code: "#000000" },
        { color: "gray", code: "#808080" },
        { color: "white", code: "#FFFFFF" },
    ];

    return (
        <div className="relative  rounded-md self-center">
            <button
                className="border-2 px-2 py-1.5 rounded-md text-sm flex items-center gap-3 disabled:opacity-70 shadow-md"
                onClick={toggleMenu}
                disabled={disabled}
            >
                <div
                    className={`h-4 w-16 px-2 border border-gray-300 shadow-md rounded-sm`}
                    style={{ backgroundColor: chosenColor?.code }}
                >
                    {/* {choosenColor.color} */}
                </div>
                <img
                    src={upArrow}
                    alt="Toggle Menu"
                    className={`h-3 ${
                        menuOpen ? "-rotate-90" : "-rotate-180"
                    } transition-all duration-300`}
                />
            </button>
            <div className={`${menuOpen ? "flex " : "hidden invisible"}`}>
                <ul
                    className={`absolute top-10 right-0 rounded-md bg-whitesmoke grid grid-cols-4 md:flex flex-1 md:flex-col border-2 drop-shadow-lg animate-fadeIn z-10`}
                >
                    {colorsArray.sort((a,b) => a.color.localeCompare(b.color)).map((color, i) => (
                        <li
                            className="border-b  last:border-none text-sm hover:bg-gray-200"
                            key={i}
                        >
                            <button
                                onClick={() => {
                                    setChosenColor(color);
                                    setMenuOpen(false);
                                }}
                                className="w-full text-left px-[6.1px] md:px-3 py-1 md:py-1.5 flex gap-3 items-center justify-between"
                                title={color?.color}
                            >
                                <span className="capitalize hidden md:block">
                                    {color?.color}
                                </span>
                                <div
                                    className="inline w-4 h-4 border border-gray-300 shadow-md"
                                    
                                    style={{ backgroundColor: color.code }}
                                ></div>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default ColorMenu;
