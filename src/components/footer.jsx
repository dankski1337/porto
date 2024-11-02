import {
    GmailIcon,
    LinkedinIcon,
    InstagramIcon,
    GithubIcon
} from "./icons/contactIcons";

export const Footer = () => {
    return (
        <footer className="
            w-full 
            flex flex-col
            items-center
            justify-center
            p-16
            gap-y-8
        ">
            <h3 className="font-bold text-2xl">
                Let&apos;s Connect!
            </h3>
            <div className="w-full flex flex-row gap-x-4 justify-center">
                    <GmailIcon />
                    <LinkedinIcon />
                    <InstagramIcon />
                    <GithubIcon />
            </div>
            <p className="text-gray-800">
                &copy; 2024 by Simon Agis. All rights reserved.
            </p>
        </footer>
    )
};