function Header() {
    return (
        <header>
            <div className="header-box container d-flex justify-content-between">
                <div className="brand-name">                    
                    <h6><em>Looking for new mobile?</em></h6>
                    <h1>Buy Right Now!</h1>
                    <button className="btn">Order now</button>
                </div>
                <div className="Mobile-logo">
                    <img src="mobilePic.png" alt="mobile-logo" />
                </div>
            </div>
        </header>
    );
}

export default Header;