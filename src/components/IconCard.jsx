

export default function IconCard({icon, description}) {
    return(
        <>
            <div className="px-4 py-6">
                {/* icon */}
                <div className="flex justify-center">
                    {icon}
                </div>
                {/* text */}
                <div className="text-center">
                    <>{description}</>
                </div>
            </div>
        </>
    )
}