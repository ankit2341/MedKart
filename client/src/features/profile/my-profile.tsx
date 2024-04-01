import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import {
  Badge,
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
import { faPencil, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MyProfile = () => {
  const isViewMobile = useIsMobile();
  const isTableView = useIsTablet();
  const isMobile = isViewMobile || isTableView;
  const router = useRouter();

  return (
    <>
      <motion.div
        style={{ width: isMobile ? "100%" : "30%", zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Card
          border="1px solid"
          borderColor={"gray.200"}
          bg="brand.background"
          color="brand.font"
          width={"100%"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow={"none"}
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
      </motion.div>
      <motion.div
        style={{ width: isMobile ? "100%" : "70%", zIndex: 10 }}
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
              Edit Profile
            </Text>
          </Box>
          <Divider />
          <VStack px={6} pb={4} spacing={4} width="100%">
            <HStack
              flexDir={isMobile ? "column" : "row"}
              width="100%"
              spacing={4}
            >
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
              <FormLabel>
                Primary Address
                <Badge
                  cursor="pointer"
                  onClick={() =>
                    router.push("/profile/23?isPrifilled=Addresses")
                  }
                  mx={2}
                  colorScheme="cyan"
                >
                  Edit <FontAwesomeIcon icon={faPencil} size="2xs" />
                </Badge>
              </FormLabel>

              <VStack
                p={4}
                border="1px solid"
                borderColor="lightgray"
                borderRadius="md"
                width="100%"
                pos="relative"
                alignItems="center"
                justifyContent="left"
              >
                <Text width="100%" textAlign="left" fontSize="medium">
                  Apartment, B-wing, Flat- 106
                </Text>
                <Text width="100%" textAlign="left" fontSize="small">
                  Navi Mumbai - 400709
                </Text>
                <Badge pos="absolute" right={0} top={0} colorScheme="cyan">
                  Home
                </Badge>
              </VStack>
            </FormControl>
            <Flex width="100%" alignItems="center" justifyContent="right">
              <Button bg="brand.primary" color="brand.background">
                Update Profile
              </Button>
            </Flex>
          </VStack>
        </VStack>
      </motion.div>
    </>
  );
};

export default MyProfile;
