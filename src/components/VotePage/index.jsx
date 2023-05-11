import './index.css';

import Header from "../Header";
import FormVote from '../FormVote';



const VotePage = () => {
    return (
        <>
            <Header role="utilisateur.ice" />

            <section className="section-vote">
                <h1 className="title-page">
                    Xe vote
                </h1>

                <FormVote />
            </section>
        </>
    )
}

export default VotePage;