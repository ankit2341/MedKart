import { createStandaloneToast } from "@chakra-ui/react";

const toast = createStandaloneToast().toast;

export const showToast = (
  status: "info" | "warning" | "success" | "error",
  message: string,
) => {
  toast({
    title: message,
    status,
    duration: 2000,
    variant: "subtle",
    isClosable: true,
    position: "bottom",
  });
};
