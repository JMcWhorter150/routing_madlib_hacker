const faker = require('faker');

function isWordType(word) {
    const types = ['adjective', 'noun', 'verb'];
    return types.includes(word);
}

function getRandomWord(type) {
    return faker.hacker[type]();
}

module.exports = {
    isWordType,
    getRandomWord
};