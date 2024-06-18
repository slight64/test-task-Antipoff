import { UsersListSchema } from '../../../../entities/UsersList/model/types/userSchema';
import { UserSchema } from '../../../../entities/User';

export interface StateSchema {
  user: UserSchema;
  usersList: UsersListSchema;
}
