import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class RecruitmentComponent implements OnInit {
  dataRecruitment = [
    {title: 'Frontend (WebApp) Developer 1', amount: '999.999.999', deadline: '12/05/2021',
     des: 'Tham gia phát triển các dự án của công ty. Lập trình xây dựng core, front end cho các hệ thống của công ty và người dùng Thực hiện phát triển các dự án bằng ngôn ngữ React, VueJS, AngularJS, PHP...',
    level: 'new'},
    {title: 'Frontend (WebApp) Developer 2', amount: '999.999.999', deadline: '12/05/2021',
     des: 'Tham gia phát triển các dự án của công ty. Lập trình xây dựng core, front end cho các hệ thống của công ty và người dùng Thực hiện phát triển các dự án bằng ngôn ngữ React, VueJS, AngularJS, PHP...',
    level: 'new'},
    {title: 'Frontend (WebApp) Developer 3', amount: '999.999.999', deadline: '12/05/2021',
     des: 'Tham gia phát triển các dự án của công ty. Lập trình xây dựng core, front end cho các hệ thống của công ty và người dùng Thực hiện phát triển các dự án bằng ngôn ngữ React, VueJS, AngularJS, PHP...',
    level: 'new'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
