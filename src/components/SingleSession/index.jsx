import "./index.css"

import Header from "../Header"
import ListVoter from "../ListVoter"
import ListInfos from "../ListInfos"
import FormDuo from "../FormDuo"




const SingleSession = () => {
    return (
        <>
            <Header role="administrateur.ice" />


            <section className="section-single">
                <div className="set-titles">
                    <h1 className="title">Nom de la promo</h1>
                    <h2 className="subtitle">Session du 29 juin 2022</h2>
                </div>

                <div className="container-lists">
                    <ListInfos />
                    <ListVoter />
                    <FormDuo />

                    <div className="list-duo">
                        <h2 className="subtitle">
                            Listes des duos
                        </h2>


                    </div>

                </div>
            </section>

        </>
    )
}

export default SingleSession;