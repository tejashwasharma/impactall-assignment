const userRepository = require('../repositories/user.repository');

module.exports.getById = ({ id }) => new Promise(async (resolve, reject) => {
    try {
        let user = await userRepository.getByQuery({ _id: id });
        resolve({ user });
    } catch (err) {
        reject(err);
    }
})
