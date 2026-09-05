const config = require('./config');
const { getUser } = require('./users');
const { getProduct } = require('./products');

function startApplication() {
    console.log(`Server running on port ${config.port}`);

    const user = getUser(1);
    const product = getProduct(1);

    console.log('User:', user);
    console.log('Product:', product);
}

startApplication();
