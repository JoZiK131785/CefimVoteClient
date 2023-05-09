import "./index.css";
import Signature from "../Signature";
import MainButton from "../MainButton";

const FormSession = ({ value }) => {
    return (
        <form action="" className=" form-label">

            <div className="form-input">
                <label htmlFor="promo-name">Nom de la promotion :</label>
                <input type="text" name="promo-name" id="input-promo-name" placeholder="37_DWWM_2022_3" />
            </div>

            <div className="form-input">
                <label htmlFor="promo-resp">Responsable :</label>
                <input type="text" name="promo-resp" id="input-promo-name" placeholder="Carmen" />
            </div>

            <Signature />

            <div className="form-button">
                <MainButton value={value} />
            </div>
        </form>

    )
}

export default FormSession;