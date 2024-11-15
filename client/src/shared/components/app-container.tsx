import { ReactNode } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navbar from "./navigation/navbar";
import Footer from "./navigation/footer";
import useIsMobile from "../hooks/use-is-mobile";
import HappyCustomers from "./happy-customers";
import { FacebookLogo, InstagramLogo, XLogo, YoutubeLogo } from "../icons";
import { useTheme } from "@/context/theme-context";
import Chatbot from "@/features/chatbot";

interface AppContainerProps {
  children?: ReactNode;
  isHappyCustomer?: boolean;
}

export const AppContainer = ({
  children,
  isHappyCustomer,
}: AppContainerProps) => {
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  return (
    <Flex direction="column" minH="100vh" pb={10}>
      <Navbar />
      {children}
      {isHappyCustomer && <HappyCustomers />}
      <Divider />
      <VStack
        color={"brand.font"}
        spacing={1}
        bg={theme === "dark" ? "gray.800" : "gray.100"}
        py={20}
        px={4}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text fontSize={"large"} fontWeight={"bold"}>
          Let&apos;s Stay In Touch
        </Text>
        <Text fontSize={"md"} textAlign={"center"}>
          Get the latest tips straight to your inbox. Can’t wait to connect!
        </Text>
        <HStack
          pt={4}
          spacing={1}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Input
            color={"black"}
            bg={"white"}
            w={isMobile ? "100%" : "30%"}
            placeholder="Enter email address"
            focusBorderColor="brand.primary"
          />
          <Button bg={"brand.primary"} color={"white"}>
            Subscribe
          </Button>
        </HStack>
        <HStack pt={3}>
          <IconButton
            bg={"white"}
            borderRadius={"lg"}
            aria-label="ds"
            border={"1px solid"}
            borderColor={"gray.200"}
          >
            <XLogo />
          </IconButton>
          <IconButton
            bg={"white"}
            borderRadius={"lg"}
            aria-label="ds"
            border={"1px solid"}
            borderColor={"gray.200"}
          >
            <YoutubeLogo />
          </IconButton>
          <IconButton
            bg={"white"}
            borderRadius={"lg"}
            aria-label="ds"
            border={"1px solid"}
            borderColor={"gray.200"}
          >
            <FacebookLogo />
          </IconButton>
          <IconButton
            bg={"white"}
            borderRadius={"lg"}
            aria-label="ds"
            border={"1px solid"}
            borderColor={"gray.200"}
          >
            <InstagramLogo />
          </IconButton>
        </HStack>
      </VStack>
      <Footer />
      <Box pos={"fixed"} zIndex={11} bottom={10} right={isMobile?2:10}>
     <Chatbot/>
      </Box>
    </Flex>
  );
};
