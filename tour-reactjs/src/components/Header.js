import logo from "../img/logo.png"

function Li(props) {
    return <div className="nav-li"><a href={props.link}>{props.name}</a></div>;
}

function Nav() {
    return (
        <div className="nav row">
            <div className="col c-4">
                <img className="nav-logo" src={logo} alt="logo"></img>
            </div>
            <div className="col row c-8 center">
                <Li name="Sự kiện" link={"/"} />
                <Li name="Tour" link={"/"} />
                <Li name="Combo" link={"/"} />
                <div>
                    <div className="nav-btn">Trở thành nhà cung cấp</div>
                </div>

            </div>

        </div>
    )
}

function Slider() {
    return (
        <div className="slider" >
            <img className="slider-img" src="https://storage.googleapis.com/vntravel-fe/08e68043e39b437f31928598200ba52a/5443c471720b4ea2068d6e9fbe70bc7b/c68bffb755baeddc555fbf7cd66c36ae.jpg" alt="slide" />
        </div>
    )
}

function Header() {
    return (
        <div className="header">
            <Nav />
            <Slider />
        </div>
    )
}
export default Header