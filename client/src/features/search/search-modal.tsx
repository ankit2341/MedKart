import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  FormControl,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  faCartPlus,
  faHeart,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export default function SearchModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Center
        onClick={onOpen}
        cursor="pointer"
        p={4}
        display={isOpen ? "none" : "flex"}
        width={10}
        height={10}
        border="1px solid"
        borderRadius="full"
        borderColor="brand.primary"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Center>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        size="6xl"
        onClose={onClose}
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent mt={"10vh"}>
          <ModalHeader py={12} bg={"brand.background"}>
            <FormControl>
              <InputGroup>
                <InputLeftElement>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </InputLeftElement>
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  focusBorderColor="brand.primary"
                  ref={initialRef}
                  placeholder="Search what are you looking for..."
                />
              </InputGroup>
            </FormControl>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            bg="brand.background"
            width="100%"
            height="50vh"
            pt={0}
            pb={6}
          >
            {search === "" ? (
              <Center width="100%" height="70vh">
                <Text>No Data</Text>
              </Center>
            ) : (
              <SimpleGrid columns={[1, 2, 2, 4]} spacing={4}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
                  return (
                    <Card
                      key={el}
                      width="100%"
                      height={"50vh"}
                      borderWidth="1px"
                      borderStyle="solid"
                      borderColor="lightgray"
                      borderRadius={"lg"}
                      background="linear-gradient(207deg, rgba(0,206,209,1) 0%, rgba(19,210,212,1) 30%, rgba(255,255,255,1) 30%)"
                    >
                      <CardHeader
                        pt={8}
                        pb={2}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Image
                          boxSize="150px"
                          borderRadius={"lg"}
                          objectFit="cover"
                          src="https://d1s24u4ln0wd0i.cloudfront.net/1688202688649fedc050fd2.png"
                          alt="Dan Abramov"
                        />
                        <Flex
                          pos="absolute"
                          top={2}
                          right={2}
                          borderRadius="md"
                          align="center"
                          justify="center"
                          bg="brand.backgroundDark"
                          color="brand.background"
                          px={2}
                        >
                          <Text pr={1} fontSize="medium">
                            4.1
                          </Text>

                          <FontAwesomeIcon icon={faStar} size="xs" />
                        </Flex>
                      </CardHeader>
                      <CardBody pt={2}>
                        <VStack>
                          <Text
                            fontSize="larger"
                            fontWeight="500"
                            noOfLines={3}
                          >
                            Riddhish Iron Capsule
                          </Text>
                          <HStack>
                            <Text>₹. 100</Text>
                            <Text textDecoration="line-through">₹. 150</Text>
                            <Flex
                              borderRadius="md"
                              align="center"
                              justify="center"
                              bg="brand.backgroundDark"
                              color="brand.background"
                              px={2}
                            >
                              <Text pr={1} fontSize="small">
                                50% off
                              </Text>
                            </Flex>
                          </HStack>
                        </VStack>
                      </CardBody>
                      <CardFooter>
                        <Center
                          width="10"
                          height={10}
                          borderRadius="lg"
                          border="1px solid"
                          color="brand.primary"
                          borderColor="brand.primary"
                        >
                          <FontAwesomeIcon beat icon={faHeart} />
                        </Center>
                        <Button
                          ml={2}
                          bg="brand.primary"
                          color="brand.background"
                          borderRadius="lg"
                          width="80%"
                          height={10}
                        >
                          Add to Cart
                          <FontAwesomeIcon
                            style={{ paddingLeft: "10px" }}
                            icon={faCartPlus}
                          />
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </SimpleGrid>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
