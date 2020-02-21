import { Component, ViewChild, DebugElement } from '@angular/core';

import { FullCalendarComponent } from '@fullcalendar/angular';
// import { EventInput } from '@fullcalendar/core';

import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin];

  events = [
    {title: 'event now', start: '2020-01-01', end: '2020-01-02'}
  ]

  // calendarEvents: EventInput[] = [
  //   { title: 'Event Now', start: new Date() }
  // ];

  toggleVisible() {
    // this.calendarVisible = !this.calendarVisible;
    this.calendarVisible = !this.calendarVisible;
    debugger;
  }

}


