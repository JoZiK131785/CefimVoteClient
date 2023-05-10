import "./index.css";

// We can add "disabled" on the button

const MainButton = ({ value, toggle }) => {
    return (
        <button className="main-button" onClick={toggle}>    
            {value}
        </button>
    )
}

export default MainButton;