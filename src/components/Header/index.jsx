import "./index.css";
import LogoCEFIM from "../../assets/img/logo-blanc.webp";

const Header = () => {
    return (
        <header className="main-header">
            <div className="container-logo">
                <img src={LogoCEFIM} alt="logo CEFIM" className="img-logo" />

                <h1 className="title-logo">Vote</h1>
            </div>

            {/* <h1 className="title-logo">{ici en props si c'est un.e admin ou un.e votant.e}</h1> */}
        </header>
    )
}

export default Header;