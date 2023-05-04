import "./index.css";
import MainButton from "../MainButton";

const FormLog = ({ title, labelOne, labelTwo, placeholderOne, placeholderTwo, type, value }) => {
    return (
        <form action="" className="form-log">
            <h2 className="title-form">
                {title}
            </h2>

            <div className="form-input first-input">
                <label for="name">{labelOne}</label>
                <input type="text" name="name" id="input-name" placeholder={placeholderOne} />
            </div>

            <div className="form-input secondary-input">
                <label for="name">{labelTwo}</label>
                <input type={type} name="name" id="input-name" placeholder={placeholderTwo} />
            </div>

            <div className="form-button">
                <MainButton value={value} />
            </div>
        </form>
    )
}

export default FormLog;