// #region IMPORTS

import "./index.css";

import Signature from "../Signature";
import MainButton from "../MainButton";

import { useState, useEffect } from "react";
import { startSession } from "../../utils/functions";
import { useNavigate } from "react-router";

// #endregion

const FormSession = ({ socket, value, username }) => {

    // #region ######################## TAF ###############################


    // Verifier les champs du formulaire avant d'envoyer la requete => msg d'erreur


    // #endregion

    // #region INIT

    const [respName, setRespName] = useState(username);
    const [promoName, setPromoName] = useState("");
    const navigate = useNavigate();

    // #endregion
    // #region FUNCTIONS

    useEffect(() => {
        setRespName(username);
    }, [username]);

    const handleChangeResp = (event) => {
        setRespName(event.target.value);
    }

    const handleChangePromo = (event) => {
        setPromoName(event.target.value);
    }

    const start = (e) => {
        e.preventDefault();
        localStorage.setItem("userName", respName);
        startSession(socket, promoName, respName, Date.now());
        navigate("/session");
    }

    // #endregion
    // #region RETURN

    return (
        <form action="" className=" form-label">

            <div className="form-input">
                <label htmlFor="promo-name">Nom de la promotion :</label>
                <input 
                    type="text"
                    value={promoName}
                    name="promo-name" 
                    id="input-promo-name" 
                    placeholder="37_DWWM_2022_3" 
                    onChange={handleChangePromo}
                />
            </div>

            <div className="form-input">
                <label htmlFor="promo-resp">Responsable :</label>
                <input 
                    type="text" 
                    value={respName} 
                    name="promo-resp" 
                    id="input-promo-name" 
                    placeholder="Carmen"
                    onChange={handleChangeResp}
                />
            </div>

            <Signature />

            <div className="form-button">
                <MainButton value={value} toggle={start} />
            </div>
        </form>

    )

    // #endregion
}

export default FormSession;