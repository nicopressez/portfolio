import { Transition } from "@headlessui/react"

const Hero = () => {
    return (
        <div className=" bg-black w-screen h-screen">
            <h1 className="text-center text-[128px] text-white h-screen
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
        </div>
    )
}

export default Hero