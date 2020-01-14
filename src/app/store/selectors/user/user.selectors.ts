import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../../state/user.state';

const userFeature = createFeatureSelector<UserState>('user');

export const userSelector = createSelector(
  userFeature,
  userState => userState.user
);

export const isUserAuthenticatedSelector = createSelector(
  userSelector,
  user => !!user
);

export const userAuthTokenSelector = createSelector(userSelector, user =>
  user ? user.fakeToken : ''
);
