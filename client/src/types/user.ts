export enum LoginResponseMessages {
  SUCCESS = "User logged in successfully",
  INVALID_CREDENTIALS = "Invalid Credentials",
  USER_NOT_FOUND = "User with entered credentials does not exist",
  TOKEN_MISSING = "Token is missing",
  LOGIN_FAILED = "Failed to login! try again later",
}

export interface UserAddress {
  _id: string;
  userId: string;
  name: string;
  addressline1: string;
  city: string;
  pincode: number;
  phoneNumber: number;
  type: "HOME" | "WORK";
}
