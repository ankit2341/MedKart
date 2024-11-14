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
import { AuthMainLayout } from "@/shared/components/auth-layout";
import Link from "next/link";
import { motion } from "framer-motion";
import usePost from "@/shared/api/hooks/use-post";
import { showToast } from "@/shared/shared-toast";
import { GoogleLogin } from "@react-oauth/google";
import { LoginResponseMessages } from "@/types";

const SignIn = () => {
  const isMobile = useIsMobile();
  const istablet = useIsTablet();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isError = email !== "" && !isValidEmail(email);

  const { loading, post } = usePost("/users/login");
  const { post: googleLoginPost } = usePost("/users/googlelogin");

  const handleLoginResponse = (res: { Message: string; token?: string }) => {
    switch (res?.Message) {
      case LoginResponseMessages.SUCCESS:
        showToast("success", res.Message);
        if (res.token) localStorage.setItem("token", res.token);
        router.push("/");
        break;

      case LoginResponseMessages.INVALID_CREDENTIALS:
      case LoginResponseMessages.TOKEN_MISSING:
        showToast("error", res.Message);
        break;

      case LoginResponseMessages.USER_NOT_FOUND:
        showToast("success", res.Message);
        break;

      default:
        showToast("error", LoginResponseMessages.LOGIN_FAILED);
        break;
    }
  };

  const handleLogin = async () => {
    const res = await post({ email, password });
    handleLoginResponse(res);
  };

  const handleLoginWithGoogle = async (token: string) => {
    const res = await googleLoginPost({ googletoken: token });
    handleLoginResponse(res);
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
          isLoading={loading}
          isDisabled={!(!isError && password !== "")}
          bg="brand.primary"
          onClick={handleLogin}
          color={"brand.fontLight"}
        >
          Sign In
        </Button>
        <Box width="100%" position="relative">
          {/* <Box width={"100%"} height="4px" border={"1px solid"}></Box> */}
          <Divider colorScheme="brand" />
          <AbsoluteCenter bg="brand.background" px="4">
            or
          </AbsoluteCenter>
        </Box>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            handleLoginWithGoogle(credentialResponse.credential || "");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        ;
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
