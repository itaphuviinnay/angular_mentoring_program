import { CourseOrderByPipe } from './course-order.pipe';

describe('CourseOrderPipe', () => {
  it('create an instance', () => {
    const pipe = new CourseOrderByPipe();
    expect(pipe).toBeTruthy();
  });
});
