import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";

console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  // const data = JSON.stringify({
  //   id: "123",
  //   title: "concert",
  //   price: 20,
  // });

  // stan.publish("ticket:created", data, () => {
  //   console.log("Event publised");
  // });

  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({ id: "123", title: "Shirt", price: 20 });
  } catch (err) {
    console.error(err);
  }
});
