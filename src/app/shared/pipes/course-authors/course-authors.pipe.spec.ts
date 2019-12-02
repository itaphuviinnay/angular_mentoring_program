import { CourseAuthorsPipe } from './course-authors.pipe';

describe('CourseAuthorsPipe', () => {
  let pipe: CourseAuthorsPipe;

  beforeEach(() => {
    pipe = new CourseAuthorsPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
