import { Transition } from "@headlessui/react"
import arrow from "./assets/arrow.png"


const Hero = () => {
    return (
        <div className=" bg-black w-screen h-screen text-white relative">
            <div className="font-roobertreg text-end pt-10 absolute right-2">
                <div className="group inline-block relative">
            <a className="mr-16 group-hover:mr-0"
            href="https://www.linkedin.com/in/nicolas-pressez-8300951b5/"
            target="blank">LinkedIn</a>
            <img src={arrow}
            className="group-hover:inline h-5 w-5 hidden mr-[2.75rem]" />
            <div
            className="mt-2 absolute scale-x-0 bottom-0 left-0 w-20 bg-white h-[3px] 
            transition transform duration-500 origin-left group-hover:scale-x-100"
            >
            </div>
            </div>
            
            <div className="group inline-block relative">
            <a
             href="https://github.com/nicopressez"
             target="blank"
             className="mr-16 group-hover:mr-0"
             >GitHub
             </a>
              <img src={arrow}
            className="opacity-0 group-hover:inline h-5 w-5 hidden mr-[2.75rem]
            transition-opacity duration-500 group-hover:opacity-100" />
             <div
            className="mt-2 absolute scale-x-0 bottom-0 left-0 w-[4.5rem] bg-white h-[3px] 
            transition transform duration-500 origin-left group-hover:scale-x-100"
            ></div>
            </div>
            </div>
            <h1 className="text-center text-[128px] 
             pt-[5%]">
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