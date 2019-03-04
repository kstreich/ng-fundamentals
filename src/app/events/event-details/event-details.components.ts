import { Component } from "@angular/core";
import { EventService } from "../shared/events.service";

@Component({
  templateUrl: "/event-details.component.html",
  styles: [
    `
      .event-image: {
        height: 100px;
      }
    `
  ]
})
export class EventDetailsComponent {
  event: any;
  constructor(private eventService: EventService) {}

  ngOnInit() {
    debugger;
    this.event = this.eventService.getEvent(1);
  }
}
