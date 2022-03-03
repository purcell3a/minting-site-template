function TopNav() {

    return (

        <React.Fragment>
            <Navbar
                scrolling="true"
                expand="sm"
                fixed='top'
                id='topnav'>
                <Navbar.Brand>
                    <Link to='/'id='Acclivity'>
                    <img id="topnav-logo"
                        src="ADD LOGO PATH HERE"
                        className="d-inline-block align-top"
                        alt="Logo"/>
                    </Link>
                </Navbar.Brand>
            </Navbar>
        </React.Fragment>
    );
}