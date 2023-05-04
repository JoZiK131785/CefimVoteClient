import Header from '../Header';
import FormLog from '../FormLog';
import './index.css';
import React, { useState, useEffect } from 'react';

const Home = ({ socket }) => {

    const [user, setUser] = useState("");

    useEffect(() => {
        socket.on('newUserResponse', (data) => console.log(data));
    }, [socket]);

    function test() {
        // Ajoute le joueur a la liste des joueurs connectes
        socket.emit("newUser", { user, socketID: socket.id });
    }

    return (
        // <div className="home">
        //     <input 
        //     type="text"
        //     value={user}
        //     onChange={(e) => setUser(e.target.value)}
        //     />
        //     <button onClick={test}></button>
        // </div>


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
                    />

                    <FormLog
                        title="En tant qu'utilisateur.ice :" labelOne="Nom prénom :"
                        placeholderOne="Carmen Blabla" labelTwo="Code de session :"
                        placeholderTwo="...."
                        type="text"
                        value="Se connecter"
                    />
                </div>
            </section>

        </>
    );
}

export default Home;