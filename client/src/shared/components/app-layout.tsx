import { ReactNode } from "react";
import { AppContainer } from "./app-container";

export const AppMainLayout = ({
  children,
  isHappyCustomer,
}: {
  children: ReactNode;
  isHappyCustomer?: boolean;
}) => {
  return (
    <AppContainer isHappyCustomer={!!isHappyCustomer}>{children}</AppContainer>
  );
};
