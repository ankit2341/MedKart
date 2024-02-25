import { ReactNode } from "react";
import { AuthContainer } from "./auth-container";

export const AuthMainLayout = ({ children }: { children: ReactNode }) => {
  return <AuthContainer>{children}</AuthContainer>;
};
