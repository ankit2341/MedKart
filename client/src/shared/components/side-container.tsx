import { Box, Container, Divider, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SideContainerProps {
    sideContent:ReactNode;
    mainContent:ReactNode
}

const SideContainer = ({sideContent,mainContent}:SideContainerProps) => {
  return (
    <Container px={10}>
        <HStack>
            <Box>
                {sideContent}
            </Box>
            <Divider colorScheme="brand" orientation="vertical" />
            <Box>
                {mainContent}
            </Box>
        </HStack>
    </Container>
  );
};

export default SideContainer;