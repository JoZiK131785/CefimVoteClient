import "./index.css";
import MainButton from "../MainButton";

const FormLog = ({ title, labelOne, labelTwo, placeholderOne, placeholderTwo, type, value }) => {
    return (
        <form action="" className="form">
            <h2 className="title-form">
                {title}
            </h2>

            <div className="form-input first-input">
                <label htmlFor="name">{labelOne}</label>
                <input type="text" name="name" placeholder={placeholderOne} />
            </div>

            <div className="form-input secondary-input">
                <label htmlFor="name">{labelTwo}</label>
                <input type={type} name="name" placeholder={placeholderTwo} />
            </div>

            <div className="form-button">
                <MainButton value={value} />
            </div>
        </form>
    )
}

export default FormLog;