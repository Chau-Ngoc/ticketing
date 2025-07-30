import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@nchauticketing/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
