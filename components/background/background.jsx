const Background = () => {
    return(
        <div className="body-parallax z-0">
            <div className="parallax">
                <div className="parallax-group parallax-group--far-left"/>
                <div className="parallax-group parallax-group--mid-left"/>
                <div className="parallax-group parallax-group--mid-left"/>
                <div className="parallax-group parallax-group--mid-left"/>

                <div className="parallax-group parallax-group--mid-right"/>
                <div className="parallax-group parallax-group--mid-right"/>
                <div className="parallax-group parallax-group--mid-right"/>
                <div className="parallax-group parallax-group--far-right"/>
            </div>
        </div>
    )
}

export default Background;