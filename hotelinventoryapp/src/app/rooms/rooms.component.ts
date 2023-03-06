import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent {
  // Interpolation
  hotelName: string = 'Hilton Hotel!';

  // Property Binding
  numberRooms: number = 10;

  // Event Binding
  hiddenRooms: boolean = false;
  toggle(){
    this.hiddenRooms = !this.hiddenRooms;
  }
}
