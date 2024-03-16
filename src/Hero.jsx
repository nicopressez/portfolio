import { Transition } from "@headlessui/react"

const Hero = () => {
    return (
        <div className=" bg-black w-screen h-screen text-white">
            <div className="font-roobertreg text-end pt-10 pr-20">
            <a className="mr-16"
            href="https://www.linkedin.com/in/nicolas-pressez-8300951b5/"
            target="blank">LinkedIn</a>
            <a
             href="https://github.com/nicopressez"
             target="blank"
             >GitHub</a>
            </div>
            <h1 className="text-center text-[128px] 
             pt-[2%]">
                <span className="inline-block">
                <Transition
                className=" font-roobert pr-8"
                appear={true}
                show={true}
                enter="transition duration-1000 ease-out"
                enterFrom="opacity-0 transform translate-y-full"
                enterTo="opacity-100 transform translate-y-0"
                >
                Nicolas
                </Transition>
                </span>
                <span className="inline-block">
                <Transition
                className="font-roxborough pr-8"
                appear={true}
                show={true}
                enter="transition-all duration-1000 ease-out"
                enterFrom="opacity-0 transform -translate-y-full"
                enterTo="opacity-100 transform translate-y-0"
                >
                Pressez
                </Transition>
              </span>
            </h1>
            <h2 className=" font-roobert italic text-[48px] text-center
             ml-[30rem] -mt-12">
                <Transition 
                appear={true}
                show={true}
                enter="transition-opacity delay-500 duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100">
                Frontend Developer
                </Transition>
                </h2>
        </div>
    )
}

export default Hero