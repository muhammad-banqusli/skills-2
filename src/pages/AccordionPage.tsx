import Accordion from "../components/accordion/Accordion";

const AccordionPage = () => {
    return (
        <section className="section-min-height p-2 md:p-8 flex flex-col items-center gap-8 pt-8 w-full">
            <h2 className="text-xl font-titles">Accordion</h2>
            <Accordion />
        </section>
    );
};

export default AccordionPage