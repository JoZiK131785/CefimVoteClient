import './index.css';

// Mapper sur le li
const ListVoter = () => {
    return (
        <div className="container-list-voter">
            <h2 className="subtitle">Listes des participant.e.s</h2>

            <ul className="list-voter">
                {/* mapper sur le li */}
                <li className="voter">
                    <p className="p-voter">
                        Quentin DeMaria
                    </p>
                </li>

                <li className="voter">
                    <p className="p-voter">
                        Clément Bournas
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default ListVoter;