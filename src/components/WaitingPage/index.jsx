// #region IMPORTS

import "./index.css";

import Header from "../Header";
import SunLogo from "../../assets/img/soleil.svg"

import { useEffect, useState } from "react";

// #endregion

const WaitingPage = ({ socket }) => {

    // #region INIT

    const [userName, setUsername] = useState("");
    const [resp, setResp] = useState("");

    // #endregion
    // #region FUNCTIONS

    useEffect(() => {
        setUsername(localStorage.getItem("userName"))
    }, [])

    useEffect(() => {
        socket.emit("getResp");
        
        socket.on("setResp", (data) => {
            setResp(data);
        })
    }, [socket])

    // #endregion
    // #region RETURN

    return (
        <>
            <Header role={ userName } />

            <section className="section-waiting">
                <h1 className="title-page">En attente de { resp }...</h1>

                <div className="container-img-waiting">
                    <img src={SunLogo} alt="Sun logo" className="img-waiting" />
                </div>
            </section>
        </>
    )

    // #endregion
}

export default WaitingPage;