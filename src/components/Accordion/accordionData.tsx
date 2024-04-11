import { ReactNode } from "react";
import TechnologyCard from "./TechnologyCard";
import { techs } from "./techs";

interface AccordionItem {
    id: number;
    title: string;
    content: ReactNode | ReactNode[];
}

const Content1 = (
    <div className="container grid grid-cols-3 gap-2 p-2">
        <TechnologyCard tech={techs.html} />
        <TechnologyCard tech={techs.css} />
        <TechnologyCard tech={techs.javascript} />
        <TechnologyCard tech={techs.typescript} />
        <TechnologyCard tech={techs.tailwind} />
        <TechnologyCard tech={techs.react} />
        <TechnologyCard tech={techs.next} />
        <TechnologyCard tech={techs.nodejs} />
        <TechnologyCard tech={techs.mongodb} />
        <TechnologyCard tech={techs.mysql} />
        <TechnologyCard tech={techs.mui} />
        <TechnologyCard tech={techs.github} />
    </div>
);

const Content2 = (
    <div className="container grid grid-cols-3 gap-2 p-2">
        <TechnologyCard tech={techs.axios} />
        <TechnologyCard tech={techs.dndkit} />
        <TechnologyCard tech={techs.socket} />
        <TechnologyCard tech={techs.prisma} />
        <TechnologyCard tech={techs.reduxtk} />
        <TechnologyCard tech={techs.zod} />
    </div>
);
const Content3 = (
    <div className="container grid grid-cols-3 gap-2 p-2">
        <TechnologyCard tech={techs.nest} />
        <TechnologyCard tech={techs.jest} />
        <TechnologyCard tech={techs.gulp} />
    </div>
);

export const accordionData: AccordionItem[] = [
    {
        id: 1,
        title: "Technologies I learnt and worked with",
        content: Content1,
    },
    {
        id: 2,
        title: `Technologies I'm familiar with`,
        content: Content2,
    },
    {
        id: 3,
        title: "Technologies I'm looking forward to learn in the near future",
        content: Content3,
    },
];
