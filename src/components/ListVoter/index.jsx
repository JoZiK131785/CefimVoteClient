import './index.css';
import { useState, useEffect } from 'react';

const ListVoter = ({ session }) => {

    const [voters, setVoters] = useState([]);

    useEffect(() => {
        setVoters(session.voters);
    }, [session])

    return (
        <div className="container-list-voter">
            <h2 className="subtitle">Listes des participant.e.s</h2>

            <ul className="list-voter">

                {voters && voters.map((voter, index) => {
                    return (
                        <li className="voter" key={index}>
                            <p className="p-voter">
                                { voter.userName }
                            </p>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default ListVoter;