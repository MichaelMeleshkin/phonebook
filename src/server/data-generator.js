var faker = require('faker');

module.exports = () => {
    const data = { users: [] };
    for (let i = 0; i < 112; i++) {
        data.users.push({
            id: faker.random.uuid(),
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber(),
            city: faker.address.city(),
            country: faker.address.country(),
            streetAddress: faker.address.streetAddress(),
            avatar: faker.internet.avatar(),
            note: faker.lorem.sentences(),
        });
    }
    return data;
};