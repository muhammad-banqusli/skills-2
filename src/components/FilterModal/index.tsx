import {
    forwardRef,
    useImperativeHandle,
    useState,
    Dispatch,
    SetStateAction,
} from "react";
import { Orientation } from "../../types/ImageSearch";
import ColorMenu from "./ColorMenu";
import OrientationChoice from "./OrientationChoice";
import closeIcon from "../../assets/x-symbol-svgrepo-com.svg";

type PropTypes = {
    color: string | null;
    orientaion: Orientation;
    setColor: Dispatch<SetStateAction<string | null>>;
    setOrientation: Dispatch<SetStateAction<Orientation>>;
};

type ModalRef = {
    openModal: () => void;
};

const FilterModal = forwardRef<ModalRef, PropTypes>(
    ({ orientaion, setColor, setOrientation }: PropTypes, ref) => {
        const [open, setOpen] = useState<boolean>(false);
        const [modalOrientation, setModalOrientation] =
            useState<Orientation>(orientaion);

        const [chosenColor, setChosenColor] = useState<any>(null);
        const [inputColor, setInputColor] = useState<string>("");
        const [colorMethod, setColorMethod] = useState<"choose" | "enter">(
            "choose"
        );

        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";

        useImperativeHandle(ref, () => {
            return {
                openModal: () => setOpen(true),
            };
        });

        const handleOkClick = () => {
            console.log(chosenColor);
            console.log(inputColor);
            setOrientation(modalOrientation);
            colorMethod === "choose"
                ? setColor(chosenColor?.color)
                : setColor(inputColor);

            setOpen(false);
        };

        const handleClose = () => setOpen(false);
        const handleClear = () => {
            setModalOrientation(null);
            setChosenColor(null);
            setColor(null);
            setOrientation(null);
            setInputColor("");
            handleClose();
        };

        if (open)
            return (
                <div className="fixed top-0 left-0 right-0 w-full h-full grid place-content-center p-6 z-50">
                    <div className="z-10 relative bg-whitesmoke p-4 rounded-lg flex flex-col gap-4">
                        <button
                            className="absolute top-3 right-3 bg-gray-300 bg-opacity-40 rounded-full p-2 animate-close-button"
                            onClick={handleClose}
                        >
                            <img src={closeIcon} alt="close" className="h-3" />
                        </button>
                        <h2 className="text-center">Filters</h2>
                        <label
                            htmlFor="orientation"
                            className="flex flex-col md:flex-row md:gap-6 justify-between text-sm md:text-base"
                        >
                            Orientation:
                            <OrientationChoice
                                modalOrientation={modalOrientation}
                                setModalOrientation={setModalOrientation}
                            />
                        </label>
                        <label htmlFor="" className="text-sm md:text-base">
                            Color:
                        </label>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 justify-between">
                            <label
                                className="flex  items-center gap-2 text-sm md:text-base"
                                htmlFor="choose-color"
                            >
                                <input
                                    type="radio"
                                    id="choose-color"
                                    value="choose"
                                    onChange={() => setColorMethod("choose")}
                                    checked={colorMethod === "choose"}
                                />
                                Choose Color
                            </label>
                            <ColorMenu
                                chosenColor={chosenColor}
                                setChosenColor={setChosenColor}
                                disabled={colorMethod !== "choose"}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-between w-full">
                            <label
                                className="flex items-center gap-2 text-sm md:text-base"
                                id="enter-color"
                            >
                                <input
                                    type="radio"
                                    id="enter-color"
                                    value="enter"
                                    onChange={() => setColorMethod("enter")}
                                    checked={colorMethod === "enter"}
                                />
                                Enter Color
                            </label>
                            <input
                                type="text"
                                className=" bg-transparent text-sm md:text-base shadow-md border-2 rounded-md px-2 py-0.5 disabled:opacity-50"
                                placeholder="color (hex)"
                                onChange={(e) =>
                                    setInputColor(e.target.value.slice(1))
                                }
                                disabled={colorMethod !== "enter"}
                            />
                        </div>

                        <div className="flex w-full gap-2">
                            <button
                                className="w-1/2 text-sm md:text-base bg-gray-300 hover:bg-gray-200 active:bg-gray-100 py-1 rounded-md"
                                onClick={handleOkClick}
                            >
                                Confirm
                            </button>
                            <button
                                className="w-1/2 text-sm md:text-base bg-gray-300 hover:bg-gray-200 active:bg-gray-100 py-1 rounded-md"
                                onClick={handleClear}
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                    <div
                        className="absolute z-0 bg-black opacity-50 w-full h-full"
                        onClick={handleClose}
                    />
                </div>
            );
        else return null;
    }
);
export default FilterModal;
