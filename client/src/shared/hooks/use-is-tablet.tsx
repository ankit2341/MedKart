import { useBreakpointValue } from "@chakra-ui/react";

const useIsTablet = (): boolean => {
  const isTablet = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
    xl: false,
  });
  return isTablet ?? false;
};

export default useIsTablet;
