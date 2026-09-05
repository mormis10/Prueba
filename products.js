const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 850
    },
    {
        id: 2,
        name: 'Mouse',
        price: 25
    }
];

function getProduct(id) {
    return products.find(product => product.id === id);
}

function listProducts() {
    return products;
}

module.exports = {
    getProduct,
    listProducts
};
