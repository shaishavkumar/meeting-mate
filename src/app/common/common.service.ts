import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface BookingDetail {
  id: number,
  user_name: string;
  booking_start: string;
  booking_end: string;
  agenda: string;
}

export interface MeetingRoom {
  room_name: string;
  booking_details: BookingDetail[];
}
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loginStatusCheck = new Subject();
  MeetingRoomData: MeetingRoom[] = [
    {
      room_name: 'Meeting Room 1',
      booking_details: [
        {
          id:1,
          user_name: 'User 1',
          booking_start: '2024-06-08 10:00',
          booking_end: '2024-06-08 11:00',
          agenda: 'test'
        },
        {
          id:2,
          user_name: 'User 2',
          booking_start: '2024-06-08 11:00',
          booking_end: '2024-06-08 11:30',
          agenda: 'test'
        }
      ]
    },
    {
      room_name: 'Meeting Room 2',
      booking_details: [
        {
          id:3,
          user_name: 'User 2',
          booking_start: '2024-06-08 13:00',
          booking_end: '2024-06-08 14:00',
          agenda: 'test'
        },
        {
          id:4,
          user_name: 'User 3',
          booking_start: '2024-06-08 11:00',
          booking_end: '2024-06-08 11:30',
          agenda: 'test'
        }
      ]
    },
    {
      room_name: 'Meeting Room 3',
      booking_details: []
    },
    {
      room_name: 'Meeting Room 4',
      booking_details: []
    },
    {
      room_name: 'Meeting Room 5',
      booking_details: []
    },
    {
      room_name: 'Meeting Room 6',
      booking_details: []
    },
    {
      room_name: 'Meeting Room 7',
      booking_details: []
    },
    {
      room_name: 'Meeting Room 8',
      booking_details: []
    },
    {
      room_name: 'Meeting Room 9',
      booking_details: []
    },
    {
      room_name: 'Meeting Room 10',
      booking_details: []
    }
  ]
  constructor() { }
}
