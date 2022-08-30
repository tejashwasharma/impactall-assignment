const userRepository = require('../repositories/user.repository');
const { FORBIDDEN, NOT_FOUND, UNPROCESSABLE_ENTITY } = require('../util/statusCode');
const { generateAccessToken } = require('../util');

module.exports.login = (credentials) => new Promise(async (resolve, reject) => {
    try {
        let user = await userRepository.getByQuery({ username: credentials.username }, true);
        if (user && user._id) {
            let isPasswordMatch = await user.comparePassword(credentials.password);
            if (isPasswordMatch) {
                user = user.toObject();
                delete user.password;
                const token = `Bearer ${generateAccessToken(user._id)}`;
                user.token = token;
                resolve({ user, token });
            } else {
                reject(FORBIDDEN);
            }
        } else {
            reject(NOT_FOUND);
        }
    } catch (err) {
        reject(err);
    }
});

module.exports.signup = (user) => new Promise(async (resolve, reject) => {
    try {
        let exisitingUser = await userRepository.getByQuery({ username: user.username });
        if (exisitingUser && exisitingUser._id) {
            reject(UNPROCESSABLE_ENTITY);
        } else {
            user = await userRepository.createUser(user);
            user = user.toObject();
            delete user.password;
            resolve(user);
        }
    } catch (err) {
        reject(err);
    }
});
