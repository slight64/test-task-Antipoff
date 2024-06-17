import { UserSchema } from './model/types/userSchema';
import { userReducer, userActions } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { userReducer, userActions, type UserSchema, getUserAuthData};
