const config = require('./config');
const { getUser } = require('./users');
const { getProduct } = require('./products');

function startApplication() {
    console.log(`Server running on port ${config.port}`);

    const USER2 = getUser(1);
    const prueba = 999; 

    console.log('User:', USER2);
    console.log("Esto es compltkfm{kl{rgrpe+gm+ñwlmg");
    console.log(prueba);
}

startApplication();
