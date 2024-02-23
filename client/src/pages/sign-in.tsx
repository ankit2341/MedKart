import useIsMobile from "@/shared/hooks/use-is-mobile";
import { isValidEmail } from "@/utils";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  faArrowLeft,
  faHandHoldingMedical,
  faM,
  faMedkit,
  faPills,
  faPumpMedical,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useState } from "react";
import useIsTablet from "@/shared/hooks/use-is-tablet";

const SignIn = () => {
  const isMobile = useIsMobile();
  const istablet = useIsTablet();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isError = email !== "" && !isValidEmail(email);

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
        <VStack
          bg="brand.background"
          borderRadius="xl"
          spacing={4}
          width={isMobile || istablet ? "100%" : "80%"}
          border="1px solid"
          borderColor="lightgray"
          p={10}
        >
          <HStack>
            <HStack spacing={1} fontSize="x-large">
              <Box bg="brand.primary" color="brand.background" px={2}>
                <FontAwesomeIcon icon={faM} />
              </Box>
              <Text color="brand.backgroundDark">edKart</Text>
            </HStack>
            <Text fontSize="x-large">Sign In</Text>
          </HStack>
          <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Input
              focusBorderColor="brand.primary"
              padding={6}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!isError ? null : (
              <FormErrorMessage>Please enter valid email</FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              focusBorderColor="brand.primary"
              padding={6}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Box width="100%">
            <Checkbox colorScheme="cyan" defaultChecked>
              I agree to MedKart&apos;s terms and conditions
            </Checkbox>
          </Box>
          <Button
            width="100%"
            mt={6}
            py={6}
            px={8}
            bg="brand.primary"
            color={"brand.fontLight"}
          >
            Sign In
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default SignIn;
