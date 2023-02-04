import ticketService from "@/services/tickets-service";
import { NextFunction, Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "./authentication-middleware";

export async function validateTicketProperties(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { ticket } = res.locals;

  if (ticket.status === "RESERVED") {
    return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
  }

  try {
    const ticketWithType = await ticketService.getTicketTypeById(ticket.id);

    if (!ticketWithType.TicketType.includesHotel || ticketWithType.TicketType.isRemote) {
      return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
    }

    next();
  } catch (e) {
    return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
  }
}
