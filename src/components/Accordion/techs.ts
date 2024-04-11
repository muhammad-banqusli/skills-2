import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css-3.png";
import jsLogo from "../../assets/Unofficial_JavaScript_logo_2.svg.png";
import tsLogo from "../../assets/typescript-official-svgrepo-com.svg";
import tailwindLogo from "../../assets/tailwind-svgrepo-com.svg";
import reactLogo from "../../assets/react.svg";
import nextLogo from "../../assets/next-js.svg";
import nestLogo from "../../assets/file_type_nestjs_icon_130355.svg";
import nodeLogo from "../../assets/file-type-node.svg";
import mongodbLogo from "../../assets/file-type-mongo.svg";
import prismaLogo from "../../assets/file-type-light-prisma.svg";
import mysqlLogo from "../../assets/mysql-original-wordmark.svg";
import dndLogo from "../../assets/dnd-kit-logo.svg";
import reduxtkLogo from "../../assets/redux-icon.svg";
import axiosLogo from "../../assets/axios.svg";
import muiLogo from "../../assets/icons8-material-ui-144.svg";
import socketIOLogo from "../../assets/socketio-icon.svg";
import githubLogo from "../../assets/github.png";
import zodLogo from "../../assets/zod.svg";
import gruntLogo from "../../assets/grunt-icon.svg";
import gulpLogo from "../../assets/gulp-js-icon.svg";
import jestLogo from "../../assets/jest-js-icon.svg";

export interface Tech {
    id: number;
    title: string;
    src: string;
}

interface Techs {
    html: Tech;
    css: Tech;
    javascript: Tech;
    typescript: Tech;
    react: Tech;
    next: Tech;
    tailwind: Tech;
    nodejs: Tech;
    mongodb: Tech;
    mysql: Tech;
    socket: Tech;
    prisma: Tech;
    nest: Tech;
    mui: Tech;
    reduxtk: Tech;
    github: Tech;
    axios: Tech;
    dndkit: Tech;
    zod: Tech;
    jest: Tech;
    gulp: Tech;
    grunt: Tech;
}

export const techs: Techs = {
    html: {
        id: 1,
        title: "HTML",
        src: htmlLogo,
    },
    css: {
        id: 2,
        title: "CSS",
        src: cssLogo,
    },
    javascript: {
        id: 3,
        title: "Javascript",
        src: jsLogo,
    },
    typescript: {
        id: 4,
        title: "Typescript",
        src: tsLogo,
    },
    react: {
        id: 5,
        title: "React Js",
        src: reactLogo,
    },
    next: {
        id: 6,
        title: "Next Js",
        src: nextLogo,
    },
    tailwind: {
        id: 7,
        title: "Tailwind",
        src: tailwindLogo,
    },
    nodejs: {
        id: 8,
        title: "Node Js",
        src: nodeLogo,
    },
    mongodb: {
        id: 9,
        title: "Mongo DB",
        src: mongodbLogo,
    },
    mysql: {
        id: 10,
        title: "Mysql DB",
        src: mysqlLogo,
    },
    socket: {
        id: 11,
        title: "Socket IO",
        src: socketIOLogo,
    },
    prisma: {
        id: 12,
        title: "Prisma",
        src: prismaLogo,
    },
    nest: {
        id: 13,
        title: "Nest Js",
        src: nestLogo,
    },
    mui: {
        id: 14,
        title: "Material UI",
        src: muiLogo,
    },
    reduxtk: {
        id: 15,
        title: "Redux Toolkit",
        src: reduxtkLogo,
    },
    github: {
        id: 16,
        title: "Github",
        src: githubLogo,
    },
    axios: {
        id: 17,
        title: "Axios",
        src: axiosLogo,
    },
    dndkit: {
        id: 17,
        title: "Drag & Drop Kit",
        src: dndLogo,
    },
    jest: {
        id: 18,
        title: "Jest Js",
        src: jestLogo,
    },
    grunt: {
        id: 18,
        title: "Grunt Js",
        src: gruntLogo,
    },
    gulp: {
        id: 18,
        title: "Gulp Js",
        src: gulpLogo,
    },
    zod: {
        id: 18,
        title: "Zod",
        src: zodLogo,
    },
};
