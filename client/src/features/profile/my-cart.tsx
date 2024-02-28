import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const MyCart = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <>
      <motion.div
        style={{ width: isMobile || isTablet ? "100%" : "30%", zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Card
          border="1px solid"
          borderColor={"gray.200"}
          width={"100%"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow={"none"}
        >
          <CardHeader width="100%">
            <FormControl>
              <FormLabel fontWeight="bold">Enter Promo Code</FormLabel>
              <Input
                placeholder="Enter promo code"
                focusBorderColor="brand.primary"
                type="text"
              />
              <Button
                mt={2}
                width="100%"
                bg="brand.primary"
                color="brand.background"
              >
                Apply code
              </Button>
            </FormControl>
            <Divider />
          </CardHeader>
          <CardBody width="100%">
            <FormControl>
              <FormLabel fontWeight="bold">Cart Summary</FormLabel>
              <VStack width="100%">
                <Divider />
                <HStack
                  w="100%"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text>Subtotal</Text>
                  <Text>$. 20.33</Text>
                </HStack>
                <HStack
                  w="100%"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text>Discount</Text>
                  <Text>$. 10.33</Text>
                </HStack>
                <HStack
                  w="100%"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text>Estimated total</Text>
                  <Text>$. 20.33</Text>
                </HStack>
                <Divider />
              </VStack>
            </FormControl>
          </CardBody>
          <CardFooter width="100%">
            <Button width="100%" bg="brand.primary" color="brand.background">
              Checkout
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      <motion.div
        style={{ width: isMobile || isTablet ? "100%" : "70%", zIndex: 10 }}
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
        >
          <Box width="100%" px={6} pt={6}>
            <Text w="100%" textAlign="left" fontWeight="bold">
              My Cart
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
                      <Text
                        w="100%"
                        fontSize={!isMobile ? "medium" : "small"}
                        textAlign={isMobile ? "center" : "left"}
                      >
                        Iron capsules
                      </Text>
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
                    <Button
                      size="sm"
                      bg="brand.primary"
                      color="brand.background"
                    >
                      -
                    </Button>
                    <Button
                      size="sm"
                      bg="brand.background"
                      _hover={{ bg: "brand.background" }}
                    >
                      1
                    </Button>
                    <Button
                      size="sm"
                      bg="brand.primary"
                      color="brand.background"
                    >
                      +
                    </Button>
                  </HStack>
                  <Button size="sm" bg="brand.background" color="brand.primary">
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </HStack>
              );
            })}
          </VStack>
        </VStack>
      </motion.div>
    </>
  );
};

export default MyCart;
