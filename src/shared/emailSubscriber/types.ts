export enum SignupStatus {
  success,
  duplicate,
  error,
}
export interface SignupResult {
  status: SignupStatus;
  message: string | null;
}

export interface SignupResponse{
  result: string;
  msg: string;
}
