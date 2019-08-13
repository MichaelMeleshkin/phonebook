var faker = require('faker');

module.exports = () => {
    const data = { users: [] };
    for (let i = 0; i < 112; i++) {
        data.users.push({
            id: faker.random.uuid(),
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber(),
        });
    }
    return data;
};