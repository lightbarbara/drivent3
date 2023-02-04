import { AuthenticatedRequest } from "@/middlewares";
import hotelService from "@/services/hotels-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getAllHotels(req: AuthenticatedRequest, res: Response) {
  try {
    const hotels = await hotelService.getAllHotels();

    res.status(200).send(hotels);
  } catch (err) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
