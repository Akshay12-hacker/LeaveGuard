import * as approvalService from "../services/approval.service.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";

export const approveRequest = async (req, res) => {
  const result = await approvalService.approve(
    req.user,
    req.params.id,
    req.body
  );
  res.status(200).json(new ApiResponse(200, result));
};

export const rejectRequest = async (req, res) => {
  const result = await approvalService.reject(
    req.user,
    req.params.id,
    req.body
  );
  res.status(200).json(new ApiResponse(200, result));
};
