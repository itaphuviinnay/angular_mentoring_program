import { Course } from 'src/app/models/course';

export const courses: Course[] = [
  {
    id: 1,
    title: 'Angular Global Mentoring Program [2019Q3 IN]',
    description: `Angular – is one of the most famous and fast-growing frameworks in our days. It's extremely modular, lightweight, and easy to learn`,
    duration: 80,
    creationDate: new Date('11/21/2019'),
    topRated: true
  },
  {
    id: 2,
    title: 'NodeJS Global Mentoring Program [2019Q2 IN]',
    description: `Cross-country global mentoring program which aims at improving corresponding skills related to Node.js ecosystem and connected environment. Giving a strong base of skill set required to have for a production-ready engineer`,
    duration: 90,
    creationDate: new Date('11/05/2019'),
    topRated: false
  },
  {
    id: 3,
    title: 'Design Patterns in JS #1',
    description: `The course contains information about all existing design patterns. During the lectures we will review the patterns and see how to apply them on practice within live coding sessions. After each module attendees will perform home tasks`,
    duration: 105,
    creationDate: new Date('10/23/2019'),
    topRated: true
  }
];
