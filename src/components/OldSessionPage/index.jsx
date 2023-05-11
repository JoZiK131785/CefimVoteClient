import './index.css'

import LogoTrash from "../../assets/img/poubelle.svg"
import LogoPDF from "../../assets/img/editer.svg"

import Header from '../Header'
import ListVoter from "../ListVoter"
import ListInfos from "../ListInfos"
import TourResult from "../TourResult"
import MainButton from '../MainButton'



const OldSessionPage = () => {
    return (
        <>
            <Header role="admin" />

            <section className="section-old-session">
                <div className="set-titles">
                    <h1 className="title">Nom de la promo</h1>
                    <h2 className="subtitle">Session du 29 juin 2022</h2>
                </div>


                <div className="container-lists">
                    <ListInfos />
                    <ListVoter />

                    <div className="lists-results">
                        <TourResult title="1er tour" />
                        <TourResult title="2e tour" />
                    </div>
                </div>


                <div className="container-action-session">
                    <div className="action-session">
                        <img src={LogoPDF} alt="logo trash" />
                        <a href=".." target="_blank">PDF</a>
                    </div>

                    <div className="action-session">
                        <img src={LogoTrash} alt="logo trash" />
                        <a href=".." target="_blank">Supprimer</a>
                    </div>

                    <MainButton value="Retour à la page d'accueil" />
                </div>




            </section>
        </>
    )
}

export default OldSessionPage;