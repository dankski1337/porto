import { ProjectCard } from "../projectCard";
import ProjectData from "../../data/projects.json";

export const Projects = () => {
    return (
        <section className="flex flex-col gap-y-4">
            <h2 className="text-gray-800 font-bold text-3xl lg:text-4xl xl:text-4xl">
                Projects 🚀
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-8">
                {ProjectData.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </section>
    )
};