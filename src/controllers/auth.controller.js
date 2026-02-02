import { registerUserService, loginUserService } from "../services/auth.service.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";

export const registerUser = async (req, res) => {
  const user = await registerUserService(req.body, req.file);
  return res
    .status(201)
    .json(new ApiResponse(201, user, "User registered successfully"));
};

export const loginUser = async (req, res) => {
  const data = await loginUserService(req.body);
  return res
    .status(200)
    .json(new ApiResponse(200, data, "Login successful"));
};
