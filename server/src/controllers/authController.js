const createHttpError = require('http-errors')
const {User} = require('./../models')

exports.signInUser = async (req, res, next) => {
    try{
        const {
            body: {email, password}
        } = req;
        const userInstance = await User.findOne({
            where: {email},
        });
        if(userInstance && (await userInstance.comparePassword(password))){
            const data = await
            return res.end();
        }
        next(createHttpError(401, 'Incorrect password or email'));
    } catch(err){
        next(err);
    }
};

exports.signInUser = async (req, res, next) => {};
exports.refreshAuth = async (req, res, next) => {};