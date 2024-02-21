import { ReactNode } from "react";
import { AppContainer } from "./app-container";

export const AppMainLayout = ({ children }: { children: ReactNode }) => {
  return <AppContainer>{children}</AppContainer>;
};
