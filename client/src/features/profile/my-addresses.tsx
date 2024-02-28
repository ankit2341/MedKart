import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import { motion } from "framer-motion";
import {
  Badge,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const MyAddresses = () => {
  const isViewMobile = useIsMobile();
  const isTableView = useIsTablet();
  const isMobile = isViewMobile || isTableView;
  return (
    <motion.div
      style={{ width: "100%", zIndex: 10 }}
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
        <FormControl>
          <HStack
            spacing={1}
            width="100%"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <FormLabel fontWeight="bold">Primary Address</FormLabel>
          </HStack>
          <VStack
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
              Apartment, B-wing, Flat- 106
            </Text>
            <Text width="100%" textAlign="left" fontSize="small">
              Navi Mumbai - 400709
            </Text>
            <Badge pos="absolute" right={6} top={6} colorScheme="cyan">
              Home
            </Badge>
          </VStack>
        </FormControl>
        <VStack w={"100%"}>
          <Text w="100%" textAlign="left" fontWeight="bold">
            Saved Addresses
          </Text>
          <SimpleGrid width="100%" columns={isMobile ? 1 : 2} spacing={10}>
            {[1, 2, 3, 4, 5].map((address, index) => {
              return (
                <VStack
                  key={index + address}
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
                    Apartment, B-wing, Flat- 106
                  </Text>
                  <Text width="100%" textAlign="left" fontSize="small">
                    Navi Mumbai - 400709
                  </Text>
                  <Badge pos="absolute" right={6} top={6} colorScheme="cyan">
                    Home
                  </Badge>
                </VStack>
              );
            })}
          </SimpleGrid>
        </VStack>
        <Flex width="100%" alignItems="center" justifyContent="right">
          <Button bg="brand.primary" color="brand.background">
            Add New Address
          </Button>
        </Flex>
      </VStack>
    </motion.div>
  );
};

export default MyAddresses;
