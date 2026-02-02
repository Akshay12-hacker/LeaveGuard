import {asyncHandler} from '../utils/asyncHandler.util.js';
import {ApiError} from '../utils/ApiError.util.js';
import {User} from '../models/user.model.js';
import {uploadOnCloudinary} from '../utils/cloudinary.util.js';
import { ApiResponse } from '../utils/ApiResponse.util.js';

const registerUser = asyncHandler(async (req, res) =>{
    res.status(200).json({
        message: "Hello User..",
        data: req.body
    });
});


export {
    registerUser
}