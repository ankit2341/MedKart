import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faGift,
  faM,
  // faMedkit,
  faPumpMedical,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import SearchModal from "@/features/search/search-modal";
import { useRouter } from "next/router";
import ThemeToggle from "@/features/toggle-switch";
import { AppStaticPath } from "@/types";
import { useUser } from "@/shared/userdata-context";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const router = useRouter();
  const { userData, refetchUser, reset } = useUser();
  // const isHomePage=router.basePath==="/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <VStack
      pos={showNavbar ? "sticky" : "static"}
      zIndex={10}
      bg="brand.background"
      boxShadow={
        !showNavbar && router.pathname === "/"
          ? "none"
          : "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
      }
      top={0}
      width="100%"
      spacing={0}
    >
      <motion.div
        style={{ width: "100%" }}
        initial={{ translateY: "-10vh" }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <Flex
          width={"100%"}
          alignItems="center"
          justifyContent="space-between"
          py={4}
          px={isMobile ? "4" : "10"}
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
          {!isMobile && !isTablet && (
            <Flex
              width="50%"
              bg="brand.background"
              alignItems="center"
              justifyContent="space-evenly"
              px={10}
            >
              {[
                {
                  name: "Products",
                  icon: faPumpMedical,
                  route: AppStaticPath.Products,
                },
                { name: "Offers", icon: faGift, route: AppStaticPath.Offers },
                // {
                //   name: "Book Lab Test",
                //   icon: faMedkit,
                //   route: AppStaticPath.BookLabTest,
                // },
              ].map((item) => {
                return (
                  <HStack
                    cursor="pointer"
                    border="1px solid"
                    borderRadius={"xl"}
                    borderColor="brand.background"
                    _hover={{
                      border: "1px solid",
                      color: "brand.primary",
                      borderColor: "brand.primary",
                    }}
                    onClick={() => router.push(item.route)}
                    key={item.name}
                    p={2}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <Text color="brand.font">{item.name}</Text>
                  </HStack>
                );
              })}
            </Flex>
          )}
          <HStack
            spacing={isMobile ? 6 : 10}
            alignItems="center"
            justifyContent="right"
          >
            {!isMobile && <ThemeToggle />}
            <SearchModal />
            <Box
              pos="relative"
              cursor="pointer"
              onClick={() => router.push("/profile/23?isPrifilled=Cart")}
            >
              <FontAwesomeIcon
                icon={faBagShopping}
                size="xl"
                color="rgb(0, 206, 209)"
              />
              <Center
                fontSize="xx-small"
                pos="absolute"
                width={6}
                height={5}
                top={-3}
                right={-3}
                p={0.5}
                bg="brand.background"
                borderWidth="1px"
                fontWeight="bold"
                borderColor="brand.primary"
                borderRadius="full"
              >
                10
              </Center>
            </Box>
            {isMobile && !userData?._id && (
              <Center
                cursor="pointer"
                p={4}
                width={10}
                height={10}
                border="1px solid"
                borderRadius="full"
                onClick={() => router.push("/sign-in")}
                borderColor="brand.primary"
              >
                <FontAwesomeIcon icon={faUser} />
              </Center>
            )}
            {!isMobile && !userData?._id && (
              <Button
                onClick={() => router.push("/sign-in")}
                py={4}
                px={8}
                bg="brand.primary"
                color={"brand.fontLight"}
              >
                Sign In
              </Button>
            )}
            {userData?._id && (
              <Menu>
                <MenuButton bg={"brand.background"} p={0} as={Button}>
                  <Center
                    cursor="pointer"
                    p={4}
                    bg={"brand.background"}
                    width={10}
                    height={10}
                    border="1px solid"
                    borderRadius="full"
                    borderColor="brand.primary"
                  >
                    <Avatar
                      src={userData?.avatar}
                      name={userData?.username}
                      size={"sm"}
                      bg={"brand.primary"}
                    />
                  </Center>
                </MenuButton>

                <MenuList>
                  <HStack px={3} py={4}>
                    <Avatar
                      src={userData?.avatar}
                      name={userData?.username}
                      size={"sm"}
                      bg={"brand.primary"}
                    />
                    <Text>Welcome {userData?.username},</Text>
                  </HStack>

                  <Divider />
                  <MenuItem
                    onClick={() => router.push(`/profile/${userData?._id}`)}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={async () => {
                      localStorage.clear();
                      await reset();
                      await refetchUser();
                      console.log("inside");
                      router.replace("/sign-in");
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </HStack>
        </Flex>
      </motion.div>
      {(isMobile || isTablet) && showNavbar && (
        <Flex
          width="100%"
          bg="brand.background"
          alignItems="center"
          justifyContent="space-evenly"
          px={isMobile ? 1 : 10}
        >
          {!isTablet && <ThemeToggle />}
          {[
            { name: "Products", icon: faPumpMedical },
            { name: "Offers", icon: faGift },
            // { name: "Book Lab Test", icon: faMedkit },
          ].map((item) => {
            return (
              <HStack
                cursor="pointer"
                border="1px solid"
                borderRadius={"xl"}
                borderColor="brand.background"
                _hover={{
                  border: "1px solid",
                  color: "brand.primary",
                  borderColor: "brand.primary",
                }}
                key={item.name}
                p={2}
              >
                {!isMobile && <FontAwesomeIcon icon={item.icon} />}
                <Text color="brand.font">{item.name}</Text>
              </HStack>
            );
          })}
        </Flex>
      )}
    </VStack>
  );
};

export default Navbar;
