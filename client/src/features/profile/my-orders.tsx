import useGet from "@/shared/api/hooks/use-get";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import {
  Badge,
  Box,
  Divider,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export interface OrderData {
  _id: string;
  userId: string;
  productId: string;
  image: string;
  productName: string;
  variantPrice: number;
  isAvailable: boolean;
  quantity: number;
}

const MyOrders = () => {
  const isMobile = useIsMobile();
  const { data: orders, loading: ordersLoading } = useGet("/order");
  console.log(orders);

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
          {ordersLoading ? (
            <Stack w={"100%"}>
              {Array.from({ length: 3 }, (_, index) => index + 1).map((el) => {
                return (
                  <Skeleton key={el} w={"100%"} height={"50px"}></Skeleton>
                );
              })}
            </Stack>
          ) : orders?.length === 0 ? (
            <Text pb={2}>No orders! Order now!</Text>
          ) : (
            orders &&
            orders?.map((el: OrderData) => {
              return (
                <HStack
                  flexDir={isMobile ? "column" : "row"}
                  key={el._id}
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
                      src={
                        el?.image === ""
                          ? "https://static1.hkrtcdn.com/hknext/static/media/common/lazyicon_new.webp"
                          : el?.image
                      }
                      alt="Dan Abramov"
                    />
                    <VStack>
                      <HStack flexDir={isMobile ? "column" : "row"}>
                        <Text
                          w="100%"
                          fontSize={!isMobile ? "medium" : "small"}
                          textAlign={isMobile ? "center" : "left"}
                        >
                          {el?.productName}
                        </Text>
                        <Badge colorScheme="cyan">
                          Quantity - {el?.quantity}
                        </Badge>
                      </HStack>

                      <Text
                        w="100%"
                        fontSize={!isMobile ? "medium" : "small"}
                        textAlign={isMobile ? "center" : "left"}
                      >
                        Rs. {el?.variantPrice}
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack spacing={0}>
                    <Text>Expected delivery till 3/01/25</Text>
                  </HStack>
                </HStack>
              );
            })
          )}
        </VStack>
      </VStack>
    </motion.div>
  );
};

export default MyOrders;
