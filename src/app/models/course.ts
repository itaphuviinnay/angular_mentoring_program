export interface Course {
  id: number;
  title: string;
  description: string;
  duration: number;
  creationDate: Date;
  authors: string[];
  topRated: boolean;
}
