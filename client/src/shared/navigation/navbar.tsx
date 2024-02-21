import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faGift,
  faList,
  faMagnifyingGlass,
  faMedkit,
  faPumpMedical,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <VStack width="100%" spacing={0}>
      <Flex
        width={"100%"}
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={"10"}
        borderBottom="1px solid"
        borderBottomColor="brand.primary"
      >
        <HStack spacing={1} fontSize="x-large">
          <Box bg="brand.primary" px={2}>
            M
          </Box>{" "}
          <Text color="brand.backgroundDark">edKart</Text>
        </HStack>
        <InputGroup
          borderRadius="lg"
          border="1px solid"
          borderColor="brand.primary"
          width="50%"
        >
          <InputLeftElement pointerEvents="none">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </InputLeftElement>
          <Input
            focusBorderColor="brand.backgroundDark"
            type="text"
            placeholder="Search what you looking for?"
          />
        </InputGroup>
        <HStack spacing={10} alignItems="center" justifyContent="space-between">
          <FontAwesomeIcon
            icon={faBagShopping}
            size="xl"
            color="rgb(0, 206, 209)"
          />
          <Button py={4} px={8} bg="brand.primary" color={"brand.fontLight"}>
            Login
          </Button>
        </HStack>
      </Flex>
      <Flex
        width="100%"
        alignItems="center"
        justifyContent="space-evenly"
        px={10}
      >
        {[
          { name: "Categories", icon: faList },
          { name: "Brands", icon: faPumpMedical },
          { name: "Brands", icon: faGift },
          { name: "Products", icon: faMedkit },
        ].map((item) => {
          return (
            <HStack key={item.name} p={2}>
              <FontAwesomeIcon icon={item.icon} />
              <Text color="brand.font">{item.name}</Text>
            </HStack>
          );
        })}
      </Flex>
    </VStack>
  );
};

export default Navbar;
