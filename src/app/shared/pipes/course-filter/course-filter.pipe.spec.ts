import { CourseFilterPipe } from './course-filter.pipe';
import { courses } from '../../services/courses/courses.mock';
import { Course } from 'src/app/models/course';

describe('CourseDurationPipe', () => {
  let pipe: CourseFilterPipe;

  beforeEach(() => {
    pipe = new CourseFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return filtered courses list if searched input matches with atleast one course', () => {
    const searchInput = 'angular';
    const expectedResult: Course[] = [
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
      }
    ];
    const output = pipe.transform(searchInput, courses);
    expect(expectedResult).toEqual(output);
  });

  it('should return an empty list if searched input does not match with any of the courses', () => {
    const searchInput = 'Vinay';
    const expectedResult: Course[] = [];
    const output = pipe.transform(searchInput, courses);
    expect(expectedResult).toEqual(output);
  });

  it('should return list of all courses if searched input is empty', () => {
    const searchInput = '';
    const expectedResult: Course[] = courses;
    const output = pipe.transform(searchInput, courses);
    expect(expectedResult).toEqual(output);
  });
});
