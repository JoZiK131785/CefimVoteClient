import "./index.css"
import Header from "../Header"
import ListVoter from "../ListVoter"
import ListInfos from "../ListInfos"

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
                </div>
            </section>

        </>
    )
}

export default SingleSession;