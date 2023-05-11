export const startSession = (socket, promo, resp, date) => {

    let session = { promo, resp, date };
    let code = generateCode();

    session.code = code;
    session.state = 'start';
    session.voters = [];

    console.log("start : ");
    console.log(session);
    
    socket.emit('startSession', session);
}

export const formatDate = (timestamp) => {

    const date = new Date(timestamp);
    const options = { day: "numeric", month: "long", year: "numeric" };

    return date.toLocaleDateString("fr-FR", options);
};

export const formatTime = (timestamp) => {

    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}h${minutes}`;
};

const generateCode = () => {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    for (let i = 0; i < 8; i++) 
    {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }

    return code;
}