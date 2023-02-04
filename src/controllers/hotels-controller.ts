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

export async function getHotelById(req: AuthenticatedRequest, res: Response) {
  const hotelId = parseInt(req.params.hotelId);

  try {
    const hotel = await hotelService.getHotelById(hotelId);

    res.status(200).send(hotel);
  } catch (err) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
