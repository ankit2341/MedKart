import LabTestsData from "@/features/admin/lab-tests";
import OrderData from "@/features/admin/orders";
import ProductData from "@/features/admin/products";
import UsersData from "@/features/admin/users";
import { SectionPageContainer } from "@/shared/components/side-container";
import { showToast } from "@/shared/shared-toast";
import { useUser } from "@/shared/userdata-context";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Splash from "./splash";

const Admin = () => {
  const router = useRouter();
  const [selectedData, setSelectedData] = useState("users");
  const { userData } = useUser();

  if (typeof window === undefined) {
    return null;
  }

  useEffect(() => {
    if (userData !== null && userData?.role !== "PLATFORM_ADMIN") {
      router.push("/");
      showToast("error", "Not Authorized");
    }
  }, [userData, router]);

  if (userData?.role !== "PLATFORM_ADMIN") {
    return <Splash />;
  }

  return (
    <VStack spacing={0}>
      <Flex
        w={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={4}
        py={6}
        borderBottom={"1px solid"}
        borderColor={"gray.300"}
      >
        <HStack
          spacing={1}
          fontSize="x-large"
          onClick={() => router.push("/")}
          cursor="pointer"
        >
          <Box bg="brand.primary" color="brand.background" px={2}>
            <FontAwesomeIcon icon={faM} bounce />
          </Box>
          <Text color="brand.backgroundDark">edKart</Text>
        </HStack>
      </Flex>

      <SectionPageContainer
        sideContent={
          <VStack
            w={"100%"}
            h={"fit-content"}
            zIndex={9}
            p={4}
            borderRadius={"md"}
            border={"1px solid"}
            borderColor={"gray.300"}
            spacing={2}
          >
            <Text fontWeight={"bold"}>Admin Portal</Text>
            <Button
              onClick={() => setSelectedData("users")}
              w={"100%"}
              bg={selectedData === "users" ? "brand.primary" : "white"}
              color={selectedData === "users" ? "white" : "brand.font"}
            >
              Users
            </Button>
            <Button
              onClick={() => setSelectedData("product")}
              w={"100%"}
              bg={selectedData === "product" ? "brand.primary" : "white"}
              color={selectedData === "product" ? "white" : "brand.font"}
            >
              Product
            </Button>
            <Button
              onClick={() => setSelectedData("labtest")}
              w={"100%"}
              bg={selectedData === "labtest" ? "brand.primary" : "white"}
              color={selectedData === "labtest" ? "white" : "brand.font"}
            >
              Lab test
            </Button>
            <Button
              onClick={() => setSelectedData("orders")}
              w={"100%"}
              bg={selectedData === "orders" ? "brand.primary" : "white"}
              color={selectedData === "orders" ? "white" : "brand.font"}
            >
              Orders
            </Button>
          </VStack>
        }
        mainContent={
          <VStack w={"100%"}>
            {selectedData === "users" && <UsersData />}
            {selectedData === "product" && <ProductData />}
            {selectedData === "labtest" && <LabTestsData />}
            {selectedData === "orders" && <OrderData />}
          </VStack>
        }
      />
    </VStack>
  );
};

export default Admin;
