import { notFoundError } from "@/errors";
import hotelRepository from "@/repositories/hotel-repository";

async function getAllHotels() {
  const hotels = await hotelRepository.getAllHotels();

  if (hotels.length === 0) {
    throw notFoundError();
  }

  return hotels;
}

const hotelService = {
  getAllHotels
};

export default hotelService;
