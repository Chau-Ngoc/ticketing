import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@nchauticketing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
