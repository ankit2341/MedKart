import LogoutModal from "@/features/profile/logut";
import MyAddresses from "@/features/profile/my-addresses";
import MyCart from "@/features/profile/my-cart";
import MyOrders from "@/features/profile/my-orders";
import MyProfile from "@/features/profile/my-profile";
import useGet from "@/shared/api/hooks/use-get";
// import useGet from "@/shared/api/hooks/use-get";
import { AppMainLayout } from "@/shared/components/app-layout";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import { useUser } from "@/shared/userdata-context";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";

const Profile = () => {
  const isViewMobile = useIsMobile();
  const isTableView = useIsTablet();
  const isMobile = isViewMobile || isTableView;
  const router = useRouter();
  const { isPrifilled } = router.query;
  const [selectedState, setSelectedState] = useState<string>("");
  const { userData } = useUser();
  const { data: cartData, loading: cartLoading } = useGet("/cart/");
  console.log(cartData, cartLoading);
  const { data: addressData, loading: addressLoading } = useGet("/address/");
  console.log(addressData, addressLoading, "sdfgb");

  const handleSelectedState = (el: string) => {
    if (el !== "Logout") {
      setSelectedState(el);
    }
  };

  useEffect(() => {
    setSelectedState(isPrifilled ? (isPrifilled as string) : "Profile");
  }, [isPrifilled]);

  return (
    <HStack
      spacing={10}
      width={"100%"}
      flexDir={isMobile ? "column" : "row"}
      align="flex-start"
      px={10}
      py={4}
    >
      <Box
        width={"100%"}
        bg="brand.primary"
        pos="absolute"
        top={0}
        right={0}
        height={"30vh"}
      ></Box>
      <Box width={isMobile ? "100%" : "20%"} zIndex={1}>
        <VStack
          color={"brand.font"}
          spacing={0}
          bg="brand.background"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
        >
          <HStack
            p={6}
            width="100%"
            alignItems="flex-start"
            justifyContent="left"
          >
            <Center
              width={10}
              height={10}
              borderRadius="lg"
              bg={"brand.primary"}
              color="brand.background"
            >
              <FontAwesomeIcon icon={faUser} />
            </Center>

            <VStack spacing={0}>
              <Text
                fontWeight="bold"
                textAlign="left"
                width="100%"
                noOfLines={1}
                fontSize="medium"
              >
                {userData?.username}
              </Text>
              <Text
                width="100%"
                noOfLines={1}
                textAlign="left"
                fontSize="smaller"
              >
                {userData?.email}
              </Text>
            </VStack>
          </HStack>
          {["Profile", "Addresses", "Cart", "Orders", "Logout"].map(
            (el: string) => {
              return (
                <>
                  <Divider />
                  {el === "Logout" ? (
                    <LogoutModal />
                  ) : (
                    <Button
                      color={"brand.font"}
                      onClick={() => {
                        handleSelectedState(el);
                      }}
                      _hover={{
                        color: "brand.font",
                        background: "brand.primary",
                        borderRadius: "md",
                      }}
                      display="flex"
                      borderRadius={"md"}
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                      p={6}
                      bg="brand.background"
                      rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
                    >
                      {el !== "Logout" && "My"} {el}
                    </Button>
                  )}
                </>
              );
            },
          )}
        </VStack>
      </Box>
      {!isMobile && <Divider orientation="vertical" minH={"xl"} zIndex={1} />}
      <HStack
        width={isMobile ? "100%" : "80%"}
        spacing={10}
        alignItems="flex-start"
        flexDir={isMobile ? "column" : "row"}
      >
        {selectedState === "Profile" && (
          <MyProfile
            orderSize={0}
            addressData={addressData}
            cartSize={cartData?.length || 0}
            userData={userData}
          />
        )}
        {selectedState === "Addresses" && (
          <MyAddresses
            addressData={addressData}
            addressLoading={addressLoading}
          />
        )}
        {selectedState === "Cart" && (
          <MyCart cartData={cartData} cartLoading={cartLoading} />
        )}
        {selectedState === "Orders" && <MyOrders />}
      </HStack>
    </HStack>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default Profile;
