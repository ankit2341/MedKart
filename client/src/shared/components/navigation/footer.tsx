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
      px={isMobile ? 2 : 10}
      overflow="hidden"
      zIndex={10}
      pos="absolute"
      bottom={0}
      spacing={2}
      py={2}
    >
      <HStack
        spacing={1}
        fontSize={isMobile ? "small" : "large"}
        cursor="pointer"
      >
        <Box bg="brand.background" color="brand.primary" px={2}>
          <FontAwesomeIcon icon={faM} bounce />
        </Box>
        <Text color="brand.backgroundDark">edKart</Text>
      </HStack>
      <HStack spacing={isMobile ? 2 : 10}>
        <Text fontSize={isMobile ? "x-small" : "small"} color="white">
          Support
        </Text>
        <Text fontSize={isMobile ? "x-small" : "small"} color="white">
          Privacy
        </Text>
        <Text fontSize={isMobile ? "x-small" : "small"} color="white">
          Terms
        </Text>
        <Text fontSize={isMobile ? "x-small" : "small"} color="white">
          Copyright © 2024
        </Text>
      </HStack>
    </HStack>
  );
};

export default Footer;
