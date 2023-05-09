import Header from '../Header';
import FormLog from '../FormLog';
import './index.css';

const Home = ({ socket }) => {

    const tryLogin = (firstInput, secondInput, index) => {
        index === 1 ? adminLogin(firstInput, secondInput) : userLogin(firstInput, secondInput);
    }

    const adminLogin = (userName, password) => {
        if(userName === "admin" && password === "admin") {
            console.log("admin");
        }
        else
            console.log("not admin");
    }

    const userLogin = (userName, code) => {
        if(code === "0000") {
            socket.emit("newUser", { userName, socketID: socket.id });
        }
        else
            console.log("not user");
    }

    return (
        <>
            <Header />

            <section className="section-form">

                <h1 className="title-page">Connexion</h1>

                <div className="container-forms">

                    <FormLog
                        title="En tant qu'administrateur.ice :" labelOne="Nom d'administrateur.ice :" labelTwo="Mot de passe :"
                        placeholderOne="Carmen Blabla"
                        placeholderTwo="...."
                        type="password"
                        value="Se connecter"
                        submitFunction={tryLogin}
                        index={1}
                    />

                    <FormLog
                        title="En tant qu'utilisateur.ice :" labelOne="Nom prénom :"
                        placeholderOne="Carmen Blabla" labelTwo="Code de session :"
                        placeholderTwo="...."
                        type="text"
                        value="Se connecter"
                        submitFunction={tryLogin}
                        index={2}
                    />
                    
                </div>
            </section>

        </>
    );
}

export default Home;