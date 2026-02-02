import * as requestService from "../services/request.service.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";

export const createRequest = async (req, res) => {
  const request = await requestService.createRequest(
    req.user._id,
    req.body
  );
  res.status(201).json(new ApiResponse(201, request));
};

export const getMyRequests = async (req, res) => {
  const requests = await requestService.getRequestsByUser(req.user._id);
  res.status(200).json(new ApiResponse(200, requests));
};

export const getRequestTimeline = async (req, res) => {
  const timeline = await requestService.getTimeline(req.params.id);
  res.status(200).json(new ApiResponse(200, timeline));
};
