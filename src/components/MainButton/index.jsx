import "./index.css";

// We can add "disabled" on the button

const MainButton = ({ value }) => {
    return (
        <button className="main-button">
            {value}
        </button>
    )
}

export default MainButton;