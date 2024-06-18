export interface User {
  id: string;
  token: string;
}

export interface UserSchema {
  userData?: User;
}
