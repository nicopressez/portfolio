import { Transition } from "@headlessui/react"
import arrow from "./assets/arrow.png"
import { useState } from "react"
import Resume from "./Resume"
import Works from "./Works"
import About from "./About"


const Hero = () => {

    // State handle for hover animation
    const [worksHover, setWorksHover] = useState(false)
    const [aboutHover, setAboutHover] = useState(false)
    const [resumeHover, setResumeHover] = useState(false)

    // State handle to show corresponding component
    const [showWorks, setShowWorks] = useState(false)
    const [showAbout, setShowAbout] = useState(false)
    const [showResume, setShowResume] = useState(false)

    return (
        <div className=" bg-black w-screen h-screen text-white relative overflow-hidden">
            <div className="font-roobertreg text-end pt-10 absolute right-2">
            <Transition
                show={true}
                appear={true}
                enter="transition-opacity delay-1000 duration-300 ease-out"
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
                enter="transition-opacity delay-500 duration-300 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100">
                Frontend Developer
                </Transition>
                </h2>
                <Transition
                show={true}
                appear={true}
                enter="transition-opacity delay-1000 duration-300 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100">
                
                <div className={`pl-40 pr-40 flex justify-between font-roobertreg
                 mt-[8%] relative
                 `}>
                    <div className={` scale-y-0 pt-20 pb-20
                transition duration-500 absolute -top-16 left-0 w-full ease-out
                ${aboutHover || worksHover || resumeHover ? "bg-gradient-to-t from-white to-gray-300 scale-y-100" : 
                ""}
                `}>
                    {(resumeHover || aboutHover || worksHover) && 
                    <Transition
                    appear={true}
                    show={true}
                    enter="transition delay-300 duration-300 ease-out"
                    enterFrom="opacity-0 transform scale-x-50 "
                    enterTo="opacity-100 transform scale-x-100">
                    <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roobert text-gray-300  text-[200px] italic
                     tracking-wider">
                        {resumeHover ? "RESUME" : aboutHover ? "ABOUT" : worksHover ? "WORKS" : ""} 
                    </p>
                    </Transition>}
                
                </div>
                    <div className={`
                    transition duration-300 z-50 hover:cursor-pointer
                    ${aboutHover || resumeHover || worksHover? "text-black" : ""}`
                    }
                    onMouseEnter={() => setWorksHover(true)}
                    onMouseLeave={() => setWorksHover(false)}
                    onClick={() => setShowWorks(true)}>
                        <p className=" text-sm opacity-80">01</p>
                        <p className=" text-[20px] -mt-2"
                        >
                            Works</p>
                    </div>
                    <div className={`
                     transition-colors duration-300  z-50 hover:cursor-pointer
                     ${aboutHover || resumeHover || worksHover? "text-black" : ""}`}
                    onMouseEnter={() => setAboutHover(true)}
                    onMouseLeave={() => setAboutHover(false)}
                    onClick={() => setShowAbout(true)}>
                        <p className=" text-sm opacity-80">02</p>
                        <p className=" text-[20px] -mt-2">
                            About</p>
                   </div>
                   <div className={`
                   transition-colors duration-300 z-50 hover:cursor-pointer
                   ${aboutHover || resumeHover || worksHover? "text-black" : ""}`}
                    onMouseEnter={() => setResumeHover(true)}
                    onMouseLeave={() => setResumeHover(false)}
                    onClick={() => setShowResume(true)}>
                        <p className=" text-sm opacity-80">03</p>
                        <p className=" text-[20px] -mt-2">
                            Resume</p>
                   </div>
                </div>
                </Transition>

                <Transition
                as="div"
                className="absolute top-[92%] w-full h-full rotate-3"
                show={(worksHover && !showWorks)}
                enter="transition duration-300 ease-out"
                enterFrom="opacity-0 translate-y-20"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-300 ease-in"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-20">
                
                <Works />
                </Transition>

                <Transition
                as="div"
                className="absolute top-[92%] w-full h-full rotate-3"
                show={aboutHover && !showAbout}
                enter="transition duration-300 ease-out"
                enterFrom="opacity-0 translate-y-20"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-300 ease-in"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-20">
                <About />
                </Transition>

                <Transition
                as="div"
                className="absolute top-[92%] w-full h-full rotate-3"
                show={resumeHover && !showResume}
                enter="transition duration-300 ease-out"
                enterFrom="opacity-0 translate-y-20"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-300 ease-in"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-20"
                >
                <Resume/>
                </Transition>

                <Transition
                as="div"
                className="absolute top-1 w-full h-full z-[100]"
                show={showWorks}
                enter="transition duration-500 ease-out"
                enterFrom=" translate-y-full"
                enterTo=" translate-y-0"
                leave="transition duration-300 ease-in"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-20"
            >
                <Works setShowWorks={setShowWorks}/>
                
            </Transition>

            <Transition
                as="div"
                className="absolute top-1 w-full h-full z-[100]"
                show={showAbout}
                enter="transition duration-500 ease-out"
                enterFrom=" translate-y-full"
                enterTo=" translate-y-0"
                leave="transition duration-300 ease-in"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-20"
            >
                <About setShowAbout={setShowAbout}
                       setShowResume={setShowResume}
                       setShowWorks={setShowWorks}/>
                
            </Transition>

            <Transition
                as="div"
                className="absolute top-1 w-full h-full z-[100]"
                show={showResume}
                enter="transition duration-500 ease-out"
                enterFrom=" translate-y-full"
                enterTo=" translate-y-0"
                leave="transition duration-300 ease-in"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-20"
            >
                <Resume setShowResume={setShowResume}/>
                
            </Transition>

        </div>
    )
}

export default Hero