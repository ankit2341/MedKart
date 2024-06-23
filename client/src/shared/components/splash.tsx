import { Box, HStack, Text } from "@chakra-ui/react";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SplashView() {
  return (
    <div style={{width:"100vw",height:"100vh"}}>
      <HStack spacing={1} fontSize="x-large">
        <Box bg="brand.primary" color="brand.background" px={2}>
          <FontAwesomeIcon icon={faM} bounce />
        </Box>
        <Text color="brand.backgroundDark">edKart</Text>
      </HStack>
    </div>
  );
}
