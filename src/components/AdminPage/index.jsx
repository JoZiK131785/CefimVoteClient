// #region IMPORTS

import "./index.css";

import Header from "../Header";
import FormSession from "../FormSession";

import { Link } from "react-router-dom";

// #endregion

const AdminPage = ({ socket }) => {

    // #region ######################## TAF ###############################

    
    // RECUPERER l'historique des sessions & Mapper sur le li + faire de la pagination


    // #endregion

    // #region INIT

    const [userName, setUsername] = useState("");

    // #endregion
    // #region FUNCTIONS

    useEffect(() => {
        setUsername(localStorage.getItem("userName"))
    }, [])

    // #endregion
    // #region RETURN
    return (
        <>
            <Header role={ userName } />

            <div className="container-section-admin">
                <section className="section-admin section-admin-one">
                    <h1 className="title-admin">
                        Nouvelle session
                    </h1>

                    <FormSession socket={socket} value="Créer la session" username={userName} />
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

    // #endregion
}

export default AdminPage;