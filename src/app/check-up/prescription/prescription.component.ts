import { Component } from '@angular/core';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent {
  isShowTickets: { [id: string]: boolean } = {};

  toggleTicketsContent(tagTickets: string) {
    this.isShowTickets[tagTickets] = !this.isShowTickets[tagTickets];
    // Object.keys(this.isShowTickets).forEach(key=>{
    //   if(key !== tagTickets){
    //     this.isShowTickets[key] = false;
    //   }
    // })
  }
}
