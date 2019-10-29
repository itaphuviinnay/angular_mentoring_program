import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[];

  constructor() { }

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: 'Angular Global Mentoring Program [2019Q3 IN]',
        description: `Angular – is one of the most famous and fast-growing frameworks in our days. It's extremely modular, lightweight, and easy to learn`,
        duration: 60,
        creationDate: new Date()
      }, {
        id: 2,
        title: 'NodeJS Global Mentoring Program [2019Q2 IN]',
        description: `Cross-country global mentoring program which aims at improving corresponding skills related to Node.js ecosystem and connected environment. Giving a strong base of skill set required to have for a production-ready engineer`,
        duration: 60,
        creationDate: new Date()
      }, {
        id: 3,
        title: 'Design Patterns in JS #1',
        description: `The course contains information about all existing design patterns. During the lectures we will review the patterns and see how to apply them on practice within live coding sessions. After each module attendees will perform home tasks`,
        duration: 60,
        creationDate: new Date()
      }
    ];
  }

}
