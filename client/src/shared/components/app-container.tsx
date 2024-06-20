import { ReactNode, useEffect, useState } from "react";
import {
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faHeadset,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./navigation/footer";
import useIsMobile from "../hooks/use-is-mobile";
import HappyCustomers from "./happy-customers";
import { FacebookLogo, InstagramLogo, XLogo, YoutubeLogo } from "../icons";
import { useTheme } from "@/context/theme-context";

interface AppContainerProps {
  children?: ReactNode;
  isHappyCustomer?: boolean;
}

const SideNav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return showNavbar ? (
    <VStack
      zIndex={10000}
      pos="fixed"
      bg="brand.background"
      borderRadius="full"
      right={0}
      top={"40vh"}
      boxShadow={"lg"}
      border="1px solid"
      borderColor="brand.primary"
      spacing={1}
      px={0}
      py={4}
    >
      <Button title="Contact us" bg="brand.background" color="brand.primary">
        <FontAwesomeIcon icon={faHeadset} />
      </Button>
      <Button title="Report a bug" bg="brand.background" color="brand.primary">
        <FontAwesomeIcon icon={faBug} />
      </Button>
      <Button
        title="Report complaint"
        bg="brand.background"
        color="brand.primary"
      >
        <FontAwesomeIcon icon={faUserShield} />
      </Button>
    </VStack>
  ) : null;
};

export const AppContainer = ({
  children,
  isHappyCustomer,
}: AppContainerProps) => {
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  return (
    <Flex direction="column" minH="100vh" pb={10}>
      <Navbar />
      {!isMobile && <SideNav />}
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
    </Flex>
  );
};
