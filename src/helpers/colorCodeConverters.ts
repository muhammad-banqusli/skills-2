// Function to generate a random hex color
export function generateRandomHexColor(): string {
    return (
        "#" +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")
    );
}

// Function to convert hex to RGB
function hexToRgb(hex: string): string {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to convert hex to HSL
function hexToHsl(hex: string): string {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    const max = Math.max(r, g, b) / 255;
    const min = Math.min(r, g, b) / 255;
    let l = (max + min) / 2;
    let h, s;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r / 255:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g / 255:
                h = (b - r) / d + 2;
                break;
            case b / 255:
                h = (r - g) / d + 4;
                break;
            default:
                h = 0;
        }
        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

// Function to convert hex color to specified format
export function convertHexColor(
    hex: string,
    format: "HEX" | "RGB" | "HSL"
): string {
    switch (format) {
        case "HEX":
            return hex;
        case "RGB":
            return hexToRgb(hex);
        case "HSL":
            return hexToHsl(hex);
        default:
            throw new Error("Invalid format specified");
    }
}

export function hasEnoughContrast(hexColor: string): boolean {
    // Convert hex color to RGB
    const rgbColor = hexToRgb(hexColor);

    if (!rgbColor) {
        // Handle case where conversion fails
        return false;
    }

    // Parse the RGB string into separate components
    const [r, g, b] = rgbColor.match(/\d+/g)!;

    // Calculate relative luminance using sRGB luminance formula
    const luminance =
        0.299 * parseInt(r) + 0.587 * parseInt(g) + 0.114 * parseInt(b);

    // Check if the luminance ratio with black is greater than or equal to 4.5 (WCAG AA standard)
    return luminance >= 186 ;
}
