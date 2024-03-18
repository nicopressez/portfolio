import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Resume = ( { setShowResume }) => {
    return (
        
        <div
        className={`bg-gray-200 w-2/3 absolute top-1 left-1/2 h-full transform -translate-x-1/2 z-50 rounded-xl font-roobertreg text-black p-12 overflow-y-auto transition-transform
        
         `}
         style={{ overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <FontAwesomeIcon icon={faXmark} 
            className="float-right h-6 w-6 hover:cursor-pointer"
            onClick={ () => setShowResume(false)}/>
            <h1 className="text-4xl">Resume</h1>
            <p className="text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quis fugit vitae repellendus itaque iusto, quae illo at dolorum facere delectus fuga magni, laborum assumenda sed. Mollitia quibusdam sequi iusto?</p>
            
        </div>
    )
}

Resume.propTypes = {
    setShowResume: PropTypes.func
}

export default Resume