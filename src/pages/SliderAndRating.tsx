import ImageSlider from "../components/ImageSlider";
import Loading from "../components/Loading";
import StarRating from "../components/StarRating";
import useFetch from "../hooks/useFetch";


const SliderAndRating = () => {
    const { results, isLoading, isError } = useFetch(
        "https://api.pexels.com/v1/search?query=subaru&per_page=5&orientation=portrait&page=2",
        {
            headers: {
                Authorization:
                    "Pz6CLNIDRA8EdrRp0s1Q4NEuNADFne7qLuRq8SuKuO3ECNaYusgoCeSl",
            },
        }
    );

    let sliderContent;
    if (isLoading) sliderContent = <Loading />;
    else if (isError)
        sliderContent = (
            <p className="text-center">
                Something went wrong while fetching data
            </p>
        );
    else if (results) sliderContent = <ImageSlider results={results} duration={2.5}/>
    return (
        <section className="section-min-height p-2 md:p-8 flex flex-col items-center gap-8 pt-8 w-full">
            <h2 className="text-xl font-titles">Image Slider & Star Rating</h2>
            <p className="text-center text-sm md:text-lg mb-3">
                Two simple components made with no third party components
            </p>
            <div className="h-full grid place-content-center">
                {sliderContent}
            </div>
            <StarRating />
        </section>
    );
};
export default SliderAndRating;
