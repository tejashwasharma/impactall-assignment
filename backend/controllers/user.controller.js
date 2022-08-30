const userService = require('../services/user.service');

module.exports.getById = (req, res) => {
    userService.getById(req.params)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            sendErrorResponse(res, err);
        })
}
