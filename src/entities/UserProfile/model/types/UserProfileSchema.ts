
export interface UserProfile {
  id: number | null;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserProfileSchema {
  userProfile?: UserProfile;
}
