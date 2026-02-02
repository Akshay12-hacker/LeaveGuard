export{asyncHandler};

const asyncHandler = (requestHandler) => async(req, res, next) =>{
    Promise.resolve(requestHandler(req,res,next)).catch(next);
}