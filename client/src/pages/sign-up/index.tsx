import { AuthMainLayout } from "@/shared/components/auth-layout";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import { isValidEmail } from "@/utils";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import usePost from "@/shared/api/hooks/use-post";
import { showToast } from "@/shared/shared-toast";
import { useRouter } from "next/router";
import { useTheme } from "@/context/theme-context";

const SignUp = () => {
  const isMobile = useIsMobile();
  const istablet = useIsTablet();
  const [email, setEmail] = useState("");
  const isError = email !== "" && !isValidEmail(email);
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();
  const { theme } = useTheme();
  const { loading, post } = usePost("/users/register");
  const isSignupDisabled =
    !isError &&
    email !== "" &&
    firstName !== "" &&
    lastName !== "" &&
    password !== "" &&
    phoneNumber !== "";

  const handleRegister = async () => {
    const res = await post({
      username: firstName + lastName,
      email: email,
      password: password,
      avatar: "",
      phoneNumber: phoneNumber,
    });
    if (res?.Message === "User already registered") {
      showToast("error", res?.Message);
    } else if (res?.Message === "User registered successfully") {
      showToast("success", res?.Message);
      router.push("/sign-in");
    } else {
      showToast("error", "Failed to register! try again later");
    }
  };

  return (
    <motion.div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <VStack
        bg="brand.background"
        borderRadius="xl"
        spacing={isMobile ? 4 : 8}
        width={isMobile || istablet ? "100%" : "80%"}
        border="1px solid"
        borderColor={theme === "dark" ? "gray.600" : "lightgray"}
        px={isMobile ? 4 : 10}
        py={10}
      >
        <HStack pb={6}>
          <HStack spacing={1} fontSize={isMobile ? "larger" : "x-large"}>
            <Box bg="brand.primary" color="brand.background" px={2}>
              <FontAwesomeIcon icon={faM} />
            </Box>
            <Text color="brand.backgroundDark">edKart</Text>
          </HStack>
          <Text fontSize={isMobile ? "larger" : "x-large"}>Sign Up</Text>
        </HStack>
        <Text fontSize={isMobile ? "small" : "medium"}>
          Sign up with your email
        </Text>
        <HStack flexDir={isMobile ? "column" : "row"} width="100%" spacing={4}>
          <FormControl>
            <Input
              border="1px solid"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              borderColor={theme === "dark" ? "gray.600" : "lightgray"}
              placeholder="Enter first name"
              focusBorderColor="brand.primary"
              padding={6}
              type="text"
            />
          </FormControl>
          <FormControl>
            <Input
              border="1px solid"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              borderColor={theme === "dark" ? "gray.600" : "lightgray"}
              placeholder="Enter last name"
              focusBorderColor="brand.primary"
              padding={6}
              type="text"
            />
          </FormControl>
        </HStack>
        <FormControl>
          <InputGroup>
            <InputLeftAddon
              p={6}
              bg={"brand.primary"}
              color={"brand.fontLight"}
            >
              +91
            </InputLeftAddon>
            <Input
              border="1px solid"
              borderColor={theme === "dark" ? "gray.600" : "lightgray"}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
              focusBorderColor="brand.primary"
              padding={6}
              type="text"
            />
          </InputGroup>
        </FormControl>
        <FormControl isInvalid={isError}>
          <Input
            focusBorderColor="brand.primary"
            padding={6}
            border="1px solid"
            borderColor={theme === "dark" ? "gray.600" : "lightgray"}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isError ? null : (
            <FormErrorMessage>Please enter valid email</FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <Input
            border="1px solid"
            borderColor={theme === "dark" ? "gray.600" : "lightgray"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            focusBorderColor="brand.primary"
            padding={6}
            type="password"
          />
        </FormControl>

        <Box width="100%">
          <Checkbox width={"100%"} colorScheme="cyan" defaultChecked>
            <Text fontSize={isMobile ? "smaller" : "medium"}>
              I agree to MedKart&apos;s policy and terms
            </Text>
          </Checkbox>
        </Box>
        <Button
          width="100%"
          onClick={handleRegister}
          py={6}
          isDisabled={!isSignupDisabled}
          px={8}
          bg="brand.primary"
          isLoading={loading}
          color={"brand.fontLight"}
        >
          Create Account
        </Button>
        <Text fontSize={isMobile ? "small" : "medium"}>
          Alreary have an account!{" "}
          <Link
            style={{ color: "rgb(0, 206, 209)", fontWeight: "bold" }}
            href={"/sign-in"}
          >
            Sign in
          </Link>{" "}
          now!
        </Text>
      </VStack>
    </motion.div>
  );
};

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <AuthMainLayout>{page}</AuthMainLayout>;
};

export default SignUp;
