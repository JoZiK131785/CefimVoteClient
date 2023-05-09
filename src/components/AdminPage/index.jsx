import "./index.css";
import { Link } from "react-router-dom";
import Header from "../Header";
import FormSession from "../FormSession";

const AdminPage = () => {
    // Mapper sur le li + faire de la pagination


    return (
        <>
            <Header role="administrateur.ice" />

            <div className="container-section-admin">
                <section className="section-admin section-admin-one">
                    <h1 className="title-admin">
                        Nouvelle session
                    </h1>

                    <FormSession value="Créer la session" />
                </section>


                <section className="section-admin">
                    <h1 className="title-admin">
                        Sessions précédentes
                    </h1>


                    <div className="container-list-session">
                        <ul className="list-sessions">

                            {/* élément sur lequel il faut maper */}
                            <li className="session">
                                <p className="p-session">
                                    <b>Promo DWDDD_2022_3</b> session du 19 juin 2023
                                </p>
                                <p className="p-session-link">→ <Link className="p-session-link" to="/">voir</Link></p>
                            </li>

                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AdminPage;