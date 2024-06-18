export interface AuthSchema {
  username: string;
  email: string;
  password: string;
  isLoading: boolean;
  error?: string;
}
