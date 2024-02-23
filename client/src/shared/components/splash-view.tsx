import { Box, HStack, Text } from "@chakra-ui/react";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SplashView = () => {
  return (
    <div>
      <HStack spacing={1} fontSize="x-large">
        <Box bg="brand.primary" color="brand.background" px={2}>
          <FontAwesomeIcon icon={faM} bounce />
        </Box>
        <Text color="brand.backgroundDark">edKart</Text>
      </HStack>
    </div>
  );
};
