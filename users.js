const users = [
    {
        id: 1,
        name: 'Ana',
        email: 'ana@example.com'
    },
    {
        id: 2,
        name: 'Carlos',
        email: 'carlos@example.com'
    }
];

function getUser(id) {
    return users.find(user => user.id === id);
}

function listUsers() {
    return users;
}

module.exports = {
    getUser,
    listUsers
};
