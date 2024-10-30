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
            py-8
            rounded-lg
        ">
            <div className="items-center justify-center">
                <img 
                className="rounded-full size-72 shadow-lg"    
                src="https://via.placeholder.com/150" alt="Me" />
            </div>
            <div className="flex flex-col">
                <div className="mb-4 lg:mb-8 xl:mb-8">
                    <p className="text-gray-500 font-semibold text-xl lg:text-2xl xl:text-2xl">
                        Hi!, i&apos;m
                        
                    </p>
                    <h1 className="text-gray-800 font-bold text-3xl lg:text-4xl xl:text-4xl">
                        Simon Agis
                    </h1>
                </div>
                <p className="text-gray-500 font-semibold text-md lg:text-xl xl:text-xl">
                    Computer Science Student with strong interest in web development and cybersecurity.
                </p>
            </div>
        </div>
    )
};