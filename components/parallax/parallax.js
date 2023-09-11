const Parallax = () => {
    return(
        <div className="w-full h-[100vh] fixed">
            <div className="relative flex w-full h-[100vh]">
                <ParallaxGroup />
                <ParallaxGroup />
                <ParallaxGroup />
                <ParallaxGroup />
                <ParallaxGroup />
            </div>
        </div>
    )
}

export default Parallax;

const ParallaxGroup = () => {
    return (
        <div className="relative w-1/6 border-r-[1px] border-[#687789] block">
            <div className="w-[1.5em] absolute block top-0 -right-[0.78em] mb-1.5 aspect-square
            before:absolute before:block before:content[''] before:w-[1.5em] before:h-[0.375em] before:rotate-45 before:bg-[#687789]
            after:absolute after:block before:content[''] after:w-[1.5em] after:h-[0.375em] after:-rotate-45 after:bg-[#687789]"/>
            <div className="w-[1.5em] absolute block top-[25%] -right-[0.78em] mb-1.5 aspect-square border-[0.375em] border-[#687789] bg-[#556271] rounded-full"/>
            <div className="w-[1.5em] absolute block top-[50%] -right-[0.78em] mb-1.5 aspect-square
            before:absolute before:block before:content[''] before:w-[1.5em] before:h-[0.375em] before:rotate-45 before:bg-[#687789]
            after:absolute after:block before:content[''] after:w-[1.5em] after:h-[0.375em] after:-rotate-45 after:bg-[#687789]"/>
            <div className="w-[1.5em] absolute block top-[75%] -right-[0.78em] mb-1.5 aspect-square border-[0.375em] border-[#687789] bg-[#556271] rounded-full"/>
            <div className="w-[1.5em] absolute block top-[100%] -right-[0.78em] mb-1.5 aspect-square
            before:absolute before:block before:content[''] before:w-[1.5em] before:h-[0.375em] before:rotate-45 before:bg-[#687789]
            after:absolute after:block before:content[''] after:w-[1.5em] after:h-[0.375em] after:-rotate-45 after:bg-[#687789]"/>
        </div>
    )
}