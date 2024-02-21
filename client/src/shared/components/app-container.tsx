import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "./navigation/navbar";

interface AppContainerProps {
  children?: ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      {children}
    </Flex>
  );
};
