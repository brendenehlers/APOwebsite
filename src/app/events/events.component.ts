import { Component, ViewChild, Input, OnInit } from '@angular/core';

import { FullCalendarComponent } from '@fullcalendar/angular';
// import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import * as data from './events.json';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = (data as any).default;

  //modal values
  modalVisible: boolean = false;
  modalTitle: string = null;
  modalStart: Date = null;
  modalEnd: Date = null;
  modalDesc: string = null;

  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, listPlugin];

  open(content, eventCall) {

    debugger;
    this.modalTitle = eventCall.event.title;
    this.modalStart = eventCall.event.start;
    this.modalEnd = eventCall.event.end;
    this.modalDesc = eventCall.event.borderColor;

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    return false;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  eventClickModalClose(){
    this.modalVisible = false;
  }
}