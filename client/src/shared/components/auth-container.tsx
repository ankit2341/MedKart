import { ReactNode } from "react";
import { Box, Center, Flex, HStack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHandHoldingMedical,
  faM,
  faMedkit,
  faPills,
  faPumpMedical,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import useIsMobile from "../hooks/use-is-mobile";
import useIsTablet from "../hooks/use-is-tablet";
import { useRouter } from "next/router";

interface AppContainerProps {
  children?: ReactNode;
}

export const AuthContainer = ({ children }: AppContainerProps) => {
  const isMobile = useIsMobile();
  const istablet = useIsTablet();
  const router = useRouter();
  return (
    <Flex
      width="100%"
      height="100vh"
      bg={isMobile || istablet ? "brand.primary" : "brand.background"}
    >
      <HStack
        pos="absolute"
        top={10}
        left={isMobile || istablet ? 4 : 10}
        color="brand.background"
        cursor="pointer"
        onClick={() => router.back()}
      >
        <FontAwesomeIcon size="xl" icon={faArrowLeft} />
        <Text>Go Back</Text>
      </HStack>

      {!isMobile && !istablet && (
        <Box
          width={isMobile || istablet ? "100%" : "50%"}
          px={isMobile ? "4" : "10"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          py={"10"}
          height="100vh"
          color="brand.background"
          bg="brand.primary"
        >
          <HStack
            pos="absolute"
            top={10}
            left={10}
            cursor="pointer"
            onClick={() => router.back()}
          >
            <FontAwesomeIcon size="xl" icon={faArrowLeft} />
            <Text>Go Back</Text>
          </HStack>
          <HStack spacing={1} fontSize="xxx-large">
            <Box bg="brand.background" color="brand.primary" px={2}>
              <FontAwesomeIcon icon={faM} bounce />
            </Box>
            <Text>edKart</Text>
          </HStack>
          <Center
            bg="brand.primary"
            color="brand.background"
            id="scale_infinity_2"
            pos="absolute"
            top={40}
            left={40}
            zIndex={10}
          >
            <FontAwesomeIcon size="3x" icon={faHandHoldingMedical} />
          </Center>
          <Center
            pos="absolute"
            top={"10%"}
            right={"60%"}
            bg="brand.primary"
            color="brand.background"
            id="scale_infinity_3"
          >
            <FontAwesomeIcon size="3x" icon={faPills} />
          </Center>

          <Center
            pos="absolute"
            left={"15%"}
            bottom={"10%"}
            bg="brand.primary"
            color="brand.background"
            id="scale_infinity_3"
          >
            <FontAwesomeIcon size="3x" icon={faPumpMedical} />
          </Center>
          <Center
            pos="absolute"
            left={"5%"}
            bottom={"30%"}
            bg="brand.primary"
            color="brand.background"
            id="scale_infinity_3"
          >
            <FontAwesomeIcon size="3x" icon={faMedkit} />
          </Center>
          <Center
            pos="absolute"
            bottom={"10%"}
            right={"60%"}
            id="scale_infinity_4"
            bg="brand.primary"
            color="brand.background"
          >
            <FontAwesomeIcon size="3x" icon={faStethoscope} />
          </Center>
        </Box>
      )}
      <Box
        width={isMobile || istablet ? "100%" : "50%"}
        px={isMobile ? "4" : "10"}
        minH={isMobile || istablet ? "70vh" : "100vh"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Box>
    </Flex>
  );
};
