import { useTheme } from "@/context/theme-context";
import { LabTestData } from "@/pages/book-lab-test";
import useGet from "@/shared/api/hooks/use-get";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import {
  Box,
  Center,
  Divider,
  HStack,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const MyLabTests = () => {
  const isMobile = useIsMobile();
  const { data: labtestData, loading: labtestLoading } = useGet("/labtest/");
  const {theme}=useTheme();

  return (
    <motion.div
      style={{ width: "100%", zIndex: 9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <VStack
        border="1px solid"
        borderColor={theme==="dark"?"gray.600": "lightgray"}
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
            My Lab Tests
          </Text>
        </Box>
        <Divider />
        <VStack width="100%" p={3}>
          {labtestLoading ? (
            <Stack w={"100%"}>
              {Array.from({ length: 3 }, (_, index) => index + 1).map((el) => {
                return (
                  <Skeleton key={el} w={"100%"} height={"50px"}></Skeleton>
                );
              })}
            </Stack>
          ) : labtestData?.length === 0 ? (
            <Text pb={2}>No orders! Order now!</Text>
          ) : (
            labtestData &&
            labtestData?.map((el: LabTestData) => {
              return (
                <HStack
                  flexDir={isMobile ? "column" : "row"}
                  key={el._id}
                  border="1px solid"
                  borderColor={theme==="dark"?"gray.600": "lightgray"}
                  borderRadius="md"
                  p={3}
                  width="100%"
                  spacing={2}
                  alignItems="center"
                  justifyContent={isMobile ? "center" : "space-between"}
                >
                  <HStack width="100%" flexDir={isMobile ? "column" : "row"}>
                    <Center
                      w={"70px"}
                      height={"70px"}
                      border={"1px solid"}
                      mr={3}
                      borderRadius={"md"}
                      borderColor={"brand.primary"}
                      color={"brand.primary"}
                    >
                      <FontAwesomeIcon icon={faVirusCovid} />
                    </Center>
                    <VStack>
                      <HStack flexDir={isMobile ? "column" : "row"}>
                        <Text
                          w="100%"
                          fontSize={!isMobile ? "medium" : "small"}
                          textAlign={isMobile ? "center" : "left"}
                        >
                          {el?.name}
                        </Text>
                      </HStack>

                      <Text
                        w="100%"
                        fontSize={!isMobile ? "medium" : "small"}
                        textAlign={isMobile ? "center" : "left"}
                      >
                        Rs. {el?.price}
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack spacing={0}>
                    <Text>Expected test till 3/01/25</Text>
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

export default MyLabTests;
