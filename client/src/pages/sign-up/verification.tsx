import { AuthMainLayout } from "@/shared/components/auth-layout";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import {
  Box,
  Button,
  FormControl,
  HStack,
  PinInput,
  PinInputField,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

const Verification = () => {
  const isMobile = useIsMobile();
  const istablet = useIsTablet();
  const { theme } = useTheme();

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
        spacing={8}
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
          Please enter OTP sent to your email
        </Text>
        <FormControl>
          <HStack width="100%" align="center" justify="center">
            <PinInput size="xl" otp focusBorderColor="brand.primary">
              <PinInputField
                py={4}
                borderRadius={"lg"}
                borderColor={theme === "dark" ? "gray.600" : "lightgray"}
              />
              <PinInputField
                py={4}
                borderRadius={"lg"}
                borderColor={theme === "dark" ? "gray.600" : "lightgray"}
              />
              <PinInputField
                py={4}
                borderRadius={"lg"}
                borderColor={theme === "dark" ? "gray.600" : "lightgray"}
              />
              <PinInputField
                py={4}
                borderRadius={"lg"}
                borderColor={theme === "dark" ? "gray.600" : "lightgray"}
              />
              <PinInputField
                py={4}
                borderRadius={"lg"}
                borderColor={theme === "dark" ? "gray.600" : "lightgray"}
              />
              <PinInputField
                py={4}
                borderRadius={"lg"}
                borderColor={theme === "dark" ? "gray.600" : "lightgray"}
              />
            </PinInput>
          </HStack>
        </FormControl>
        <Button
          width="100%"
          py={6}
          px={8}
          bg="brand.primary"
          color={"brand.fontLight"}
        >
          Verify OTP
        </Button>
      </VStack>
    </motion.div>
  );
};

Verification.getLayout = function getLayout(page: ReactElement) {
  return <AuthMainLayout>{page}</AuthMainLayout>;
};

export default Verification;
