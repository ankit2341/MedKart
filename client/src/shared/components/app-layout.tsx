import { ReactNode, useEffect } from "react";
import { AppContainer } from "./app-container";
import { useUser } from "../userdata-context";
import SplashView from "./splash";

export const AppMainLayout = ({
  children,
  isHappyCustomer,
}: {
  children: ReactNode;
  isHappyCustomer?: boolean;
}) => {
  const { loading, refetchUser } = useUser();

  useEffect(() => {
    refetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <SplashView />
  ) : (
    <AppContainer isHappyCustomer={!!isHappyCustomer}>{children}</AppContainer>
  );
};
