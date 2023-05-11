import './index.css';

import Header from '../Header';
import TourResult from '../TourResult';


// Have to map on "TourResult" according to numbers of turns.
// After the last turns, display the result final with "TourResult"


const ResultPage = () => {
    return (
        <>
            <Header role="utilisateur.ice" />

            <section className="section-result">
                <h1 className="title-page">
                    Résultats
                </h1>

                <div className="container-results-turns">
                    <TourResult title="1er tours" />
                    <TourResult title="2e tours" />
                    <TourResult title="Résultats" />
                </div>
            </section>
        </>
    )
}

export default ResultPage;