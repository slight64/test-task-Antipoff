import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from '../../../../entities/User';
import { usersListReducer } from '../../../../entities/UsersList/model/slice/usersListSlice';
import { userProfileSliceReducer } from '../../../../entities/UserProfile/model/slice/userProfileSlice';

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
  usersList: usersListReducer,
  userProfile: userProfileSliceReducer,
};

export const store = configureStore<StateSchema>({
  reducer: rootReducers,
});
