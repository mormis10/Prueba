const config = require('./config');
const { getUser } = require('./users');
const { getProduct } = require('./products');

function startApplication() {
    console.log(`Server running on port ${config.port}`);

    const USER2 = getUser(1);
    const prueba = 94545459; 

    console.log('User:', USER2);
    console.log("Orfdmslñkfmi");
    console.log(prueba);
}

startApplication();
