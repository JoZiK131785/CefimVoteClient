import "./index.css";
import Header from "../Header";
import SunLogo from "../../assets/img/soleil.svg"

const WaitingPage = () => {
    return (
        <>
            <Header role="utilisateur.ice" />

            <section className="section-waiting">
                <h1 className="title-page">En attente de l'administrateur.ice...</h1>

                <div className="container-img-waiting">
                    <img src={SunLogo} alt="Sun logo" className="img-waiting" />
                </div>
            </section>
        </>
    )
}

export default WaitingPage;