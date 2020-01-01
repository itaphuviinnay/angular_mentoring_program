export interface User {
  id: number;
  login: string;
  password: string;
  name: NameModel;
  fakeToken: string;
}

export interface NameModel {
  first: string;
  last: string;
}
