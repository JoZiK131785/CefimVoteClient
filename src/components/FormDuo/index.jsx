import './index.css';
import MainButton from '../MainButton';

const FormDuo = ({ value }) => {
    return (
        <form action="" className="form">
            <div className="form-input">
                <label htmlFor=""></label>
            </div>

            <div className="form-input">
                <label htmlFor=""></label>
            </div>

            <div className="form-button">
                <MainButton value={value} />
            </div>
        </form>
    );
}

export default FormDuo;