const list = [
    {
        title: "Hero",
        desination: "#hero",
        type: "internal",
    },
    {
        title: "Accordion",
        desination: "#accordion",
        type: "internal",
    },

    {
        title: "Image Drop & Color Picker",
        desination: "#color-picker",
        type: "internal",
    },
    {
        title: "Image Slider & Star Rating",
        desination: "#slider-and-rating",
        type: "internal",
    },
    {
        title: "Image Search",
        desination: "#image-search",
        type: "internal",
    },
    
    {
        title: "My Other Websites",
        desination: "https://skills-2.vercel.app/",
        type: "external",
    },
];

type PropTypes = {
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Content = ({ setSidebarOpen }: PropTypes) => {
    return (
        <div className="flex flex-col overflow-x-hidden pt-2 pb-5 pl-1 pr-3">
            {list.map((item, index) => (
                <a
                    href={item.desination}
                    key={index}
                    className="py-4 px-4 hover:shadow-lg hover:translate-x-1 hover:translate-y-1 transition-all hover:ring-1 ring-sky-500 rounded-md flex justify-center sm:justify-start"
                    onClick={() => setSidebarOpen(false)}
                    target={item.type === "external"? "_blank":"_self"}
                >
                    <button  onClick={() => setSidebarOpen(false)}>
                        {item.title}
                    </button>
                </a>
            ))}
        </div>
    );
};
export default Content;
