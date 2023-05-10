// #region IMPORTS

import './index.css';

import { formatDate, formatTime } from "../../utils/functions"

// #endregion

const ListInfos = ({ session }) => {

    const { promo, code, date, voters, del, supp } = session;   

    // #region RETURN

    return (
        <div className="container-infos">
            <h2 className="subtitle">Informations générales</h2>

            <p className="p-infos">
                <b>Promotion :</b> { promo && promo }
            </p>

            <p className="p-infos">
                <b>Code de connexion :</b> { code && code }
            </p>

            <p className="p-infos">
                <b>Date :</b> { date && formatDate(date) }
            </p>

            <p className="p-infos">
                <b>Heure de début : </b>{ date && formatTime(date) }
            </p>

            <p className="p-infos">
                <b>Heure de fin : </b>
            </p>

            <p className="p-infos">
                <b>Nombres de votant.e.s : </b>{ voters && voters.length }
            </p>

            {del && 
                <p className="p-infos">
                    <b>Délégué.e :</b> { del }
                </p>
            }

            {supp && 
                <p className="p-infos">
                    <b>Supléant.e :</b> { supp }
                </p>
            }
        </div>
    )

    // #endregion
}

export default ListInfos; 