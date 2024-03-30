import { useState } from "react";
import searchIcon from "../assets/icons8-search-128.svg";
import closeIcon from "../assets/x-symbol-svgrepo-com.svg";
import dropImageIcon from "../assets/icons8-drag-and-drop-64.png";
import {
    convertHexColor,
    generateRandomHexColor,
    hasEnoughContrast,
} from "../helpers/colorCodeConverters";

interface EyeDropper {
    open(): Promise<any>;
}

declare const EyeDropper: {
    prototype: EyeDropper;
    new (): EyeDropper;
};

const colorCodes: ("HEX" | "RGB" | "HSL")[] = ["HEX", "RGB", "HSL"];

const ColorPicker = () => {
    const [color, setColor] = useState("#5524e7");
    const [image, setImage] = useState<File | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [colorCode, setColorCode] = useState<"HEX" | "RGB" | "HSL">("HEX");

    const openColorPicker = async () => {
        let eyeDropper = new EyeDropper();
        const { sRGBHex } = await eyeDropper.open();
        setColor(sRGBHex);
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const handleCopyColor = async () => {
        await navigator.clipboard.writeText(color);
        alert(`Copied ${color} to your clipboard!`);
    };

    const handleDragAndDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsDragOver(false);

        const droppedFile = e.dataTransfer?.files[0];

        // Extract file extension
        const fileExtension = droppedFile.name.split(".").pop()?.toLowerCase();

        // List of allowed image extensions
        const allowedExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"]; // Add more extensions as needed

        // Check if the file extension is in the list of allowed extensions
        const isImage = allowedExtensions.includes(
            fileExtension ? fileExtension : ""
        );

        if (!isImage) {
            alert(
                "File must be an image, allowed extensions are jpg, jpeg, png, gif, bmp, or webp"
            );

            return;
        }

        setImage(droppedFile);
    };

    return (
        <section className="section-min-height p-2 md:p-8 flex flex-col items-center gap-8 pt-8 w-full">
            <h2 className="text-xl font-titles">Image Drop & Color Picker</h2>
            <p className="text-center text-sm md:text-lg mb-3">
                Generate a random color or select an image and pick a color from
                it
            </p>
            <input
                key={image ? "hasImage" : "noImage"}
                className="hidden"
                onChange={handleFileInput}
                type="file"
                accept="image/*"
                name="upload"
                id="upload"
                capture
            />
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                <div className="flex flex-col">
                    <div
                        className="w-full flex justify-evenly rounded-t-2xl"
                        style={{
                            background: color,
                            color: hasEnoughContrast(color) ? "black" : "white",
                        }}
                    >
                        {colorCodes.map((code) => (
                            <button
                                key={code}
                                className={`p-2 w-full  ${
                                    colorCode === code ? "shadow-inner" : ""
                                }`}
                                onClick={() => setColorCode(code)}
                            >
                                {code}
                            </button>
                        ))}
                    </div>
                    <button
                        className="w-full min-h-24 h-full"
                        style={{
                            background: color,
                            color: hasEnoughContrast(color) ? "black" : "white",
                        }}
                        onClick={handleCopyColor}
                    >
                        <span>{convertHexColor(color, colorCode)}</span>
                        <p>Click here to copy the color</p>
                    </button>
                    <button
                        style={{
                            background: color,
                            color: hasEnoughContrast(color) ? "black" : "white",
                        }}
                        className="w-full p-3 rounded-b-2xl"
                        onClick={() => setColor(generateRandomHexColor())}
                    >
                        Generate Random Color
                    </button>
                </div>
                <div className="relative grid place-content-center border-4 rounded-xl p-8 shadow-xl w-full bg-whitesmoke h-full">
                    {image ? (
                        <div className="relative w-full">
                            <img
                                src={URL.createObjectURL(image)}
                                className=" max-w-9/12  object-contain p-2 relative"
                                alt="selected image"
                            />
                            <button
                                onClick={() => setImage(null)}
                                className="h-8 absolute top-5 right-5"
                            >
                                <i>
                                    <img
                                        className={`h-6 bg-black bg-opacity-30 p-1 rounded-full hover:opacity-85 `}
                                        src={closeIcon}
                                    />
                                </i>
                            </button>
                        </div>
                    ) : (
                        <label
                            htmlFor="upload"
                            className={`min-h-72 p-8 flex flex-col justify-center items-center gap-1 cursor-pointer text-center  outline-2  outline-gray-400 transition-all rounded-lg h-full w-full ${
                                isDragOver
                                    ? "outline -outline-offset-8 rounded-2xl"
                                    : "outline-dashed"
                            }`}
                            onDragOver={(e) => {
                                e.preventDefault();
                                setIsDragOver(true);
                            }}
                            onDragLeave={() => setIsDragOver(false)}
                            onDrop={handleDragAndDrop}
                        >
                            <img src={dropImageIcon} className="h-8" />
                            Drop an Image here or Click Here to Choose One
                        </label>
                    )}
                </div>
            </div>
            <div>
                <button
                    onClick={openColorPicker}
                    className="flex gap-2 bg-gray-300 hover:bg-gray-200 active:bg-gray-100  px-4 py-2 rounded-lg transition-all"
                >
                    Open Eyedropper
                    <i>
                        <img className="h-6" src={searchIcon} />{" "}
                    </i>
                </button>
            </div>
            <p className="text-xs md:text-sm"><span className="text-red-600 ">Note: </span>color picker might not work on all browsers</p>
        </section>
    );
};
export default ColorPicker;
