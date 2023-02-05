import ticketService from "@/services/tickets-service";
import { NextFunction, Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "./authentication-middleware";

export async function validateTicketProperties(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { ticketId } = res.locals;

  try {
    const ticketWithType = await ticketService.getTicketTypeById(ticketId);

    if (ticketWithType.status === "RESERVED" || !ticketWithType.TicketType.includesHotel || ticketWithType.TicketType.isRemote) {
      return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
    }

    next();
  } catch (e) {
    return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
  }
}
