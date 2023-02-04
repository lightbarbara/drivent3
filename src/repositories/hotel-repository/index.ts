import { prisma } from "@/config";

async function getAllHotels() {
  return await prisma.hotel.findMany();
}

const hotelRepository = {
  getAllHotels
};

export default hotelRepository;
