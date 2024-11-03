/* eslint-disable react/prop-types */
export const ProjectCard = ({ photo, title, desc, techStack, link, github }) => {
    return (
        <div className="rounded-xl shadow-lg flex flex-col gap-y-4 overflow-hidden group">
            <img src={photo} alt={title} className="transition-transform group-hover:scale-110"/>
            <div className="flex flex-col flex-grow px-4 pb-4 justify-between">
                <h3 className="text-gray-800 font-bold text-xl lg:text-2xl xl:text-2xl">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base xl:text-base">
                    {desc}
                </p>
                <div>
                    <div className="flex items-center gap-x-2 mt-4">
                        {techStack.map((tech, index) => (
                            <span key={index} className="p-1 border rounded-lg border-gray-500 text-gray-500 text-sm lg:text-base xl:text-base">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-center gap-x-4 mt-4">
                        {link && (
                            <a href={link} target="_blank" rel="noreferrer" className="p-2 rounded-full transition-colors hover:text-white hover:bg-blue-600">
                                <svg className="size-8" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                        <path d="M3.338 17A10 10 0 0 0 12 22a10 10 0 0 0 8.662-5M3.338 7A10 10 0 0 1 12 2a10 10 0 0 1 8.662 5" />
                                        <path d="M13 21.95s1.408-1.853 2.295-4.95M13 2.05S14.408 3.902 15.295 7M11 21.95S9.592 20.098 8.705 17M11 2.05S9.592 3.902 8.705 7M9 10l1.5 5l1.5-5l1.5 5l1.5-5M1 10l1.5 5L4 10l1.5 5L7 10m10 0l1.5 5l1.5-5l1.5 5l1.5-5" />
                                    </g>
                                </svg>
                            </a>
                        )}
                        {github && (
                            <a href={github} target="_blank" rel="noreferrer" className="p-2 rounded-full transition-colors hover:text-white hover:bg-gray-900">
                                <svg className="size-8" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};