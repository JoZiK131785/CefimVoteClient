import './index.css';

import MainButton from '../MainButton';


// should map on the option of both select with the all the voters, don't forget to file the value too

const FormDuo = () => {
    return (
        <form action="" className="form">
            <h2 className="title-form">
                Ajout des candidat.e.s
            </h2>

            <div className="form-input">
                <label htmlFor="select-duo-1">Délégué.e</label>

                <select name="voters" id="select-duo-1">
                    <option value="">Candidat un</option>
                    <option value="">Jordane Zicry</option>
                    <option value="">Clément Meunier</option>
                    <option value="">Pauline Stein</option>
                </select>
            </div>

            <div className="form-input">
                <label htmlFor="select-duo-2">Supléant.e</label>

                <select name="voters" id="select-duo-2">
                    <option value="">Candidat deux</option>
                    <option value="">Jordane Zicry</option>
                    <option value="">Clément Meunier</option>
                    <option value="">Pauline Stein</option>
                </select>
            </div>



            <div className="form-button">
                <MainButton value="Ajouter le duo" />
            </div>
        </form>
    );
}

export default FormDuo;