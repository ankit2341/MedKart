import { AppMainLayout } from "@/shared/components/app-layout";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import {
  Box,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  faChevronRight,
  faPencil,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

const Profile = () => {
  const isViewMobile = useIsMobile();
  const isTableView = useIsTablet();
  const isMobile = isViewMobile || isTableView;

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
          borderColor="brand.primary"
          borderRadius="lg"
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
                    _hover={{
                      color: "brand.font",
                      background: "brand.primary",
                      borderRadius: "lg",
                    }}
                    display="flex"
                    borderRadius={"lg"}
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
        <Card
          width={isMobile ? "100%" : "30%"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CardHeader>
            <Center
              width={28}
              height={28}
              borderRadius="full"
              bg={"brand.primary"}
              color="brand.background"
            >
              <FontAwesomeIcon size="4x" icon={faUser} />
            </Center>
            <VStack spacing={0} pt={2}>
              <Text
                fontWeight="bold"
                textAlign="center"
                width="100%"
                fontSize="medium"
              >
                Ankit Patil
              </Text>
              <Text width="100%" textAlign="center" fontSize="smaller">
                ankit@gmail.com
              </Text>
            </VStack>
          </CardHeader>
          <CardFooter width="100%">
            <VStack
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>22</Text>
              <Text
                fontWeight="bold"
                textAlign="center"
                width="100%"
                fontSize="medium"
              >
                My Orders
              </Text>
            </VStack>
            <VStack
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>32</Text>
              <Text
                fontWeight="bold"
                textAlign="center"
                width="100%"
                fontSize="medium"
              >
                My Cart
              </Text>
            </VStack>
          </CardFooter>
        </Card>
        <VStack
          boxShadow="lg"
          spacing={4}
          borderRadius={"lg"}
          width={isMobile ? "100%" : "70%"}
          bg="brand.background"
          zIndex={1}
        >
          <Box width="100%" px={6} pt={6}>
            <Text w="100%" textAlign="left" fontWeight="bold">
              Edit Profile
            </Text>
          </Box>
          <Divider />
          <VStack px={6} pb={4} spacing={10} width="100%">
            <HStack width="100%" spacing={4}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  border="1px solid"
                  borderColor="lightgray"
                  placeholder="Enter first name"
                  focusBorderColor="brand.primary"
                  padding={6}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input
                  border="1px solid"
                  borderColor="lightgray"
                  placeholder="Enter last name"
                  focusBorderColor="brand.primary"
                  padding={6}
                  type="text"
                />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                focusBorderColor="brand.primary"
                padding={6}
                border="1px solid"
                borderColor="lightgray"
                type="email"
                placeholder="Enter your phone number"
              />
            </FormControl>

            <FormControl>
              <HStack
                spacing={1}
                width="100%"
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <FormLabel>Primary Address</FormLabel>
                <Center
                  cursor="pointer"
                  width={6}
                  height={6}
                  borderRadius={"lg"}
                  bg="lightgray"
                >
                  <FontAwesomeIcon size="xs" color="white" icon={faPencil} />
                </Center>
              </HStack>
              <VStack
                p={4}
                border="1px solid"
                borderColor="lightgray"
                borderRadius="md"
                width="100%"
                alignItems="center"
                justifyContent="left"
              >
                <Text width="100%" textAlign="left" fontSize="medium">
                  Apartment, B-wing, Flat- 106
                </Text>
                <Text width="100%" textAlign="left" fontSize="small">
                  Navi Mumbai - 400709
                </Text>
              </VStack>
            </FormControl>
            <Flex width="100%" alignItems="center" justifyContent="right">
              <Button bg="brand.primary" color="brand.background">
                Update Profile
              </Button>
            </Flex>
          </VStack>
        </VStack>
      </HStack>
    </HStack>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default Profile;
