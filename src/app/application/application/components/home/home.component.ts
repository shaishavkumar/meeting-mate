import { Component, OnInit } from '@angular/core';
import { BookingDetail, CommonService, MeetingRoom } from 'src/app/common/common.service';
interface InputMeetingRoomDetails {
  room_name: string;
  booking_details: BookingDetail;
}

interface OutputMeetingRoomDetails {
  id: number;
  user_name: string;
  booking_date: string;
  start_time: string;
  end_time: string;
  agenda: string;
  room_name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  openBookingPopup: boolean = false;
  username = localStorage.getItem('username') || '';
  meetingRoomData: MeetingRoom[] = [];
  currentUserMeetings: OutputMeetingRoomDetails[] = [];
  allMeetingRoomList: string[] = [];
  selectedRoom: string = '';
  allMeetingRoomDetails: OutputMeetingRoomDetails[] = [];
  tempdata = [
    {
      "id": 1,
      "user_name": "User 1",
      "booking_date": "2024-06-08",
      "start_time": "10:00",
      "end_time": "11:00",
      "agenda": "test",
      "room_name": "Meeting Room 1"
    },
    {
      "id": 1,
      "user_name": "User 1",
      "booking_date": "2024-06-08",
      "start_time": "10:00",
      "end_time": "11:00",
      "agenda": "test",
      "room_name": "Meeting Room 1"
    },
    {
      "id": 1,
      "user_name": "User 1",
      "booking_date": "2024-06-08",
      "start_time": "10:00",
      "end_time": "11:00",
      "agenda": "test",
      "room_name": "Meeting Room 1"
    },
    {
      "id": 1,
      "user_name": "User 1",
      "booking_date": "2024-06-08",
      "start_time": "10:00",
      "end_time": "11:00",
      "agenda": "test",
      "room_name": "Meeting Room 1"
    },
    {
      "id": 1,
      "user_name": "User 1",
      "booking_date": "2024-06-08",
      "start_time": "10:00",
      "end_time": "11:00",
      "agenda": "test",
      "room_name": "Meeting Room 1"
    },
    {
      "id": 1,
      "user_name": "User 1",
      "booking_date": "2024-06-08",
      "start_time": "10:00",
      "end_time": "11:00",
      "agenda": "test",
      "room_name": "Meeting Room 1"
    },
    {
      "id": 1,
      "user_name": "User 1",
      "booking_date": "2024-06-08",
      "start_time": "10:00",
      "end_time": "11:00",
      "agenda": "test",
      "room_name": "Meeting Room 1"
    },
    {
      "id": 1,
      "user_name": "User 1",
      "booking_date": "2024-06-08",
      "start_time": "10:00",
      "end_time": "11:00",
      "agenda": "test",
      "room_name": "Meeting Room 1"
    },
    {
      "id": 1,
      "user_name": "User 1",
      "booking_date": "2024-06-08",
      "start_time": "10:00",
      "end_time": "11:00",
      "agenda": "test",
      "room_name": "Meeting Room 1"
    },
    {
      "id": 1,
      "user_name": "User 1",
      "booking_date": "2024-06-08",
      "start_time": "10:00",
      "end_time": "11:00",
      "agenda": "test",
      "room_name": "Meeting Room 1"
    }
  ]
  constructor(private commonSerive: CommonService) { }
  ngOnInit(): void {
    this.commonSerive.loginStatusCheck.next(true);
    this.meetingRoomData = this.commonSerive.MeetingRoomData;
    let userMeetings = this.getUserRoomDetails(this.username);
    this.currentUserMeetings = this.transformDataToView(userMeetings);
    this.allMeetingRoomList = this.getAllMeetingRoom();
    this.selectedRoom = this.allMeetingRoomList[0];
    this.allMeetingRoomDetails = this.getBookingDetails(this.selectedRoom);

  }

  openBooking() {
    this.openBookingPopup = true;
  }

  popupClosed() {
    this.openBookingPopup = false;
  }

  refreshData() {
    let userMeetings = this.getUserRoomDetails(this.username);
    this.currentUserMeetings = this.transformDataToView(userMeetings);
  }

  getUserRoomDetails(userName: string): { room_name: string; booking_details: BookingDetail }[] {
    const userBookings: { room_name: string; booking_details: BookingDetail }[] = [];
    this.meetingRoomData.forEach(room => {
      room.booking_details.forEach(booking => {
        if (booking.user_name === userName) {
          userBookings.push({
            room_name: room.room_name,
            booking_details: booking
          });
        }
      });
    });
    return userBookings;
  }

  transformDataToView(input: InputMeetingRoomDetails[]): OutputMeetingRoomDetails[] {
    return input.map(room => {
      const booking = room.booking_details;
      const [booking_date, start_time] = booking.booking_start.split(' ');
      const [, end_time] = booking.booking_end.split(' ');

      return {
        id: booking.id,
        user_name: booking.user_name,
        booking_date: booking_date,
        start_time: start_time,
        end_time: end_time,
        agenda: booking.agenda,
        room_name: room.room_name
      };
    });
  }

  getAllMeetingRoom(): string[] {
    let meetingRoomList: string[] = [];
    this.meetingRoomData.forEach(item => {
      meetingRoomList.push(item.room_name);
    })
    return meetingRoomList;
  }

  getRoomDetails() {
    this.allMeetingRoomDetails = this.getBookingDetails(this.selectedRoom);
  }

  getBookingDetails(roomName: string) {
    const room = this.meetingRoomData.find(room => room.room_name === roomName);
    if (!room) {
      return [];
    }

    const bookings = room.booking_details.map((booking, index) => ({
      id: index + 1,
      user_name: booking.user_name,
      booking_date: booking.booking_start.split(' ')[0],
      start_time: booking.booking_start.split(' ')[1],
      end_time: booking.booking_end.split(' ')[1],
      agenda: booking.agenda,
      room_name: roomName
    }));
    return bookings;
  }

  deleteMeetingById(id: number): void {
    for (const room of this.meetingRoomData) {
      const index = room.booking_details.findIndex(booking => booking.id === id);
      if (index !== -1) {
        room.booking_details.splice(index, 1);
        let userMeetings = this.getUserRoomDetails(this.username);
        this.currentUserMeetings = this.transformDataToView(userMeetings);
        return;
      }
    }
    alert(`Meeting with ID ${id} not found.`);
  }

}
