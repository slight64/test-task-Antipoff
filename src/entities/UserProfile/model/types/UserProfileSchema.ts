export interface UserProfile {
  id: number | undefined;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserProfileSchema {
  userProfile?: UserProfile;
  isLoading: boolean;
  error?: string;
}

export interface UserData {
  data?: UserProfile;
}
