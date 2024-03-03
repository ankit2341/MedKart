import useIsMobile from "@/shared/hooks/use-is-mobile";
import { Box, HStack, Text } from "@chakra-ui/react";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <HStack
      width="100%"
      bg="brand.primary"
      align="center"
      justifyContent="space-between"
      px={10}
      overflow="hidden"
      zIndex={10}
      spacing={2}
      flexDir={isMobile ? "column" : "row"}
      py={4}
    >
      <HStack spacing={1} fontSize="large" cursor="pointer">
        <Box bg="brand.background" color="brand.primary" px={2}>
          <FontAwesomeIcon icon={faM} bounce />
        </Box>
        <Text color="brand.backgroundDark">edKart</Text>
      </HStack>
      <HStack spacing={isMobile ? 2 : 10} flexDir={isMobile ? "column" : "row"}>
        <Text fontSize="small" color="brand.background">
          Support
        </Text>
        <Text fontSize="small" color="brand.background">
          Privacy
        </Text>
        <Text fontSize="small" color="brand.background">
          Terms
        </Text>
        <Text fontSize="small" color="brand.background">
          Copyright © 2024
        </Text>
      </HStack>
    </HStack>
  );
};

export default Footer;
