import './index.css';

// faire apparraître les p dont on a besoin

const ListInfos = () => {
    return (
        <div className="container-infos">
            <h2 className="subtitle">Informations générales</h2>

            <p className="p-infos">
                <b>Promotion :</b> DWDGRV
            </p>

            <p className="p-infos">
                <b>Code de connexion :</b> kPzeImmIZb
            </p>

            <p className="p-infos">
                <b>Date :</b> 29 jun 2023
            </p>

            <p className="p-infos">
                <b>Heure de début :</b> 11h02
            </p>

            <p className="p-infos">
                <b>Heure de fin :</b> 11h23
            </p>

            <p className="p-infos">
                <b>Nombres de votant.e.s :</b> 18
            </p>

            <p className="p-infos">
                <b>Délégué.e :</b> Maxime Aubé
            </p>

            <p className="p-infos">
                <b>Supléant.e :</b> Maxime Aubé
            </p>
        </div>
    )
}

export default ListInfos; 