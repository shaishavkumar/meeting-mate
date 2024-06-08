"use strict";(self.webpackChunkmeeting_mate=self.webpackChunkmeeting_mate||[]).push([[560],{5560:(F,u,l)=>{l.r(u),l.d(u,{ApplicationModule:()=>y});var m=l(6814),p=l(72),e=l(4946),h=l(8487),r=l(95);function f(o,s){1&o&&e._UZ(0,"div",2)}function b(o,s){1&o&&(e.TgZ(0,"small",27),e._uU(1," **Rooms are not available on weekends. "),e.qZA())}function k(o,s){1&o&&(e.TgZ(0,"small",27),e._uU(1," **Gap between start and end time should be at least 30 minutes. "),e.qZA())}function Z(o,s){1&o&&(e.TgZ(0,"small",27),e._uU(1," **End time should be greater than start time. "),e.qZA())}function T(o,s){if(1&o&&(e.TgZ(0,"option"),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.xp6(1),e.Oqu(t)}}const v=function(o){return{disable:o}};function M(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"div")(3,"h4"),e._uU(4,"Book Meeting"),e.qZA()()(),e.TgZ(5,"div",5)(6,"form",6)(7,"div",7)(8,"label",8),e._uU(9,"User Name"),e.qZA(),e._UZ(10,"input",9),e.qZA(),e.TgZ(11,"div",10)(12,"div",7)(13,"label",11),e._uU(14,"Meeting Date"),e.qZA(),e.TgZ(15,"input",12),e.NdJ("change",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.checkRoomAvailability())}),e.qZA()(),e.TgZ(16,"div",7)(17,"label",13),e._uU(18,"Start Time"),e.qZA(),e.TgZ(19,"input",14),e.NdJ("change",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.checkRoomAvailability())}),e.qZA()(),e.TgZ(20,"div",7)(21,"label",15),e._uU(22,"End Time"),e.qZA(),e.TgZ(23,"input",16),e.NdJ("change",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.checkRoomAvailability())}),e.qZA()()(),e.YNc(24,b,2,0,"small",17),e.YNc(25,k,2,0,"small",17),e.YNc(26,Z,2,0,"small",17),e.TgZ(27,"div",18)(28,"label",19),e._uU(29,"Meeting Room "),e.TgZ(30,"span",20),e._uU(31," (Available)"),e.qZA()(),e.TgZ(32,"select",21),e.YNc(33,T,2,1,"option",22),e.qZA()(),e.TgZ(34,"div",7)(35,"label",23),e._uU(36,"Agenda"),e.qZA(),e._UZ(37,"textarea",24),e.qZA()()(),e.TgZ(38,"button",25),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.bookMeeting())}),e._uU(39,"Book Meeting"),e.qZA(),e.TgZ(40,"button",26),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.close())}),e._uU(41,"Close"),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(6),e.Q6J("formGroup",t.bookingForm),e.xp6(9),e.Q6J("min",t.currentDate),e.xp6(9),e.Q6J("ngIf",t.bookingForm.get("bookingDate").hasError("weekend")&&t.bookingForm.get("bookingDate").dirty),e.xp6(1),e.Q6J("ngIf",t.bookingForm.get("startTime").hasError("gap")&&t.bookingForm.get("endTime").dirty),e.xp6(1),e.Q6J("ngIf",t.bookingForm.get("endTime").hasError("greater")&&t.bookingForm.get("endTime").dirty),e.xp6(7),e.Q6J("ngForOf",t.availableMeetingRoom),e.xp6(5),e.Q6J("ngClass",e.VKq(8,v,!t.bookingForm.valid))("disabled",!t.bookingForm.valid)}}let x=(()=>{class o{constructor(t,n,i){this.fb=t,this.commonService=n,this.datePipe=i,this.show=!1,this.closePopup=new e.vpe,this.refreshData=new e.vpe,this.meetingRoomData=[],this.availableMeetingRoom=[],this.currentDate=this.datePipe.transform(new Date,"yyyy-MM-dd")}ngOnInit(){}ngOnChanges(t){t.show.currentValue&&(this.bookingForm=this.fb.group({userName:[localStorage.getItem("username")],bookingDate:[null,[r.kI.required,this.validateWeekend]],startTime:[null,r.kI.required],endTime:[null,r.kI.required],meetingRoom:[null,r.kI.required],agenda:[null,r.kI.required]},{validators:[this.validateTimeRange("startTime","endTime")]}),this.availableMeetingRoom=[],this.meetingRoomData=this.commonService.MeetingRoomData)}validateTimeRange(t,n){return i=>{const a=i.controls[t],g=i.controls[n];if(a.value&&g.value){const d=new Date(`01/01/2000 ${a.value}`),c=new Date(`01/01/2000 ${g.value}`);(c.getTime()-d.getTime())/6e4<30?(g.setErrors({gap:!0}),a.setErrors({gap:!0})):(g.setErrors(null),a.setErrors(null)),g.setErrors(c<=d?{greater:!0}:null)}}}validateWeekend(t){const n=new Date(t.value);return 0===n.getDay()||6===n.getDay()?{weekend:!0}:null}close(){this.closePopup.emit()}bookMeeting(){const t={id:(new Date).getTime(),user_name:this.bookingForm.value.userName,booking_start:`${this.bookingForm.value.bookingDate} ${this.bookingForm.value.startTime}`,booking_end:`${this.bookingForm.value.bookingDate} ${this.bookingForm.value.endTime}`,agenda:this.bookingForm.value.agenda};this.saveData(this.bookingForm.value.meetingRoom,t)}saveData(t,n){const i=this.meetingRoomData.find(a=>a.room_name===t);i?i.booking_details.push(n):console.error(`Room with name ${t} not found.`),this.refreshData.emit(),this.close()}findAvailableMeetingRooms(t,n,i){return t.filter(g=>{for(const d of g.booking_details){const c=new Date(d.booking_start),_=new Date(d.booking_end);if(n>=c&&n<_||i>c&&i<=_||n<=c&&i>=_)return!1}return!0}).map(g=>g.room_name)}checkRoomAvailability(){this.availableMeetingRoom=[];let n=`${this.bookingForm.value.bookingDate} ${this.bookingForm.value.endTime}`;this.availableMeetingRoom=this.findAvailableMeetingRooms(this.meetingRoomData,new Date(`${this.bookingForm.value.bookingDate} ${this.bookingForm.value.startTime}`),new Date(n)),this.availableMeetingRoom.length&&this.bookingForm.get("meetingRoom").setValue(this.availableMeetingRoom[0])}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(r.qu),e.Y36(h.v),e.Y36(m.uU))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-booking-page"]],inputs:{show:"show"},outputs:{closePopup:"closePopup",refreshData:"refreshData"},features:[e.TTD],decls:2,vars:2,consts:[["class","overlay",4,"ngIf"],["class","root",4,"ngIf"],[1,"overlay"],[1,"root"],[1,"header-section"],[1,"form-section"],[3,"formGroup"],[1,"input-group"],["for","username",1,"required-field"],["readonly","","type","text","formControlName","userName","id","userName"],[1,"date-time-group"],["for","bookingDate",1,"required-field"],["type","date","formControlName","bookingDate","id","bookingDate",3,"min","change"],["for","startTime",1,"required-field"],["type","time","formControlName","startTime","id","startTime",3,"change"],["for","endTime",1,"required-field"],["type","time","formControlName","endTime","id","endTime",3,"change"],["class","error-message",4,"ngIf"],[1,"input-group",2,"margin-top","10px"],["for","meetingRoom",1,"required-field"],[1,"sub-text"],["formControlName","meetingRoom","id","meetingRoom"],[4,"ngFor","ngForOf"],["for","agenda",1,"required-field"],["formControlName","agenda","id","agenda"],["type","submit",1,"primary-btn","right",3,"ngClass","disabled","click"],[1,"secondary-btn","right","close-btn",3,"click"],[1,"error-message"]],template:function(n,i){1&n&&(e.YNc(0,f,1,0,"div",0),e.YNc(1,M,42,10,"div",1)),2&n&&(e.Q6J("ngIf",i.show),e.xp6(1),e.Q6J("ngIf",i.show))},dependencies:[m.mk,m.sg,m.O5,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.sg,r.u],styles:[".overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100vh;width:100vw;opacity:.5;background-color:#000;z-index:9999}.root[_ngcontent-%COMP%]{position:fixed;top:calc(50vh - 250px);left:calc(50vw - 300px);width:555px;background:white;border-radius:8px;z-index:1000000;padding:19px;transition:all .2s}.header-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.header-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{flex:1}h4[_ngcontent-%COMP%]{margin:0}.close-btn[_ngcontent-%COMP%]{margin-right:10px}.form-section[_ngcontent-%COMP%]{margin-top:30px}.input-group[_ngcontent-%COMP%]{margin-bottom:20px}.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:5px}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:98%;padding:8px;border:1px solid #ccc;border-radius:3px}select[_ngcontent-%COMP%]{width:101%;padding:8px;border:1px solid #ccc;border-radius:3px}.date-time-group[_ngcontent-%COMP%]{display:flex;gap:20px;margin-bottom:-20px}.date-time-group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{flex:1;margin-right:10px}.sub-text[_ngcontent-%COMP%]{font-size:x-small}"]})}return o})();function C(o,s){1&o&&(e.TgZ(0,"p",11),e._uU(1,"No Meeting Scheduled !"),e.qZA())}function U(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td",14),e.NdJ("click",function(){const a=e.CHM(t).$implicit,g=e.oxw(2);return e.KtG(g.deleteMeetingById(a.id))}),e._uU(14,"Delete"),e.qZA()()}if(2&o){const t=s.$implicit,n=s.index;e.xp6(2),e.Oqu(n+1),e.xp6(2),e.Oqu(t.user_name),e.xp6(2),e.Oqu(t.booking_date),e.xp6(2),e.AsE("",t.start_time," - ",t.end_time,""),e.xp6(2),e.Oqu(t.agenda),e.xp6(2),e.Oqu(t.room_name)}}function q(o,s){if(1&o&&(e.TgZ(0,"table")(1,"tr",12)(2,"th"),e._uU(3,"Sr No"),e.qZA(),e.TgZ(4,"th"),e._uU(5,"User Name"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Date"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Time"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Agenda"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Room"),e.qZA(),e._UZ(14,"th"),e.qZA(),e.YNc(15,U,15,7,"tr",13),e.qZA()),2&o){const t=e.oxw();e.xp6(15),e.Q6J("ngForOf",t.currentUserMeetings)}}function A(o,s){if(1&o&&(e.TgZ(0,"option",15),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function D(o,s){1&o&&(e.TgZ(0,"p",11),e._uU(1,"No Meeting Scheduled For Selected Room !"),e.qZA())}function R(o,s){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA()()),2&o){const t=s.$implicit,n=s.index;e.xp6(2),e.Oqu(n+1),e.xp6(2),e.Oqu(t.user_name),e.xp6(2),e.Oqu(t.booking_date),e.xp6(2),e.AsE("",t.start_time," - ",t.end_time,""),e.xp6(2),e.Oqu(t.agenda),e.xp6(2),e.Oqu(t.room_name)}}function P(o,s){if(1&o&&(e.TgZ(0,"table")(1,"tr",12)(2,"th"),e._uU(3,"Sr No"),e.qZA(),e.TgZ(4,"th"),e._uU(5,"User Name"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Date"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Time"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Agenda"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Room"),e.qZA()(),e.YNc(14,R,13,7,"tr",13),e.qZA()),2&o){const t=e.oxw();e.xp6(14),e.Q6J("ngForOf",t.allMeetingRoomDetails)}}const O=[{path:"",component:(()=>{class o{constructor(t){this.commonSerive=t,this.openBookingPopup=!1,this.username=localStorage.getItem("username")||"",this.meetingRoomData=[],this.currentUserMeetings=[],this.allMeetingRoomList=[],this.selectedRoom="",this.allMeetingRoomDetails=[],this.tempdata=[{id:1,user_name:"User 1",booking_date:"2024-06-08",start_time:"10:00",end_time:"11:00",agenda:"test",room_name:"Meeting Room 1"},{id:1,user_name:"User 1",booking_date:"2024-06-08",start_time:"10:00",end_time:"11:00",agenda:"test",room_name:"Meeting Room 1"},{id:1,user_name:"User 1",booking_date:"2024-06-08",start_time:"10:00",end_time:"11:00",agenda:"test",room_name:"Meeting Room 1"},{id:1,user_name:"User 1",booking_date:"2024-06-08",start_time:"10:00",end_time:"11:00",agenda:"test",room_name:"Meeting Room 1"},{id:1,user_name:"User 1",booking_date:"2024-06-08",start_time:"10:00",end_time:"11:00",agenda:"test",room_name:"Meeting Room 1"},{id:1,user_name:"User 1",booking_date:"2024-06-08",start_time:"10:00",end_time:"11:00",agenda:"test",room_name:"Meeting Room 1"},{id:1,user_name:"User 1",booking_date:"2024-06-08",start_time:"10:00",end_time:"11:00",agenda:"test",room_name:"Meeting Room 1"},{id:1,user_name:"User 1",booking_date:"2024-06-08",start_time:"10:00",end_time:"11:00",agenda:"test",room_name:"Meeting Room 1"},{id:1,user_name:"User 1",booking_date:"2024-06-08",start_time:"10:00",end_time:"11:00",agenda:"test",room_name:"Meeting Room 1"},{id:1,user_name:"User 1",booking_date:"2024-06-08",start_time:"10:00",end_time:"11:00",agenda:"test",room_name:"Meeting Room 1"}]}ngOnInit(){this.commonSerive.loginStatusCheck.next(!0),this.meetingRoomData=this.commonSerive.MeetingRoomData;let t=this.getUserRoomDetails(this.username);this.currentUserMeetings=this.transformDataToView(t),this.allMeetingRoomList=this.getAllMeetingRoom(),this.selectedRoom=this.allMeetingRoomList[0],this.allMeetingRoomDetails=this.getBookingDetails(this.selectedRoom)}openBooking(){this.openBookingPopup=!0}popupClosed(){this.openBookingPopup=!1}refreshData(){let t=this.getUserRoomDetails(this.username);this.currentUserMeetings=this.transformDataToView(t)}getUserRoomDetails(t){const n=[];return this.meetingRoomData.forEach(i=>{i.booking_details.forEach(a=>{a.user_name===t&&n.push({room_name:i.room_name,booking_details:a})})}),n}transformDataToView(t){return t.map(n=>{const i=n.booking_details,[a,g]=i.booking_start.split(" "),[,d]=i.booking_end.split(" ");return{id:i.id,user_name:i.user_name,booking_date:a,start_time:g,end_time:d,agenda:i.agenda,room_name:n.room_name}})}getAllMeetingRoom(){let t=[];return this.meetingRoomData.forEach(n=>{t.push(n.room_name)}),t}getRoomDetails(){this.allMeetingRoomDetails=this.getBookingDetails(this.selectedRoom)}getBookingDetails(t){const n=this.meetingRoomData.find(a=>a.room_name===t);return n?n.booking_details.map((a,g)=>({id:g+1,user_name:a.user_name,booking_date:a.booking_start.split(" ")[0],start_time:a.booking_start.split(" ")[1],end_time:a.booking_end.split(" ")[1],agenda:a.agenda,room_name:t})):[]}deleteMeetingById(t){for(const n of this.meetingRoomData){const i=n.booking_details.findIndex(a=>a.id===t);if(-1!==i){n.booking_details.splice(i,1);let a=this.getUserRoomDetails(this.username);return void(this.currentUserMeetings=this.transformDataToView(a))}}alert(`Meeting with ID ${t} not found.`)}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(h.v))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:23,vars:8,consts:[[1,"home-page"],[1,"home-page_header"],[1,"home-page_btn-section"],[1,"primary-btn","btn-position",3,"click"],[1,"card","home-page_my-bookings"],[1,"home-page_data-division"],["class","text-center",4,"ngIf"],[4,"ngIf"],[3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[3,"show","closePopup","refreshData"],[1,"text-center"],[1,"fixed-header"],[4,"ngFor","ngForOf"],[1,"delete-btn",3,"click"],[3,"value"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2)(4,"button",3),e.NdJ("click",function(){return i.openBooking()}),e._uU(5,"Book Meeting"),e.qZA()(),e.TgZ(6,"div",4)(7,"h4"),e._uU(8,"Your Upcoming Mettings"),e.qZA(),e._UZ(9,"hr"),e.TgZ(10,"div",5),e.YNc(11,C,2,0,"p",6),e.YNc(12,q,16,1,"table",7),e.qZA()(),e.TgZ(13,"div",4)(14,"h4"),e._uU(15,"Meeting Room Details"),e.qZA(),e._UZ(16,"hr"),e.TgZ(17,"select",8),e.NdJ("ngModelChange",function(g){return i.selectedRoom=g})("change",function(){return i.getRoomDetails()}),e.YNc(18,A,2,2,"option",9),e.qZA(),e.TgZ(19,"div",5),e.YNc(20,D,2,0,"p",6),e.YNc(21,P,15,1,"table",7),e.qZA()()(),e.TgZ(22,"app-booking-page",10),e.NdJ("closePopup",function(){return i.popupClosed()})("refreshData",function(){return i.refreshData()}),e.qZA()),2&n&&(e.xp6(2),e.hij("Welcome ",i.username," !"),e.xp6(9),e.Q6J("ngIf",!i.currentUserMeetings.length),e.xp6(1),e.Q6J("ngIf",i.currentUserMeetings.length),e.xp6(5),e.Q6J("ngModel",i.selectedRoom),e.xp6(1),e.Q6J("ngForOf",i.allMeetingRoomList),e.xp6(2),e.Q6J("ngIf",!i.allMeetingRoomDetails.length),e.xp6(1),e.Q6J("ngIf",i.allMeetingRoomDetails.length),e.xp6(1),e.Q6J("show",i.openBookingPopup))},dependencies:[m.sg,m.O5,r.YN,r.Kr,r.EJ,r.JJ,r.On,x],styles:[".home-page[_ngcontent-%COMP%]{padding:10px 70px}.home-page_header[_ngcontent-%COMP%]{text-align:center}.home-page_my-bookings[_ngcontent-%COMP%]{margin-top:10px}.home-page_data-division[_ngcontent-%COMP%]{height:calc(100vh - 620px);overflow:auto}h4[_ngcontent-%COMP%]{margin:0}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:none;padding:8px;text-align:left}th[_ngcontent-%COMP%]{background-color:#f2f2f2;border-radius:4px}.fixed-header[_ngcontent-%COMP%]{position:sticky;top:0;background:white;z-index:1;padding-top:10px}select[_ngcontent-%COMP%]{width:20%;padding:8px;border:1px solid #ccc;border-radius:3px;margin-bottom:10px}.home-page_btn-section[_ngcontent-%COMP%]{display:flex;justify-content:end;align-items:center}.delete-btn[_ngcontent-%COMP%]{cursor:pointer;font-size:small;color:red}"]})}return o})()}];let w=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(O),p.Bz]})}return o})(),y=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({providers:[m.uU],imports:[m.ez,w,r.u5,r.UX]})}return o})()}}]);