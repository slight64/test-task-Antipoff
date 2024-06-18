import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from '../../../../entities/User';
import { usersListReducer } from '../../../../entities/UsersList/model/slice/usersListSlice';

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
  usersList: usersListReducer,
};

export const store = configureStore<StateSchema>({
  reducer: rootReducers,
});
