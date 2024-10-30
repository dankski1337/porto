import {
    GmailIcon,
    LinkedinIcon,
    InstagramIcon,
    GithubIcon
} from "./icons/contact-icons.jsx";

export const Introduction = () => {
    return (
        <div className="
            flex
            flex-col
            gap-y-8
            lg:flex-row
            xl:flex-row
            gap-x-16
            items-center
            p-8
            rounded-lg
        ">
            <div className="items-center justify-center">
                <img 
                className="rounded-full size-72"    
                src="https://via.placeholder.com/150" alt="Me" />
            </div>
            <div className="flex flex-col">
                <div className="mb-4 lg:mb-8 xl:mb-8">
                    <h1 className="text-gray-500 font-semibold text-2xl lg:text-3xl xl:text-3xl">
                        Hi!, i&apos;m
                        
                    </h1>
                    <h1 className="text-gray-800 font-bold text-4xl lg:text-6xl xl:text-6xl">
                        Simon Agis
                    </h1>
                </div>
                <p className="text-gray-500 font-semibold text-xl lg:text-2xl xl:text-2xl">
                    Computer Science Student with strong interest in web development and cybersecurity.
                </p>
                <div className="mt-8 lg:mb-8 xl:mb-8 w-full flex flex-row gap-x-4 justify-center">
                    <GmailIcon />
                    <LinkedinIcon />
                    <InstagramIcon />
                    <GithubIcon />
                </div>
            </div>
        </div>
    )
};