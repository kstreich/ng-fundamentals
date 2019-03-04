import { Component } from "@angular/core";
import { template } from "@angular/core/src/render3";

@Component({
  selector: "events-list",
  template: `
    <div>
      <h1>Upcoming Events</h1>
      <hr />
      <event-thumbnail
        (eventClick)="handleEventClicked($event)"
        [event]="event1"
      ></event-thumbnail>
    </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: "Ice Cream Party",
    date: "3/20/2019",
    time: "8:00 pm",
    price: 5.0,
    imageUrl:
      "https://www.icecreamsocialtacoma.com/media/static/images/icecreamsocial-logo-orange.png",
    location: {
      address: "1057 DT",
      city: "London",
      country: "England"
    }
  };

  handleEventClicked(data) {
    console.log("received:", data);
  }
}
