import { getAllHotels } from "@/controllers";
import { authenticateToken, validateEnrollmentAndTicket, validateTicketProperties } from "@/middlewares";
import { Router } from "express";

const hotelsRouter = Router();

hotelsRouter
  .all("/*", authenticateToken, validateEnrollmentAndTicket, validateTicketProperties)
  .get("/", getAllHotels)
  .get("/:hotelId");

export { hotelsRouter };
