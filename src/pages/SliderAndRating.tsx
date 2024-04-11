import { Loading, Section, ImageSlider, StarRating } from "../components";
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
    else if (results)
        sliderContent = <ImageSlider results={results} duration={2.5} />;
    return (
        <Section
            id="slider-and-rating"
            title="Image Slider & Star Rating"
            paragraph="Two simple components made with no third party components"
        >
            <div className="h-full grid place-content-center">
                {sliderContent}
            </div>
            <StarRating />
        </Section>
    );
};
export default SliderAndRating;
