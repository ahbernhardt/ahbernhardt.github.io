
const Background = ({children}) => {
    return(
        <div className="w-full min-h-[1200px] max-h-[5600px] absolute top-0 left-0 bottom-0 right-0 z-0 fixed px-[12px] sm:px-[24px]">
            <div className="parallax">
                <div className="parallax-group"/>
                <div className="parallax-group"/>
                <div className="parallax-group"/>
                <div className="parallax-group"/>
                <div className="parallax-group"/>
                <div className="parallax-group"/>
                <div className="parallax-group"/>
                <div className="parallax-group"/>
                <div className="parallax-group"/>
                <div className="parallax-group"/>
                <div className="parallax-group"/>
            </div>
            {/* <div className="top-0 z-3">
                {children}
            </div> */}
        </div>
    )
}

export default Background;