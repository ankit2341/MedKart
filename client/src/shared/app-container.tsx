import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface AppContainerProps {
  children?: ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <Flex direction="column" minH="100vh">
      {children}
    </Flex>
  );
};
