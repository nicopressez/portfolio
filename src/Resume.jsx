const Resume = () => {
    return (
        
        <div
        className={`bg-gray-200 w-2/3 absolute top-1 left-1/2 h-full transform -translate-x-1/2 z-50 rounded-xl font-roobertreg text-black p-12 overflow-y-auto transition-transform
        
         `}
         style={{ overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
            <h1 className="text-4xl">Resume</h1>
            <p className="text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quis fugit vitae repellendus itaque iusto, quae illo at dolorum facere delectus fuga magni, laborum assumenda sed. Mollitia quibusdam sequi iusto?</p>
            
        </div>
    )
}

export default Resume