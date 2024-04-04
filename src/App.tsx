import { Header, Footer, SlideUpBtn } from "./components";
import { Hero, AccordionPage, ColorPicker, SliderAndRating, ImageSearch } from "./pages";

function App() {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <main className="w-full max-w-[1400px] shadow-2xl">
                <Hero />
                <AccordionPage />
                <ColorPicker />
                <SliderAndRating />
                <ImageSearch />
                <SlideUpBtn />
            </main>
            <Footer />
        </div>
    );
}

export default App;
