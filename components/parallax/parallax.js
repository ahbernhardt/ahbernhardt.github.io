const Parallax = () => {
    return(
        <div className="body-parallax">
            <div className="parallax">
                {/* far-left*/}
                <div className="parallax-group parallax-group--far-left">
                    <div className="parallax-item parallax-item--o parallax-item--left"/>
                    <div className="parallax-item parallax-item--x"/>
                    <div className="parallax-item parallax-item--x parallax-item--left"/>
                    <div className="parallax-item parallax-item--o parallax-item--left"/>
                    <div className="parallax-item parallax-item--x"/>
                    <div className="parallax-item parallax-item--x"/>
                </div>
                {/* mid-left */}
                <div className="parallax-group parallax-group--mid-left">
                    <div className="parallax-item parallax-item--x"/>
                    <div className="parallax-item parallax-item--o"/>
                    <div className="parallax-item parallax-item--x"/>
                </div>
                {/* mid-right */}
                <div className="parallax-group parallax-group--mid-left">
                    <div className="parallax-item parallax-item--o"/>
                    <div className="parallax-item parallax-item--o"/>
                    <div className="parallax-item parallax-item--o"/>
                </div>
                {/*far-right */}
                <div className="parallax-group parallax-group--mid-left">
                    <div className="parallax-item parallax-item--x"/>
                    <div className="parallax-item parallax-item--x"/>
                    <div className="parallax-item parallax-item--x"/>
                </div>
            </div>
        </div>
    )
}

export default Parallax;