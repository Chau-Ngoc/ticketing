import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@nchauticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
