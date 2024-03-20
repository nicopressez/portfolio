import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import NicolasPressezResume2 from './assets/NicolasPressezResume2.pdf'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const Resume = ( { setShowResume }) => {

        const [numPages, setNumPages] = useState(1);
    
        
      
    return (
        
        <div
        className={`bg-white w-2/3 absolute top-1 left-1/2 h-[60rem] transform -translate-x-1/2 z-50 rounded-xl font-roobertreg text-black p-12 overflow-hidden transition-transform
        
         `}
         style={{
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        
      >
        <FontAwesomeIcon icon={faXmark} 
            className="float-right h-6 w-6 hover:cursor-pointer"
            onClick={ () => setShowResume(false)}/>
            <h1 className="text-4xl">Resume</h1>
            <a
        href={NicolasPressezResume2}
        download="NicolasPressezResume2.pdf"
        className=" absolute right-10 top-16 mt-4 text-blue-500 hover:underline"
      >
        Download resume
      </a>
            <div className="w-30  ml-52 mr-52 mt-5">
            
            <Document
            className="w-full"
        file={NicolasPressezResume2}
      >
        <Page pageNumber={1} 
        scale={1.3}/>
      </Document>
      </div>
        </div>
    )
}

Resume.propTypes = {
    setShowResume: PropTypes.func
}

export default Resume