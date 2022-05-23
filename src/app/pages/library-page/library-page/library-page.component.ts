import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';

// window.addEventListener('load', function () {
//   $('.timeline>.container-library>.tablink>.itemContent')
//     .parent()
//     .addClass('active')
//     .each(function () {
//       $('.timeline>.container-library>.tablink>.itemContent')
//         .parent()
//         .addClass('active');
//     });
// });

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss'],
})
export class LibraryPageComponent implements OnInit {
  listTimeLine = [
    {
      year: '2022',
      month: [
        { itemMonth: '30/12' },
        { itemMonth: '20/10' },
        { itemMonth: '15/9' },
        { itemMonth: '01/6' },
        { itemMonth: '30/04' },
        { itemMonth: '08/03' },
      ],
    },
    {
      year: '2021',
      month: [
        { itemMonth: '1' },
        { itemMonth: '2' },
      ],
    },
    {
      year: '2020',
      month: [
        { itemMonth: '1' },
        { itemMonth: '2' },
        { itemMonth: '3' },
        { itemMonth: '4' },
        { itemMonth: '5' },
        { itemMonth: '6' },
      ],
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    // autoplay: true,
    center: true,
    dots: false,
    // autoHeight: true,
    // autoWidth: true,
    URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: 'URLHash',
    nav: true,
    navText:["<div class='nav-btn prev-slide'><span class='material-symbols-outlined'>west</span></div>","<div class='nav-btn next-slide'><span class='material-symbols-outlined'>east</span></div>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
  constructor() {}

  ngOnInit(): void {}

  openTimeLine(evt: any, tabName: any) {
    let a = `list-time-${tabName}`;
    console.log('a', a);
    var i, x, tablinks;
    x = document.getElementsByClassName(
      'itemContent'
    ) as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    console.log('a', a)
    if (a != null) {
      let element = document.getElementById(a);
      if (element) {
        console.log('a', a)
        element.style.display = 'block';
      }
      evt.currentTarget.className += ' active';
    }
  }
}
