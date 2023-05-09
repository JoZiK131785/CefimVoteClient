import "./index.css";
import LogoCEFIM from "../../assets/img/logo-blanc.webp";

const Header = ({ role }) => {
    return (
        <header className="main-header">
            <div className="container-logo">
                <img src={LogoCEFIM} alt="logo CEFIM" className="img-logo" />

                <h1 className="title-logo">Vote</h1>
            </div>

            <h1 className="title-logo">{role}</h1>
        </header>
    )
}

export default Header;