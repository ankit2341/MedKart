import type { ReactNode } from "react";
import { useMemo } from "react";
import {
  useDisclosure,
  Flex,
  Stack,
  VStack,
  Divider,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import useIsMobile from "../hooks/use-is-mobile";

interface SectionPageContainerProps {
  mainContent: ReactNode;
  sideContent: ReactNode;
  sidePosition?: "left" | "right";
  isMobileSideContent?: boolean;
}

export const SectionPageContainer = ({
  mainContent,
  sideContent,
  sidePosition = "left",
  isMobileSideContent = false,
}: SectionPageContainerProps) => {
  const baseSideContentDisplay = useMemo(
    () => ({
      base: isMobileSideContent ? "none" : "flex",
      sm: "flex",
    }),
    [isMobileSideContent]
  );
  const mobileSideContentDisplay = useMemo(
    () => ({
      base: isMobileSideContent ? "flex" : "none",
      sm: "none",
    }),
    [isMobileSideContent]
  );
  const containerSpacing = useMemo(
    () => ({
      base: isMobileSideContent ? "0" : "10",
      sm: "10",
      md: "6",
    }),
    [isMobileSideContent]
  );

  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const shouldWrapChildren = useBreakpointValue({ lg: false, md: true });
  const ismobile=useIsMobile();

  return (
    <Stack
      flex="1"
      p={10}
      shouldWrapChildren={shouldWrapChildren}
      w="100%"
      direction={{
        base: "column",
        lg: sidePosition === "left" ? "row" : "row-reverse",
      }}
      spacing={containerSpacing}
    >
      <Box
        as="aside"
        position={{ base: "static", lg: "sticky" }}
        top="20"
        h={{ base: "auto", lg: "100vh" }}
        overflowY="auto"
        flex={1}
        // w={{ base: "100%", lg: "fit-content" }}
        display={baseSideContentDisplay}
        bg={"brand.background"}
     
      >
        {sideContent}
      </Box>
      <Flex p="0" display={baseSideContentDisplay}>
        <Divider
          orientation="vertical"
          border={"1px solid"}
          borderColor={"gray.300"}
          display={{ base: "none", md: "block" }}
        />
        <Divider
          orientation="horizontal"
          display={{ base: "block", md: "none" }}
        />
      </Flex>
      <Flex pb={4} justify="flex-end" display={mobileSideContentDisplay}>
        <IconButton
          aria-label="Open filters drawer"
          icon={<FontAwesomeIcon icon={faFilter} />}
         onClick={onDrawerOpen}
        />
        <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose} size="full">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody py="12">{sideContent}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      <VStack pl={ismobile?0:4} flex="3" spacing="10" overflowX={{ md: "hidden" }}>
        {mainContent}
      </VStack>
    </Stack>
  );
};
