import { Component } from '@angular/core';
import { Room, RoomsList} from './rooms'

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

  // Directives
  rooms: Room = {
    totalRooms: 25,
    availableRooms : 5,
    bookedRooms: 15
  }

  roomsList: RoomsList[] = [
    {
      roomType: 'Deluxe Room',
      amenities: 'Air conditioning, Mini Fridge, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
      checkInTime: new Date('11-Mar-2023'),
      checkOutTime: new Date('20-Mar-2023'),
    },
    {
      roomType: 'Deluxe Room',
      amenities: 'Air conditioning, Mini Fridge, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
      checkInTime: new Date('11-Mar-2023'),
      checkOutTime: new Date('20-Mar-2023'),
    },
    {
      roomType: 'Deluxe Suite',
      amenities: 'Air conditioning, Mini Fridge, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 2000,
      photos: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
      checkInTime: new Date('11-Mar-2023'),
      checkOutTime: new Date('20-Mar-2023'),
    }
  ]

  toggle(){
    this.hiddenRooms = !this.hiddenRooms;
  }
}
