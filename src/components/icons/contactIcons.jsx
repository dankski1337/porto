import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub, } from "react-icons/fa6";

export const GmailIcon = () => {
    return (
        <a
            href="mailto:simonagis23@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="
                transition-colors
                text-gray-500
                hover:text-gray-800
            "
        >
            <FaEnvelope className="text-3xl"/>
        </a>
    )
};

export const LinkedinIcon = () => {
    return (
        <a
            href="https://www.linkedin.com/in/simon-agis/"
            target="_blank"
            rel="noreferrer"
            className="
                transition-colors
                text-gray-500
                hover:text-gray-800
            "
        >
            <FaLinkedin className="text-3xl" />
        </a>
    )
};

export const InstagramIcon = () => {
    return (
        <a
            href="https://www.instagram.com/simon.agis/"
            target="_blank"
            rel="noreferrer"
            className="
                transition-colors
                text-gray-500
                hover:text-gray-800
            "
        >
            <FaInstagram className="text-3xl" />
        </a>
    )
};

export const GithubIcon = () => {
    return (
        <a
            href="https://github.com/dankski1337"
            target="_blank"
            rel="noreferrer"
            className="
                transition-colors
                text-gray-500
                hover:text-gray-800
            "
        >
            <FaGithub className="text-3xl" />
        </a>
    )
};