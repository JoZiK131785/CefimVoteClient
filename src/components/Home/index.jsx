// #region IMPORTS

import './index.css';

import Header from '../Header';
import FormLog from '../FormLog';

import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

// #endregion

const Home = ({ socket }) => {

    // #region ######################## TAF ###############################

    
    /* Message d'erreur Auth */
    /* Connecter table User DB */
    /* Recuperer Code session */
    
    /* Ameliorer systeme de connexion */


    // #endregion

    // #region INIT

    const navigate = useNavigate();
    const [ sessionCode, setSessionCode ] = useState("");

    // #endregion
    // #region FUNCTIONS

    useEffect(() => {

        socket.emit("getSessionCode");

        socket.on("newSessionCode", (data) => {
            setSessionCode(data);
        })
    }, [socket])

    const tryLogin = (firstInput, secondInput, index) => {
        index === 1 ? adminLogin(firstInput, secondInput) : userLogin(firstInput, secondInput);
    }

    const adminLogin = (userName, password) => {

        if(userName === "admin" && password === "admin") {
            localStorage.setItem("userName", userName);
            console.log(`${userName} is connected`)
            navigate("/admin");
        }
        else
            console.log("not admin");
    }

    const userLogin = (userName, code) => {        
        localStorage.setItem("userName", userName);

        if(code === sessionCode) {
            socket.emit("newUser", { userName, socketID: socket.id });
            navigate("/waiting");
        }
        else
            console.log("no code");
    }

    // #endregion
    // #region RETURN

    return (
        <>
            <Header />

            <section className="section-form">

                <h1 className="title-page">Connexion</h1>

                <div className="container-forms">

                    <FormLog
                        title="En tant qu'administrateur.ice :" labelOne="Nom d'administrateur.ice :" labelTwo="Mot de passe :"
                        placeholderOne="Carmen Blabla"
                        placeholderTwo="...."
                        type="password"
                        value="Se connecter"
                        submitFunction={tryLogin}
                        index={1}
                    />

                    <FormLog
                        title="En tant qu'utilisateur.ice :" labelOne="Nom prénom :"
                        placeholderOne="Carmen Blabla" labelTwo="Code de session :"
                        placeholderTwo="...."
                        type="text"
                        value="Se connecter"
                        submitFunction={tryLogin}
                        index={2}
                    />
                    
                </div>
            </section>

        </>
    );

    // #endregion
}

export default Home;