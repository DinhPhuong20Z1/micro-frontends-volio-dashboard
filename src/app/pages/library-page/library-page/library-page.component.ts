
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';


$(() => {
	let stickyTop = 0,
		scrollTarget = false

	let timeline = $('.timeline__nav'),
		items = $('li', timeline),
		milestones = $('.timeline__section .milestone'),
		offsetTop = parseInt(timeline.css('top'))

	const TIMELINE_VALUES = {
		start: 190,
		step: 30
	}
  let indexNew: number;

	$(window).resize(function () {
		timeline.removeClass('fixed')

      stickyTop = (timeline.offset().top ) - offsetTop



		$(window).trigger('scroll')
	}).trigger('resize')

	$(window).scroll(function () {
		if ($(window).scrollTop() > stickyTop) {
			timeline.addClass('fixed')
		} else {
			timeline.removeClass('fixed')
		}
	}).trigger('scroll')

	items.find('span').click(function () {
		let li = $(this).parent(),
			index = li.index(),
			milestone = milestones.eq(index)

		if (! li.hasClass('active') && milestone.length) {
      console.log('index',index)
			scrollTarget = !!index;
      indexNew = index;
      console.log('scrollTarget',scrollTarget)

			let scrollTargetTop = milestone.offset().top - 80

			$('html, body').animate({ scrollTop: scrollTargetTop }, {
				duration: 400,
				complete: function complete() {
					scrollTarget = false
				}
			})
		}
	})

	$(window).scroll(function () {
		let viewLine = $(window).scrollTop() + $(window).height() / 3;
			let active = -1
      // console.log('viewLine',viewLine)

		if (scrollTarget === false) {
			milestones.each(function () {
				if ($(this).offset().top - viewLine > 0) {
					return false
				}
				active++;
			})
		} else {
			active = scrollTarget?indexNew:indexNew;
		}

		timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px')

		items.filter('.active').removeClass('active')
		items.eq(active != -1 ? active : 0).addClass('active')
	}).trigger('scroll')
})

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss'],
})
export class LibraryPageComponent implements OnInit {
  openvideo = '1';
  imageSrc = '';
  listTimeLine = [
    {
      year: '2022',
      month: [
        { itemMonth: '20/10' },
        { itemMonth: '15/9' },
        { itemMonth: '01/6' },
        { itemMonth: '30/04' },
        { itemMonth: '08/03' },
      ],
    },
    {
      year: '2021',
      month: [{ itemMonth: '1' }, { itemMonth: '2' }],
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
    dots: false,
    // autoHeight: true,
     // autoWidth: true,
     nav: true,
     navText: [
       "<div class='nav-btn prev-slide'><span class='material-symbols-outlined'>west</span></div>",
       "<div class='nav-btn next-slide'><span class='material-symbols-outlined'>east</span></div>",
     ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 7
        ,
      },
      1000: {
        items: 10,
      },
    },
  };
  constructor() {}

  ngOnInit(): void {

  }

  // openTimeLine(evt: any, tabName: any) {
  //   let a = `list-time-${tabName}`;
  //   var i, x, tablinks;
  //   x = document.getElementsByClassName(
  //     'itemContent'
  //   ) as HTMLCollectionOf<HTMLElement>;
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = 'none';
  //   }
  //   tablinks = document.getElementsByClassName('tablink');
  //   for (i = 0; i < x.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(' active-item-year', '');
  //   }
  //   if (a != null) {
  //     let element = document.getElementById(a);
  //     if (element) {
  //       element.style.display = 'block';
  //     }
  //     evt.currentTarget.className += ' active-item-year';
  //   }
  // }

  openTimeLine(evt: any, tabName: any) {
    var i, x, tablinks;
    x = document.getElementsByClassName(
      'itemContent'
    ) as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active-item-year', '');
    }
    if (tabName != null) {
      let element = document.getElementById(tabName);
      if (element) {
        element.style.display = 'block';
      }
      evt.currentTarget.className += ' active-item-year';
    }
  }

  onData(evt: any, time: any) {
    console.log('time', time);
  }

  openVideo() {
    this.openvideo = '1';
  }

  myFunction(imgs: any) {
    console.log('imgs',imgs)
    this.openvideo = '';
    let expandImg = document.getElementById(
      'expandedImg'
    ) as HTMLImageElement | null;
    console.log('expandImg',expandImg)
    console.log('imgs.srcElement',imgs.srcElement)
    if (expandImg != null) {
      expandImg.src = imgs.srcElement.currentSrc;
    } else {
      this.imageSrc = imgs.srcElement.currentSrc;
    }
    if (expandImg != null && expandImg.parentElement != null) {
      expandImg.parentElement.style.display = 'block';
    }
  }
}
