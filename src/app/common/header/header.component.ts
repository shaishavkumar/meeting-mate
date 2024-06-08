import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   username: string = '';
  constructor(private commonService: CommonService, private router: Router){}
  ngOnInit(): void {
    //? All of these can be handled batter with auth and role guards
    this.commonService.loginStatusCheck.subscribe(res => {
       this.username = localStorage.getItem('username') || '' ;
    })
  }

  logout(){
    this.username = '';
    localStorage.clear();
    this.router.navigateByUrl('/')
  }

}
