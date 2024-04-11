import { Tech } from "./techs";

type PropTypes = {
    tech: Tech
}

const TechnologyCard = ({tech}: PropTypes) => {
  return (
    <div title={tech.title} className="flex flex-col gap-2 items-center">
        <img src={tech.src} alt={tech.title} className="h-10 w-auto object-contain max-w-28" />
        <p className="text-center">{tech.title}</p>
    </div>
  )
}
export default TechnologyCard