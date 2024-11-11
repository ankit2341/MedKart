import { ReactNode, useEffect } from "react";
import { AuthContainer } from "./auth-container";
import { useUser } from "../userdata-context";
import SplashView from "./splash";
import { useRouter } from "next/router";

export const AuthMainLayout = ({ children }: { children: ReactNode }) => {
  const { userData, loading, refetchUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    refetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (userData?._id) {
    router.replace("/");
  }

  return loading ? <SplashView /> : <AuthContainer>{children}</AuthContainer>;
};
