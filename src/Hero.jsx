import { Transition } from "@headlessui/react"
import arrow from "./assets/arrow.png"
import { useState } from "react"


const Hero = () => {

    // State handle for hover animation
    const [worksHover, setWorksHover] = useState(false)
    const [aboutHover, setAboutHover] = useState(false)
    const [resumeHover, setResumeHover] = useState(false)

    return (
        <div className=" bg-black w-screen h-screen text-white relative">
            <div className="font-roobertreg text-end pt-10 absolute right-2">
            <Transition
                show={true}
                appear={true}
                enter="transition-opacity delay-1000 duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100">
                <div className="group inline-block relative">
            <a
            href="https://www.linkedin.com/in/nicolas-pressez-8300951b5/"
            target="blank">LinkedIn</a>
            <img src={arrow}
            className="opacity-0 inline h-5 w-5 mr-[2.75rem] mb-1
            transition-opacity duration-300 group-hover:opacity-100" />
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
             >GitHub
             </a>
              <img src={arrow}
            className="opacity-0 inline h-5 w-5 mr-[2.75rem] mb-1
            transition-opacity duration-300 group-hover:opacity-100" />
             <div
            className="mt-2 absolute scale-x-0 bottom-0 left-0 w-[4.5rem] bg-white h-[3px] 
            transition transform duration-500 origin-left group-hover:scale-x-100"
            ></div>
            </div>
            </Transition>
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
                <Transition
                show={true}
                appear={true}
                enter="transition-opacity delay-1000 duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100">
                <div className="ml-40 mr-40 flex justify-between font-roobertreg
                 mt-[8%]">
                    <div>
                        <p className=" text-sm opacity-80">01</p>
                        <p className=" text-[20px] -mt-2">
                            Works</p>
                    </div>
                    <div>
                        <p className=" text-sm opacity-80">02</p>
                        <p className=" text-[20px] -mt-2">
                            About</p>
                   </div>
                   <div>
                        <p className=" text-sm opacity-80">03</p>
                        <p className=" text-[20px] -mt-2">
                            Resume</p>
                   </div>
                </div>
                </Transition>
        </div>
    )
}

export default Hero