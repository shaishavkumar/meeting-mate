import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingDetail, CommonService, MeetingRoom } from 'src/app/common/common.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit, OnChanges {

  @Input() show: boolean = false;
  @Output() closePopup = new EventEmitter();
  @Output() refreshData = new EventEmitter();
  bookingForm: any;
  meetingRoomData: MeetingRoom[] = [];
  availableMeetingRoom: string[] = [];
  currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  constructor(private fb: FormBuilder, private commonService: CommonService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {
    if(!changes.show.currentValue){
      return
    }
    this.bookingForm = this.fb.group({
      userName: [localStorage.getItem('username')],
      bookingDate: [null, [Validators.required,this.validateWeekend]],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      meetingRoom: [null, Validators.required],
      agenda: [null, Validators.required]
    },{
      validators: [this.validateTimeRange('startTime', 'endTime')]
    })
    this.meetingRoomData = this.commonService.MeetingRoomData;
  }

  validateTimeRange(startControlName: string, endControlName: string) {
    return (group: FormGroup) => {
      const startControl = group.controls[startControlName];
      const endControl = group.controls[endControlName];
  
      if (startControl.value && endControl.value) {
        const startTime = new Date(`01/01/2000 ${startControl.value}`);
        const endTime = new Date(`01/01/2000 ${endControl.value}`);
        const timeDifference = (endTime.getTime() - startTime.getTime()) / (1000 * 60); 
     
        if (timeDifference < 30) {
          endControl.setErrors({ gap: true });
          startControl.setErrors({ gap: true });
        } else {
          endControl.setErrors(null);
          startControl.setErrors(null);
        }
  
        if (endTime <= startTime) {
          endControl.setErrors({ greater: true });
        } else {
          endControl.setErrors(null);
        }
      }
    };
  }

  validateWeekend(control: any) {
    const selectedDate = new Date(control.value);
    if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
      return { weekend: true };
    }
    return null;
  }
  
  close() {
    this.closePopup.emit();
  }

  bookMeeting() {
    const body: BookingDetail= {
      id: new Date().getTime(),
      user_name: this.bookingForm.value.userName,
      booking_start: `${this.bookingForm.value.bookingDate} ${this.bookingForm.value.startTime}`,
      booking_end: `${this.bookingForm.value.bookingDate} ${this.bookingForm.value.endTime}`,
      agenda: this.bookingForm.value.agenda
    }
    this.saveData(this.bookingForm.value.meetingRoom, body)
  }

// Method to save booking details to the service data
saveData(selectedRoom: string, dataToSave: BookingDetail) {
  const room = this.meetingRoomData.find(room => room.room_name === selectedRoom);
  if (room) {
    room.booking_details.push(dataToSave);
  } else {
    console.error(`Room with name ${selectedRoom} not found.`);
  }
  this.refreshData.emit()
  this.close();
}

  //?returns available meeting rooms for the selected time
  findAvailableMeetingRooms(meetingRoomsData: MeetingRoom[], startTime: Date, endTime: Date): string[] {
    const availableRooms: MeetingRoom[] = meetingRoomsData.filter(room => {
      for (const booking of room.booking_details) {
        const bookingStartTime: Date = new Date(booking.booking_start);
        const bookingEndTime: Date = new Date(booking.booking_end);
        if (
          (startTime >= bookingStartTime && startTime < bookingEndTime) ||
          (endTime > bookingStartTime && endTime <= bookingEndTime) ||
          (startTime <= bookingStartTime && endTime >= bookingEndTime)
        ) {
          return false;
        }
      }
      return true;
    });
    return availableRooms.map(room => room.room_name);
  }


  checkRoomAvailability() {
    this.availableMeetingRoom = [];
    let startDate = `${this.bookingForm.value.bookingDate} ${this.bookingForm.value.startTime}`;
    let endDate = `${this.bookingForm.value.bookingDate} ${this.bookingForm.value.endTime}`;
    this.availableMeetingRoom = this.findAvailableMeetingRooms(this.meetingRoomData, new Date(startDate), new Date(endDate));
    if(this.availableMeetingRoom.length){
      this.bookingForm.get('meetingRoom').setValue(this.availableMeetingRoom[0]);
    }
  }

}
