import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@nchauticketing/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
