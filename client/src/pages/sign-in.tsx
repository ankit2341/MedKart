import useIsMobile from "@/shared/hooks/use-is-mobile";
import { isValidEmail } from "@/utils";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import { GoogleLogo } from "@/shared/icons";
import { AuthMainLayout } from "@/shared/components/auth-layout";
import Link from "next/link";
import { motion } from "framer-motion";

const SignIn = () => {
  const isMobile = useIsMobile();
  const istablet = useIsTablet();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isError = email !== "" && !isValidEmail(email);

  const handleLogin = () => {
    router.push("/");
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
        borderColor="lightgray"
        p={isMobile ? 4 : 10}
        py={10}
      >
        <HStack pb={4}>
          <HStack spacing={1} fontSize={isMobile ? "larger" : "x-large"}>
            <Box bg="brand.primary" color="brand.background" px={2}>
              <FontAwesomeIcon icon={faM} />
            </Box>
            <Text color="brand.backgroundDark">edKart</Text>
          </HStack>
          <Text fontSize={isMobile ? "larger" : "x-large"}>Sign In</Text>
        </HStack>
        <Text fontSize={isMobile ? "small" : "medium"}>
          Sign in with your email
        </Text>
        <FormControl isInvalid={isError}>
          <Input
            focusBorderColor="brand.primary"
            padding={6}
            border="1px solid"
            borderColor="lightgray"
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
            focusBorderColor="brand.primary"
            padding={6}
            border="1px solid"
            borderColor="lightgray"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          width="100%"
          py={6}
          px={8}
          bg="brand.primary"
          onClick={handleLogin}
          color={"brand.fontLight"}
        >
          Sign In
        </Button>
        <Box width="100%" position="relative">
          {/* <Box width={"100%"} height="4px" border={"1px solid"}></Box> */}
          <Divider colorScheme="brand" />
          <AbsoluteCenter bg="white" px="4">
            or
          </AbsoluteCenter>
        </Box>
        <Button
          width="100%"
          py={6}
          px={8}
          bg="brand.primary"
          color={"brand.fontLight"}
        >
          <GoogleLogo
            width={20}
            height={20}
            fill="white"
            style={{ marginRight: "10px" }}
          />
          Sign in with Google
        </Button>
        <Text fontSize={isMobile ? "small" : "medium"}>
          New user!{" "}
          <Link
            style={{ color: "rgb(0, 206, 209)", fontWeight: "bold" }}
            href={"/sign-up"}
          >
            Sign up
          </Link>{" "}
          now!
        </Text>
      </VStack>
    </motion.div>
  );
};

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <AuthMainLayout>{page}</AuthMainLayout>;
};

export default SignIn;
