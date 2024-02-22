import { useBreakpointValue } from "@chakra-ui/react";

const useIsMobile = (): boolean => {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
  });
  return isMobile ?? false;
};

export default useIsMobile;
