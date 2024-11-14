import useIsMobile from "@/shared/hooks/use-is-mobile";
import {
  Badge,
  Box,
  Divider,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MyOrders = () => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      style={{ width: "100%", zIndex: 9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <VStack
        border="1px solid"
        borderColor={"gray.200"}
        spacing={4}
        borderRadius={"lg"}
        width={"100%"}
        bg="brand.background"
        zIndex={1}
        color={"brand.font"}
      >
        <Box width="100%" px={6} pt={6}>
          <Text
            w="100%"
            color={"brand.font"}
            textAlign="left"
            fontWeight="bold"
          >
            My Orders
          </Text>
        </Box>
        <Divider />
        <VStack width="100%" p={3}>
          {[1, 2, 3, 4].map((el) => {
            return (
              <HStack
                flexDir={isMobile ? "column" : "row"}
                key={el}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                p={3}
                width="100%"
                spacing={2}
                alignItems="center"
                justifyContent={isMobile ? "center" : "space-between"}
              >
                <HStack width="100%" flexDir={isMobile ? "column" : "row"}>
                  <Image
                    boxSize={"70px"}
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                  />
                  <VStack>
                    <HStack flexDir={isMobile ? "column" : "row"}>
                      <Text
                        w="100%"
                        fontSize={!isMobile ? "medium" : "small"}
                        textAlign={isMobile ? "center" : "left"}
                      >
                        Iron capsules
                      </Text>
                      <Badge colorScheme="cyan">Quantity - 4</Badge>
                    </HStack>

                    <Text
                      w="100%"
                      fontSize={!isMobile ? "medium" : "small"}
                      textAlign={isMobile ? "center" : "left"}
                    >
                      Rs. 3
                    </Text>
                  </VStack>
                </HStack>
                <HStack spacing={0}>
                  <Text>Expected delivery till 3/01/23</Text>
                </HStack>
              </HStack>
            );
          })}
        </VStack>
      </VStack>
    </motion.div>
  );
};

export default MyOrders;
