import { Course } from 'src/app/models/course';

export const courses: Course[] = [
  {
    id: 1,
    name: 'Angular Global Mentoring Program [2019Q3 IN]',
    description: `Angular – is one of the most famous and fast-growing frameworks in our days. It's extremely modular, lightweight, and easy to learn`,
    length: 80,
    date: new Date('11/21/2019'),
    authors: [
      { id: 1, name: 'Vinay', lastName: 'Itapu' },
      { id: 2, name: 'EPAM', lastName: 'Systems' }
    ],
    isTopRated: true
  },
  {
    id: 2,
    name: 'NodeJS Global Mentoring Program [2019Q2 IN]',
    description: `Cross-country global mentoring program which aims at improving corresponding skills related to Node.js ecosystem and connected environment. Giving a strong base of skill set required to have for a production-ready engineer`,
    length: 90,
    date: new Date('11/05/2019'),
    authors: [
      { id: 1, name: 'Vinay', lastName: 'Itapu' },
      { id: 2, name: 'EPAM', lastName: 'Systems' }
    ],
    isTopRated: false
  },
  {
    id: 3,
    name: 'Design Patterns in JS #1',
    description: `The course contains information about all existing design patterns. During the lectures we will review the patterns and see how to apply them on practice within live coding sessions. After each module attendees will perform home tasks`,
    length: 105,
    date: new Date('10/23/2019'),
    authors: [
      { id: 1, name: 'Vinay', lastName: 'Itapu' },
      { id: 2, name: 'EPAM', lastName: 'Systems' }
    ],
    isTopRated: true
  }
];
