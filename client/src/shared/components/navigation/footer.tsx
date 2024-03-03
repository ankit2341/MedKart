import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Flex
      width="100%"
      height="10vh"
      bg="brand.primary"
      align="center"
      justifyContent="space-between"
      px={10}
    >
      <HStack spacing={1} fontSize="large" cursor="pointer">
        <Box bg="brand.background" color="brand.primary" px={2}>
          <FontAwesomeIcon icon={faM} bounce />
        </Box>
        <Text color="brand.backgroundDark">edKart</Text>
      </HStack>
      <HStack spacing={10}>
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
    </Flex>
  );
};

export default Footer;
