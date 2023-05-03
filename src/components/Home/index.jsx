import Header from '../Header';
import './index.css';
import React, { useState, useEffect } from 'react';

const Home = ({ socket }) => {

    const [user, setUser] = useState("");

    useEffect(() => {
        socket.on('newUserResponse', (data) => console.log(data));
    }, [socket]);

    function test() {
        // Ajoute le joueur a la liste des joueurs connectes
        socket.emit("newUser", { user, socketID: socket.id });
    }

    return (
        // <div className="home">
        //     <input 
        //     type="text"
        //     value={user}
        //     onChange={(e) => setUser(e.target.value)}
        //     />
        //     <button onClick={test}></button>
        // </div>


        <>
            <Header />

        </>
    );
}

export default Home;