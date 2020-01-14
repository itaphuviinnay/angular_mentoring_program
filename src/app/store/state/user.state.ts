import { User } from 'src/app/models/user';

export interface UserState {
  user: User;
}

export const initialUserState: UserState = {
  user: null
};
