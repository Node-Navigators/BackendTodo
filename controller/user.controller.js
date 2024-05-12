const {
    successResponse,
    serverErrorResponse,
    badRequestResponse,
    notFoundResponse,
    handle304
} = require('../utils/response');
const joi_schema = require('../Joi/user');

const loggingIn = async (req, res) => {
    try {
        const { error } = joi_schema.validate(req.body);
        if (error) {
            return badRequestResponse(res, 'Invalid data entered');
        }

        let [err,user]=await 
    } catch (err) {
        
    }
}

const signup = async (req, res) => {
    
}