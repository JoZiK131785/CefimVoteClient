// #region IMPORTS

import "./index.css"

import Header from "../Header"
import ListVoter from "../ListVoter"
import ListInfos from "../ListInfos"

import { useState, useEffect } from "react"
import { formatDate } from "../../utils/functions"

// #endregion

const SingleSession = ({ socket }) => {

    // #region INIT

    const [userName, setUsername] = useState("");
    const [session, setSession] = useState({});

    // #endregion
    // #region FUNCTIONS

    useEffect(() => {
        setUsername(localStorage.getItem("userName"))
    }, [])

    // #endregion
    // #region SOCKET

    useEffect(() => {
        socket.on("startSessionResponse", (session) => {
            setSession(session);
        })

        socket.on("newUserResponse", (data) => {
            setSession(data);
        })
    }, [ socket ]);

    // #endregion
    // #region RETURN

    return (
        <>
            <Header role={ userName } />

            <section className="section-single">
                <div className="set-titles">
                    <h1 className="title">{ session.promo }</h1>
                    <h2 className="subtitle">Session du { formatDate(session.date) }</h2>
                </div>

                <div className="container-lists">
                    <ListInfos session={ session } />
                    <ListVoter session={ session } />
                </div>
            </section>

        </>
    )
    // #endregion
}

export default SingleSession;