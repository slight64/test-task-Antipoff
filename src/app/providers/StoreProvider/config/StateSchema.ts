import { UsersListSchema } from '../../../../entities/UsersList/model/types/userSchema';
import { UserSchema } from '../../../../entities/User';
import { UserProfileSchema } from '../../../../entities/UserProfile/model/types/UserProfileSchema';

export interface StateSchema {
  user: UserSchema;
  usersList: UsersListSchema;
  userProfile: UserProfileSchema;
}
