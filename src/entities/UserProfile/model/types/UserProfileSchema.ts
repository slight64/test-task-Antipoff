export interface UserProfile {
  id: number | undefined;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  isLoading: boolean;
  error: string;
}

export interface UserProfileSchema {
  userProfile: UserProfile;
}

export interface UserData {
  data: UserProfile;
}
