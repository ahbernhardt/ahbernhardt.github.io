
const Background = ({children}) => {
    return(
        <div className="flex flex-col body-parallax px-[12px] sm:px-[24px] relative">
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
            <div className="absolute top-0">
                {children}  
            </div>
        </div>
    )
}

export default Background;