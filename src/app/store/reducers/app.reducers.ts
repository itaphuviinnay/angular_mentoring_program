import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { userReducer } from './user.reducer';
import { coursesReducer } from './courses.reducer';

function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

export const appReducers: ActionReducerMap<AppState> = {
  user: userReducer,
  courses: coursesReducer
};
