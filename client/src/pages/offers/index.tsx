import { AppMainLayout } from "@/shared/components/app-layout";
import {
  Box,
  Button,
  HStack,
  Heading,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faClipboard, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

const Offers = () => {
  return (
    <VStack w={"100%"} spacing={10} px={10} pt={4} pb={10}>
      <VStack spacing={4}>
        <HStack
          w={"100%"}
          alignItems={"center"}
          bg={"gray.100"}
          color={"brand.primary"}
          py={2}
          justifyContent={"center"}
        >
          <FontAwesomeIcon size="lg" icon={faTicket} color={"brand.primary"} />
          <Heading fontSize={"larger"} color={"black"}>
            Offers
          </Heading>
        </HStack>
        <Text textAlign={"center"} fontSize={"sm"}>
          Congratulations! You&apos;ve unlocked a special bundle of online
          coupon codes. Use these codes during checkout on our website to enjoy
          various discounts on your purchases. Keep these codes safe and be sure
          to use them before their expiration dates. Happy shopping!
        </Text>
      </VStack>
      <SimpleGrid w={"100%"} columns={[1, 2, 3, 4]} gap={"20px"}>
        {[1, 2, 3, 4, 5, 6].map((el) => {
          return (
            <Box
              key={el}
              width="100%"
              borderRadius="lg"
              bg="gray.100"
              position="relative"
              p={4}
              overflow="hidden"
              textAlign="center"
            >
              <Box
                position="absolute"
                top="50%"
                left="-20px"
                transform="translateY(-50%)"
                width="40px"
                height="40px"
                bg="brand.background"
                borderRadius="50%"
              />

              {/* Right half-circle */}
              <Box
                position="absolute"
                top="50%"
                right="-20px"
                transform="translateY(-50%)"
                width="40px"
                height="40px"
                bg="brand.background"
                borderRadius="50%"
              />

              <VStack spacing={2} color={"black"} py={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Event Name
                </Text>
                <Tag size={"sm"} variant="subtle" colorScheme="teal">
                  <TagLabel>Save 20% Now</TagLabel>
                </Tag>
                <Text fontSize="sm" color={"gray.500"}>
                  Valid until 2024-06-25
                </Text>

                <Button
                  border={"2px dashed"}
                  borderColor={"brand.primary"}
                  bg={"white"}
                  color={"brand.primary"}
                  leftIcon={<FontAwesomeIcon icon={faClipboard} />}
                >
                  Copy
                </Button>
              </VStack>
            </Box>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};

Offers.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default Offers;
