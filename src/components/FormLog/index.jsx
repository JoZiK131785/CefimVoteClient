import "./index.css";
import MainButton from "../MainButton";
import { useRef } from "react";

const FormLog = ({ title, labelOne, labelTwo, placeholderOne, placeholderTwo, type, value, submitFunction, index }) => {

    const firstInput = useRef(null);
    const secondInput = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const firstString = firstInput.current.value;
        const secondString = secondInput.current.value;

        submitFunction(firstString, secondString, index);
    };

    return (
      
        <form action="submit" className="form-log" onSubmit={handleSubmit}>
            <h2 className="title-form">
                {title}
            </h2>

            <div className="form-input first-input">
                <label htmlFor="name">{labelOne}</label>
                <input type="text" name="name" placeholder={placeholderOne} ref={firstInput} />
                  
            </div>

            <div className="form-input secondary-input">
                <label htmlFor="name">{labelTwo}</label>

                <input type={type} name="name" placeholder={placeholderTwo} ref={secondInput} />
                  
            </div>

            <div className="form-button">
                <MainButton value={value} />
            </div>
        </form>
    )
}

export default FormLog;