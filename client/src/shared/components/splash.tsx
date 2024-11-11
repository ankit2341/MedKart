import { Box, Center, HStack, Text } from "@chakra-ui/react";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SplashView() {
  return (
    <Center w={"full"} h={"100vh"}>
      <HStack spacing={1} fontSize="xx-large">
        <Box bg="brand.primary" color="brand.background" px={2}>
          <FontAwesomeIcon icon={faM} bounce />
        </Box>
        <Text color="brand.backgroundDark">edKart</Text>
      </HStack>
    </Center>
  );
}
