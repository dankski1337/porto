import {
    CLangIcon,
    JavaIcon,
    PHPIcon,
    DartIcon,
    JSIcon,
    HTMLIcon,
    CSSIcon,
    LaravelIcon,
    NextIcon,
    ReactIcon,
    NodeIcon,
    ExpressIcon,
    FlutterIcon,
    BootstrapIcon,
    TailwindIcon,
    MySQLIcon,
    PGSQLIcon,
    FirebaseIcon,
    GitIcon,
    GitHubIcon,
    LinuxIcon,
    FigmaIcon
} from '../icons/techstackIcons';

export const TechStack = () => {
    return (
        <section className="flex flex-col gap-y-4">
            <h2 className="text-gray-800 font-bold text-3xl lg:text-4xl xl:text-4xl">
                Tech stacks 🛠️
            </h2>
            <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-6 xl:grid-cols-6 ">
                <CLangIcon />
                <JavaIcon />
                <PHPIcon />
                <DartIcon />
                <JSIcon />
                <HTMLIcon />
                <CSSIcon />
                <LaravelIcon />
                <NextIcon />
                <ReactIcon />
                <NodeIcon />
                <ExpressIcon />
                <FlutterIcon />
                <BootstrapIcon />
                <TailwindIcon />
                <MySQLIcon />
                <PGSQLIcon />
                <FirebaseIcon />
                <GitIcon />
                <GitHubIcon />
                <LinuxIcon />
                <FigmaIcon />
            </div>
        </section>
    )
};