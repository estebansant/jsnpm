const messages = [
    "Esteban",
    "Sebastian",
    "Isabella",
    "Ignacio",
    "Constanza"
];

const randomMessages = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMessages };