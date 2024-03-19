import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import arrowblack from "./assets/arrowblack.png"
import { Transition } from '@headlessui/react';
import faitthubwide from './assets/faithhubwide.mp4'
import faithhubmobile from './assets/faithhubmobile.mp4'



const Works = ({ setShowWorks }) => {
    const [preview, setPreview] = useState("desktop")
    const [currentPage, setCurrentPage] = useState("faithhub")

    return (

        <div
        className={`bg-gray-200 w-2/3 absolute top-1 left-1/2 h-full transform -translate-x-1/2 z-50 rounded-xl text-black p-12 overflow-y-auto transition-transform
        
         `}
         style={{ overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        
        <h1 className="absolute text-4xl font-roobert ">Works</h1>
            <FontAwesomeIcon icon={faXmark} 
            className="absolute right-10 h-6 w-6 hover:cursor-pointer"
            onClick={ () => setShowWorks(false)}/>

            <Transition as='div'
            className="mt-20 w-full relative"
            show={currentPage === "faithhub"}
            enter='transition duration-500 ease-out'
            enterFrom='opacity-0 transform -translate-x-40 '
            enterTo='opacity-100 transform translate-x-0 '
            >
            <div className='absolute right-10 -top-4 transition duration-100
             font-roobert text-xl text-cyan-400 hover:text-cyan-500 hover:underline
             hover:cursor-pointer' 
             onClick={() => setCurrentPage("ecommerce")}> Next project <span className=" font-bold"> e-Commerce site</span>
              <FontAwesomeIcon icon={faArrowRight} 
              className='ml-2 w-5 h-5'/>
            </div>


            

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
                 
                 {preview === "desktop" && 
                 <div className='w-[45vw] h-[25.25vw] bg-gray-300 rounded-xl mr-auto ml-auto mt-4'>
                    <video autoPlay loop src={faitthubwide} className='h-full w-full p-2 rounded-xl object-cover'></video>
                 </div>}
                 {preview === "mobile" && 
                 <div className='w-[18vw] h-[32.25vw] bg-gray-300 rounded-xl mr-auto ml-auto mt-4'>
                    <video autoPlay loop src={faithhubmobile} className='h-full w-full p-2 rounded-xl object-cover'></video>
                 </div>}
                 <button className={`mr-5 mt-2 underline
                 ${preview !== "desktop" ? " text-gray-500 hover:text-gray-700" : ""}`}
                 onClick={ () => setPreview("desktop")}>Desktop</button>
                 <button className={`underline
                 ${preview !== "mobile" ? " text-gray-500 hover:text-gray-700" : ""}`}
                 onClick={ () => setPreview("mobile")}>Mobile</button>
                <div className='mt-5'>
                    <h3 className='text-2xl font-bold'>Technologies used</h3>
                    <ul className=' mt-2 flex flex-wrap gap-2 justify-center font-bold'>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>React
                        </li>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>Node.js
                        </li>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>Express
                        </li>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>MongoDB & Mongoose
                        </li>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>Tailwind
                        </li>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>Redux
                        </li>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>JWT
                        </li>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>AWS
                        </li>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>Multer
                        </li>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>Jest
                        </li>
                    </ul>
                </div>
                <div className='mt-7 '>
                    <h3 className='text-2xl font-bold'>What I&apos;ve built and learned</h3>
                    <ul className='mt-2 text-lg'>
                        <li className='hover:text-cyan-400'>
                            <span className='font-bold  '>User authentication: </span>Implementing secure user authentication using <span className='font-bold'>BCRYPT</span> for password encryption, <span className='font-bold'>Passport</span> and <span className='font-bold'>JWT tokens</span> to ensure that only authorized users can access the platform.
                        </li>
                        <li className='hover:text-cyan-400'>
                            <span className='font-bold  '>Profile management: </span>Allowing users to <span className=' font-bold'>create, edit and delete</span> their profiles, including personal information, profile pictures, and bio.
                        </li>
                        <li className='hover:text-cyan-400'>
                            <span className='font-bold  '>Post Creation and Management: </span>Enabling users to <span className=' font-bold'>create, edit and delete</span> posts across various topics such as prayer requests, testimonies, and discussions. <span className='font-bold'>Prayer requests can be made anonymous.</span>
                        </li>
                        <li className='hover:text-cyan-400'>
                            <span className='font-bold  '>Interacting with posts and comments: </span> Granting to users the possibility to <span className=' font-bold'>comment, like and interact</span> with other posts.
                        </li>
                        <li className='hover:text-cyan-400'>
                            <span className='font-bold  '>Personalized feed: </span>Implementing topic-based feeds to categorize posts and allow users to explore content based on their <span className='font-bold'>preferences.</span>
                        </li>
                        <span className='font-bold'>Responsive Design: </span> Developing a responsive and user-friendly interface that ensures a seamless experience <span className='font-bold'>across different devices</span> and screen sizes.
                    </ul>
                </div>
                <div className=' mt-7 '>
                    <h3 className='text-2xl font-bold mb-2'> Ongoing development</h3>
                    <h4 className='italic'>I&apos;m still actively working on this project as I&apos;ve found great enjoyment in its initial development stages. I&apos;ve decided to focus on making this project fully-fledged before moving on to other endeavors.
                        Following is a list of the features I&apos;m currently developping. Please note that these are subject to change as the project evolves.
                    </h4>
                    <ul className='mt-2 text-lg'>
                        <li className='hover:text-cyan-400'>
                            <span className='font-bold  '>Code refactoring: </span>As this project marks my first significant venture into long-term development, the codebase has naturally grown quite extensive. I'm currently engaged in refactoring the code to enhance its readability, maintainability, and scalability.
                        </li>
                        <li className='hover:text-cyan-400'>
                            <span className='font-bold  '>Church Groups Integration:  </span>One of the upcoming features I'm excited about is the integration of church groups functionality. This will include features such as locating nearby churches, accessing information on upcoming services, events, and more.
                        </li>
                        <li className='hover:text-cyan-400'>
                            <span className='font-bold  '>Messaging System: </span>Creating a smooth messaging experience is a top priority. I'll be focusing on building a system that allows users to chat seamlessly with each other. This involves ensuring messages are delivered quickly and reliably, even during peak usage times.
                        </li>
                        <li className='hover:text-cyan-400'>
                            <span className='font-bold  '>Live Notifications: </span> I'll be working on implementing a system that notifies users instantly about important events and interactions on the platform. This will help users stay connected and informed, enhancing the overall user experience.
                        </li>
                    </ul>
                </div>
            </div>
            </Transition>

            <Transition as='div'
            className="mt-20 w-full relative"
            show={currentPage === "ecommerce"}
            enter='transition duration-500 ease-out'
            enterFrom='opacity-0 transform translate-x-20 '
            enterTo='opacity-100 transform translate-x-0 '
            >
            <div className='absolute left-10 -top-4  transition duration-100
             font-roobert text-xl text-cyan-400 hover:text-cyan-500 hover:underline
             hover:cursor-pointer' 
             onClick={() => setCurrentPage("faithhub")}> 
              <FontAwesomeIcon icon={faArrowLeft} 
              className='mr-2 w-5 h-5'/>
             Previous project <span className=" font-bold"> FaithHub</span>
             
            </div>
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
                 
                 {preview === "desktop" && 
                 <div className='w-[52vw] h-[29.25vw] bg-gray-300 rounded-xl mr-auto ml-auto mt-4'>
                
                 </div>}
                 {preview === "mobile" && 
                 <div className='w-[18vw] h-[29.25vw] bg-gray-300 rounded-xl mr-auto ml-auto mt-4'>
                 </div>}
                 <button className={`mr-5 mt-2 underline
                 ${preview !== "desktop" ? " text-gray-500 hover:text-gray-700" : ""}`}
                 onClick={ () => setPreview("desktop")}>Desktop</button>
                 <button className={`underline
                 ${preview !== "mobile" ? " text-gray-500 hover:text-gray-700" : ""}`}
                 onClick={ () => setPreview("mobile")}>Mobile</button>
            <div className='mt-5'>
                    <h3 className='text-2xl font-bold'>Technologies used</h3>
                    <ul className=' mt-2 flex flex-wrap gap-2 justify-center font-bold'>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>React
                        </li>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>Tailwind
                        </li>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>Jest
                        </li>
                        <li className=' border-2  border-black pl-2 pr-2 rounded-full text-xl hover:border-cyan-500 hover:text-cyan-500
                         transition-colors duration-100 hover:cursor-pointer'>React Router
                        </li>
                    </ul>
                </div>
            </div>
            </Transition>
        </div>
        
    )
}

Works.propTypes = {
    setShowWorks: PropTypes.func
}

export default Works