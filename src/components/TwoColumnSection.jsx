

export default function TwoColumnSection({title, description, img, reversed}) {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {reversed ?
            <>
            {/* img */}
            <div>
                
                <img src={`${img}`} alt='technician' className="w-full h-[400px] object-cover"/>
            </div>
            {/* words */}
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl md:pb-2 font-bold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
            
        </> : <>
                {/* words */}
                <div className="flex flex-col justify-center order-2 md:order-1">
                    <h2 className="text-2xl md:text-4xl md:pb-2 font-bold mb-2">{title}</h2>
                    <p className="text-gray-700">{description}</p>
                </div>
                {/* img */}
                <div className="order-1 md:order-2">
                    
                    <img src={`${img}`} alt='technician' className="w-full h-[400px] object-cover"/>
                </div>
            </>}
            
            
        </div>
    )
}