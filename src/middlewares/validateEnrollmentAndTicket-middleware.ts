import ticketService from "@/services/tickets-service";
import { NextFunction, Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "./authentication-middleware";

export async function validateEnrollmentAndTicket(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;

  try {
    const ticket = await ticketService.getTicketByUserId(userId);
    
    res.locals.ticketId = ticket.id;

    next();
  } catch (e) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
