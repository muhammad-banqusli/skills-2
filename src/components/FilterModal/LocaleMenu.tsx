import { Dispatch, SetStateAction, useState } from "react";
import upArrow from "../../assets/up-arrow-svgrepo-com.svg";
import { LocaleCode } from "../../types/ImageSearch";

type PropTypes = {
    locale: LocaleCode;
    setLocale: Dispatch<SetStateAction<LocaleCode>>;
};

const countries: { code: LocaleCode; country: string }[] = [
    { code: "en-US", country: "United States" },
    { code: "pt-BR", country: "Brazil" },
    { code: "es-ES", country: "Spain" },
    { code: "ca-ES", country: "Catalonia" },
    { code: "de-DE", country: "Germany" },
    { code: "it-IT", country: "Italy" },
    { code: "fr-FR", country: "France" },
    { code: "sv-SE", country: "Sweden" },
    { code: "id-ID", country: "Indonesia" },
    { code: "pl-PL", country: "Poland" },
    { code: "ja-JP", country: "Japan" },
    { code: "zh-TW", country: "Taiwan" },
    { code: "zh-CN", country: "China" },
    { code: "ko-KR", country: "South Korea" },
    { code: "th-TH", country: "Thailand" },
    { code: "nl-NL", country: "Netherlands" },
    { code: "hu-HU", country: "Hungary" },
    { code: "vi-VN", country: "Vietnam" },
    { code: "cs-CZ", country: "Czech Republic" },
    { code: "da-DK", country: "Denmark" },
    { code: "fi-FI", country: "Finland" },
    { code: "uk-UA", country: "Ukraine" },
    { code: "el-GR", country: "Greece" },
    { code: "ro-RO", country: "Romania" },
    { code: "nb-NO", country: "Norway" },
    { code: "sk-SK", country: "Slovakia" },
    { code: "tr-TR", country: "Turkey" },
    { code: "ru-RU", country: "Russia" },
];

const LocaleMenu = ({ locale, setLocale }: PropTypes) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    console.log(countries);

    return (
        <div className="relative shadow-md rounded-md ">
            <button
                className="border-2 px-2 py-1.5 rounded-md text-sm flex items-center gap-3"
                onClick={toggleMenu}
            >
                {locale
                    ? countries.find((country) => country.code === locale)
                          ?.country
                    : "undefined"}
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
                    className={`absolute top-10  rounded-md bg-whitesmoke flex-col border-2 drop-shadow-lg animate-fadeIn z-10 overflow-y-scroll`}
                >
                    {countries
                        .sort((a, b) => a.country.localeCompare(b.country))
                        .map((country, i) => (
                            <li
                                className="border-b  last:border-none text-sm hover:bg-gray-200"
                                key={i}
                            >
                                <button
                                    onClick={() => {
                                        setLocale(country.code);
                                        setMenuOpen(false);
                                    }}
                                    className="w-full text-left px-3 py-1.5 flex gap-3 items-center justify-between"
                                >
                                    <span className="capitalize">
                                        {country?.country}
                                    </span>
                                </button>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};
export default LocaleMenu;
