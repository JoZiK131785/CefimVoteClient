import './index.css';

// We need to be able to map on the p according ti the number of voters

// change to "X" to the right number

const TourResult = ({ title }) => {
    return (
        <div className="tours-result-container">
            <h2 className='subtitle'>{title}</h2>

            <p className="p-infos">
                <b>Nombre de votant.s :</b> 18
            </p>

            <p className="p-infos">
                <b>Ne se prononce pas :</b> 2 votes
            </p>


            {/* here to map */}
            <p className="p-infos">
                <b>Nom Prénom et Nom Prénom :</b> 6 votes
            </p>

            <p className="p-infos">
                <b>Nom Prénom et Nom Prénom :</b> 4 votes
            </p>

            <p className="p-infos">
                <b>Nom Prénom et Nom Prénom :</b> 6 votes
            </p>
        </div>
    )
}

export default TourResult;