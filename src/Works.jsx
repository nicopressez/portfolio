import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import arrowblack from "./assets/arrowblack.png"
import { Transition } from '@headlessui/react';



const Works = ({ setShowWorks }) => {
    const [faithhubPreview, setFaithhubPreview] = useState("desktop")
    const [currentPage, setCurrentPage] = useState("faithhub")

    return (

        <div
        className={`bg-gray-200 w-2/3 absolute top-1 left-1/2 h-full transform -translate-x-1/2 z-50 rounded-xl text-black p-12 overflow-y-auto transition-transform
        
         `}
         style={{ overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
            <FontAwesomeIcon icon={faXmark} 
            className="absolute right-10 h-6 w-6 hover:cursor-pointer"
            onClick={ () => setShowWorks(false)}/>

            <Transition
            show={currentPage === "faithhub"}>
            <div className='absolute right-10 top-20 transition duration-100
             font-roobert text-xl text-cyan-400 hover:text-cyan-500 hover:underline
             hover:cursor-pointer' 
             onClick={() => setCurrentPage("ecommerce")}> Next project <span className=" font-bold"> e-Commerce site</span>
              <FontAwesomeIcon icon={faArrowRight} 
              className='ml-2 w-5 h-5'/>
            </div>


            <h1 className="text-4xl font-roobert mb-10">Works</h1>

            <div className='text-center font-roobert'>
                <h2 className='text-5xl text-cyan-400 font-bold 
                 tracking-wide'>FaithHub</h2>
                 <p className='italic mb-3'>a Full-Stack social media app</p>
                 
                <div className="group inline-block relative ml-5">
                <a href='https://faithhub-demo.netlify.app/' target='_blank'
                 className=' font-bold text-xl'>Live demo</a>
            <img src={arrowblack}
            className="opacity-0 inline h-5 w-5 mr-10 mb-1 
            transition-opacity duration-300 group-hover:opacity-100" />
            <div
            className="mt-2 absolute scale-x-0 bottom-0 left-0 w-28 bg-black h-[3px] 
            transition transform duration-500 origin-left group-hover:scale-x-100"
            >
            </div>
            </div>

            <div className="group inline-block relative">
                <a href='https://github.com/nicopressez/faithhub' target='_blank'
                 className=' font-bold text-xl'>Repository</a>
            <img src={arrowblack}
            className="opacity-0 inline h-5 w-5 mb-1 
            transition-opacity duration-300 group-hover:opacity-100" />
            <div
            className="mt-2 absolute scale-x-0 bottom-0 left-0 w-28 bg-black h-[3px] 
            transition transform duration-500 origin-left group-hover:scale-x-100"
            >
            </div>
            </div>
                 
                 {faithhubPreview === "desktop" && 
                 <div className='w-[52vw] h-[29.25vw] bg-gray-300 rounded-xl mr-auto ml-auto mt-4'>
                 </div>}
                 {faithhubPreview === "mobile" && 
                 <div className='w-[18vw] h-[29.25vw] bg-gray-300 rounded-xl mr-auto ml-auto mt-4'>
                 </div>}
                 <button className={`mr-5 mt-2 underline
                 ${faithhubPreview !== "desktop" ? " text-gray-500 hover:text-gray-700" : ""}`}
                 onClick={ () => setFaithhubPreview("desktop")}>Desktop</button>
                 <button className={`underline
                 ${faithhubPreview !== "mobile" ? " text-gray-500 hover:text-gray-700" : ""}`}
                 onClick={ () => setFaithhubPreview("mobile")}>Mobile</button>

            </div>
            </Transition>

            <Transition
            show={currentPage === "ecommerce"}>
            <div className='absolute left-10 top-24 transition duration-100
             font-roobert text-xl text-cyan-400 hover:text-cyan-500 hover:underline
             hover:cursor-pointer' 
             onClick={() => setCurrentPage("faithhub")}> 
              <FontAwesomeIcon icon={faArrowLeft} 
              className='mr-2 w-5 h-5'/>
             Previous project <span className=" font-bold"> FaithHub</span>
             
            </div>


            <h1 className="text-4xl font-roobert mb-10">Works</h1>

            <div className='text-center font-roobert'>
                <h2 className='text-5xl font-bold 
                 tracking-wide'>e-Commerce site</h2>
                 <p className='italic mb-3'>a React online shopping store</p>
                 
                <div className="group inline-block relative ml-5">
                <a href='https://nicopressez-ecommerce.netlify.app/' target='_blank'
                 className=' font-bold text-xl'>Live demo</a>
            <img src={arrowblack}
            className="opacity-0 inline h-5 w-5 mr-10 mb-1 
            transition-opacity duration-300 group-hover:opacity-100" />
            <div
            className="mt-2 absolute scale-x-0 bottom-0 left-0 w-28 bg-black h-[3px] 
            transition transform duration-500 origin-left group-hover:scale-x-100"
            >
            </div>
            </div>

            <div className="group inline-block relative">
                <a href='https://github.com/nicopressez/Ecommerce-site' target='_blank'
                 className=' font-bold text-xl'>Repository</a>
            <img src={arrowblack}
            className="opacity-0 inline h-5 w-5 mb-1 
            transition-opacity duration-300 group-hover:opacity-100" />
            <div
            className="mt-2 absolute scale-x-0 bottom-0 left-0 w-28 bg-black h-[3px] 
            transition transform duration-500 origin-left group-hover:scale-x-100"
            >
            </div>
            </div>
                 
                 {faithhubPreview === "desktop" && 
                 <div className='w-[52vw] h-[29.25vw] bg-gray-300 rounded-xl mr-auto ml-auto mt-4'>
                 </div>}
                 {faithhubPreview === "mobile" && 
                 <div className='w-[18vw] h-[29.25vw] bg-gray-300 rounded-xl mr-auto ml-auto mt-4'>
                 </div>}
                 <button className={`mr-5 mt-2 underline
                 ${faithhubPreview !== "desktop" ? " text-gray-500 hover:text-gray-700" : ""}`}
                 onClick={ () => setFaithhubPreview("desktop")}>Desktop</button>
                 <button className={`underline
                 ${faithhubPreview !== "mobile" ? " text-gray-500 hover:text-gray-700" : ""}`}
                 onClick={ () => setFaithhubPreview("mobile")}>Mobile</button>

            </div>
            </Transition>
        </div>
        
    )
}

Works.propTypes = {
    setShowWorks: PropTypes.func
}

export default Works