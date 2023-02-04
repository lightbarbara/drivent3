import { notFoundError } from "@/errors";
import hotelRepository from "@/repositories/hotel-repository";

async function getAllHotels() {
  const hotels = await hotelRepository.getAllHotels();

  if (hotels.length === 0) {
    throw notFoundError();
  }

  return hotels;
}

async function getHotelById(hotelId: number) {
  const hotel = await hotelRepository.getHotelById(hotelId);

  if (!hotel) {
    throw notFoundError();
  }

  return hotel;
}

const hotelService = {
  getAllHotels,
  getHotelById
};

export default hotelService;
