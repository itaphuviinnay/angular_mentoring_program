export interface Course {
  id: number;
  name: string;
  description: string;
  length: number;
  date: Date;
  authors: CourseAuthor[];
  isTopRated: boolean;
}

export interface CourseAuthor {
  id: number;
  name: string;
  lastName: string;
}
