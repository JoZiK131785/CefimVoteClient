import './index.css';

import Signature from '../Signature';
import MainButton from '../MainButton';




//We have to be able to map on the ... to add a duo or to delete one




const FormVote = () => {
    return (
        <form action="" className="form form-vote">

            <div className="form-vote-container">
                <div>
                    <h2 className="title-form">
                        Voter pour votre duo préféré :
                    </h2>

                    <div className="input-radio">
                        <input value type="radio" name="first-choice" />
                        <label htmlFor="first-choice">gdfggd</label>
                    </div>

                    <div className="input-radio">
                        <input value type="radio" name="no-choice" />
                        <label htmlFor="no-choice">ne se prononce pas</label>
                    </div>
                </div>

                <div>
                    <Signature />
                </div>
            </div>


            <div className="form-button">
                <MainButton value="voter" />
            </div>
        </form>
    )
}

export default FormVote;