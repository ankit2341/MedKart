import { ReactNode, useEffect, useState } from "react";
import { Button, Flex, VStack } from "@chakra-ui/react";
import Navbar from "./navigation/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faHeadset,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

interface AppContainerProps {
  children?: ReactNode;
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

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <SideNav />
      {children}
    </Flex>
  );
};
