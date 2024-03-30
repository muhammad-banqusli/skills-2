import ProgressBar from "./ProgressBar";


const Header = () => {
   
    return (
        <header className="w-full  flex shadow-lg px-3 sticky top-0 bg-whitesmoke align-middle justify-center items-center z-40">
            <div className="flex align-middle justify-between max-w-[1400px] w-full px-10">
                <a href="#hero">
                    <h1 className="my-3">Mohammad Nour Banqusli</h1>
                </a>
                
            </div>
           <ProgressBar />
        </header>
    );
};
export default Header;
