const config = require('./config');
const { getUser } = require('./users');
const { getProduct } = require('./products');

function startApplication() {
    console.log(`Server running on port ${config.port}`);

    const USER2 = getUser(1);
    const prueba = 200;

    console.log('User:', USER2);
    console.log("Ven gózalo ayy vengózao");
    console.log(prueba);
}

startApplication();
