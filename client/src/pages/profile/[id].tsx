import MyAddresses from "@/features/profile/my-addresses";
import MyCart from "@/features/profile/my-cart";
import MyProfile from "@/features/profile/my-profile";
import { AppMainLayout } from "@/shared/components/app-layout";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
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
import { ReactElement, useState } from "react";

const Profile = () => {
  const isViewMobile = useIsMobile();
  const isTableView = useIsTablet();
  const isMobile = isViewMobile || isTableView;
  const [selectedState, setSelectedState] = useState<string>("Profile");

  const handleSelectedState = (el: string) => {
    if (el !== "Logout") {
      setSelectedState(el);
    }
  };

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
                fontSize="medium"
              >
                Ankit Patil
              </Text>
              <Text width="100%" textAlign="left" fontSize="smaller">
                ankit@gmail.com
              </Text>
            </VStack>
          </HStack>
          {["Profile", "Addresses", "Cart", "Orders", "Logout"].map(
            (el: string) => {
              return (
                <>
                  <Divider />
                  <Button
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
        {selectedState === "Profile" && <MyProfile />}
        {selectedState === "Addresses" && <MyAddresses />}
        {selectedState === "Cart" && <MyCart />}
      </HStack>
    </HStack>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default Profile;
