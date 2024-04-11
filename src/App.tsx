import { useState } from "react";
import { Header, Footer, SlideUpBtn, Sidebar } from "./components";

import {
    Hero,
    AccordionPage,
    ColorPicker,
    SliderAndRating,
    ImageSearch,
} from "./pages";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    return (
        <div className="flex flex-col items-center">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Sidebar open={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
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
