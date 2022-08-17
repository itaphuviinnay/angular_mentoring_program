import { CourseDurationPipe } from './course-duration.pipe';

describe('CourseDurationPipe', () => {
  let pipe: CourseDurationPipe;

  beforeEach(() => {
    pipe = new CourseDurationPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform duration to hours and minutes if duration is greater than 60 minutes', () => {
    const courseDurationInMinutes = 130;
    const expectedResult = '2 h 10 min';
    const output = pipe.transform(courseDurationInMinutes);
    expect(output).toEqual(expectedResult);
  });

  it('should transform duration to hours if duration is equal to 60 minutes', () => {
    const courseDurationInMinutes = 60;
    const expectedResult = '1 h';
    const output = pipe.transform(courseDurationInMinutes);
    expect(output).toEqual(expectedResult);
  });

  it('should transform duration to minutes if duration is less than 60 minutes', () => {
    const courseDurationInMinutes = 40;
    const expectedResult = '40 min';
    const output = pipe.transform(courseDurationInMinutes);
    expect(output).toEqual(expectedResult);
  });
});
