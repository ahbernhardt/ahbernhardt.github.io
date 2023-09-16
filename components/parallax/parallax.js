const Parallax = () => {
    return(
        <div className="parallax__layer parallax__layer--background">
            <div className="body-parallax">
                <div className="parallax">
                    <div className="parallax-group parallax-group--far-left">
                        <div className="parallax-item parallax-item--o parallax-item--left"></div>
                        <div className="parallax-item parallax-item--x parallax-item--left"></div>
                        <div className="parallax-item parallax-item--o parallax-item--left"></div>
                        <div className="parallax-item parallax-item--x"></div>
                        <div className="parallax-item parallax-item--x"></div>
                        <div className="parallax-item parallax-item--x"></div>
                    </div>
                    <div className="parallax-group parallax-group--mid-left">
                        <div className="parallax-item parallax-item--x"></div>
                        <div className="parallax-item parallax-item--o"></div>
                        <div className="parallax-item parallax-item--x"></div>
                    </div>
                    <div className="parallax-group parallax-group--mid-right">
                        <div className="parallax-item parallax-item--o"></div>
                        <div className="parallax-item parallax-item--o"></div>
                        <div className="parallax-item parallax-item--o"></div>
                    </div>
                    <div className="parallax-group parallax-group--far-right">
                        <div className="parallax-item parallax-item--x"></div>
                        <div className="parallax-item parallax-item--x"></div>
                        <div className="parallax-item parallax-item--x"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parallax;