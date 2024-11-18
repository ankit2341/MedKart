import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import { motion } from "framer-motion";
import {
  Badge,
  Flex,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { UserAddress } from "@/types";
import AddNewAddress from "./add-new-address";

const MyAddresses = ({
  addressData,
  addressLoading,
  addressRefetch,
}: {
  addressData: UserAddress[];
  addressLoading: boolean;
  addressRefetch: () => void;
}) => {
  const isViewMobile = useIsMobile();
  const isTableView = useIsTablet();
  const isMobile = isViewMobile || isTableView;
  return (
    <motion.div
      style={{ width: "100%", zIndex: 9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <VStack
        spacing={10}
        width={"100%"}
        p={6}
        bg="brand.background"
        zIndex={1}
        border="1px solid"
        borderColor={"gray.200"}
        borderRadius={"lg"}
      >
        <VStack w={"100%"}>
          <Text w="100%" textAlign="left" fontWeight="bold">
            Saved Addresses
          </Text>
          <SimpleGrid width="100%" columns={isMobile ? 1 : 2} spacing={10}>
            {addressLoading ? (
              <Stack w={"100%"}>
                {Array.from({ length: 3 }, (_, index) => index + 1).map(
                  (el) => {
                    return (
                      <Skeleton key={el} w={"100%"} height={"50px"}></Skeleton>
                    );
                  },
                )}
              </Stack>
            ) : addressData?.length === 0 ? (
              <Text w={"100%"} px={2} border={"1px dashed"} py={2}>
                No Address Saved
              </Text>
            ) : (
              addressData &&
              addressData?.map((address: UserAddress, index: number) => {
                return (
                  <VStack
                    key={index}
                    p={4}
                    border="1px solid"
                    borderColor="lightgray"
                    borderRadius="md"
                    width="100%"
                    alignItems="center"
                    pos="relative"
                    justifyContent="left"
                  >
                    <Text width="100%" textAlign="left" fontSize="medium">
                      {address?.addressline1}
                    </Text>
                    <Text width="100%" textAlign="left" fontSize="small">
                      {address?.city} - {address?.pincode}
                    </Text>
                    <Badge pos="absolute" right={0} top={0} colorScheme="cyan">
                      {address?.type}
                    </Badge>
                  </VStack>
                );
              })
            )}
          </SimpleGrid>
        </VStack>
        <Flex width="100%" alignItems="center" justifyContent="right">
          <AddNewAddress addressRefetch={addressRefetch} />
        </Flex>
      </VStack>
    </motion.div>
  );
};

export default MyAddresses;
