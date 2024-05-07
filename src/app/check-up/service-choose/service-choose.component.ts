import { Component } from '@angular/core';

@Component({
  selector: 'app-service-choose',
  templateUrl: './service-choose.component.html',
  styleUrls: ['./service-choose.component.css'],
})
export class ServiceChooseComponent {
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
