import PropTypes from 'prop-types';
import aboutpic from './assets/aboutpic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const About = ({ setShowAbout, setShowResume, setShowWorks}) => {
    return (
        
        <div
        className={`bg-gray-200 w-2/3 absolute top-1 left-1/2 h-full transform -translate-x-1/2 z-50 rounded-xl text-black p-12 overflow-y-auto transition-transform
        
         `}
         style={{ overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <FontAwesomeIcon icon={faXmark} 
            className="float-right h-6 w-6 hover:cursor-pointer"
            onClick={ () => setShowAbout(false)}/>
            <h1 className="text-4xl font-roobert">About me</h1>
            <div className='text-center font-roobert'>
            <img src={aboutpic}
        className=' object-cover h-80 w-80 rounded-full border-red-500 border-4 p-[0.20rem]
         ml-auto mr-auto mb-8'/>

<p className='mb-3'>Hey there! I'm <span className='text-red-500 font-bold'>Nicolas Pressez</span>, a self-taught full-stack web developer with a focus on <span className='text-red-500 font-bold'>front-end development</span> and expertise in the <span className='text-red-500 font-bold'>MERN stack</span>.</p>

<p className='mb-3'>Having left my previous job in <span className='text-red-500 font-bold'>October</span> to focus on learning web development full-time, I've dedicated the past six months to intensive study. I've been diligently going through different courses, focusing on <span className='text-red-500 font-bold'>building projects</span> along with learning various technologies. My journey as a web developer has been fueled by a relentless pursuit of improvement, and I've poured countless hours into mastering the craft. I'm driven by a deep-seated passion for programming and a relentless determination to excel in this field.</p>

<p className='mb-3'>While I'm still in the early stages of my career, I'm committed to continuous learning and growth. I thrive on <span className='text-red-500 font-bold'>challenges</span> and embrace opportunities to push myself beyond my comfort zone. Every obstacle I encounter serves as a stepping stone for further development, and I'm always eager to tackle new challenges head-on.</p>

<p className='mb-3'>I firmly believe that the <span className='text-red-500 font-bold'>key to success</span> lies in consistent effort and a growth-oriented mindset. I'm not content with merely meeting expectations; I strive to exceed them at every opportunity. Each line of code I write is a testament to my dedication to excellence and my unwavering commitment to self-improvement.</p>

<p className='mb-3'>From a young age, I've been <span className='text-red-500 font-bold'>fascinated by technology</span> and its potential to shape the world. I'm driven by a passion for innovation and a desire to create meaningful solutions that enhance user experiences and solve real-world problems.</p>

<p className='mb-3'>Outside of coding, I have a diverse range of interests. I'm an avid sports enthusiast, particularly enjoying activities such as <span className='text-red-500 font-bold'>running and hiking</span>. Reading is another passion of mine, allowing me to unwind and explore new ideas.</p>

<p className='mb-3'>I'm fully dedicated to <span className='text-red-500 font-bold'>honing my skills in the MERN stack</span> and frontend development, aiming to create polished and impactful web experiences. My goal is to leverage my knowledge and creativity to build innovative solutions that resonate with users.</p>


        </div>
        </div>
    )
}

About.propTypes = {
    setShowAbout: PropTypes.func,
    setShowResume: PropTypes.func,
    setShowWorks: PropTypes.func
}

export default About