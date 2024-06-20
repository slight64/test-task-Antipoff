export interface UserProfileSchema {
  username: string;
  email: string;
  password: string;
  isLoading: boolean;
  error?: string;
}
