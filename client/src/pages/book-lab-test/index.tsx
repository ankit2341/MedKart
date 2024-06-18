import { AppMainLayout } from "@/shared/components/app-layout";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  HStack,
  Heading,
  Image,
  ListItem,
  StackDivider,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import {
  faCartPlus,
  faDesktop,
  faPhoneVolume,
  faShieldVirus,
  faTags,
  faUserDoctor,
  faVirusCovid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BookLabTest = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <VStack w={"100%"} spacing={10} pb={10}>
      <VStack w={"100%"} p={10}>
        <HStack
          w={"100%"}
          spacing={10}
          flexDir={isMobile || isTablet ? "column" : "row"}
        >
          <Box w={"100%"}>
            <Image
              boxSize={"fit-content"}
              src="https://i.postimg.cc/jdkTTNj7/1645171127.jpg"
              alt={`book test`}
            />
          </Box>

          <VStack
            spacing={4}
            w={"100%"}
            h={"100%"}
            alignItems={"flex-start"}
            justifyContent={!isMobile ? "space-between" : "center"}
          >
            <VStack spacing={isMobile || isTablet ? 4 : 1}>
              <Heading
                textAlign={isMobile ? "center" : undefined}
                w={"100%"}
                fontSize={"x-large"}
              >
                Lab Test From The Comfort Of Your Home
              </Heading>
              <Text textAlign={isMobile ? "center" : undefined} w={"100%"}>
                Trusted by satisfied customers | lab tests booked
              </Text>
            </VStack>
            <HStack
              flexWrap={isMobile ? "wrap" : undefined}
              w={"100%"}
              h={"fit-content"}
              alignItems={"center"}
              justifyContent={isMobile ? "center" : "space-between"}
              color="brand.font"
              spacing={10}
              divider={
                !isMobile ? <StackDivider borderColor="gray.300" /> : undefined
              }
            >
              <VStack color="white">
                <Center boxSize={8} bg="brand.primary" borderRadius="full">
                  <FontAwesomeIcon icon={faShieldVirus} />
                </Center>
                <VStack spacing={0}>
                  <Text color="brand.font" fontSize="small" textAlign="center">
                    Free Doctor
                  </Text>
                  <Text color="brand.font" fontSize="small" textAlign="center">
                    Consultation
                  </Text>
                </VStack>
              </VStack>
              <VStack color="white">
                <Center boxSize={8} bg="brand.primary" borderRadius="full">
                  <FontAwesomeIcon icon={faDesktop} />
                </Center>
                <VStack spacing={0}>
                  <Text color="brand.font" fontSize="small" textAlign="center">
                    View Reports
                  </Text>
                  <Text color="brand.font" fontSize="small" textAlign="center">
                    Online
                  </Text>
                </VStack>
              </VStack>

              <VStack color="white">
                <Center boxSize={8} bg="brand.primary" borderRadius="full">
                  <FontAwesomeIcon icon={faUserDoctor} />
                </Center>
                <VStack spacing={0}>
                  <Text color="brand.font" fontSize="small" textAlign="center">
                    100% Safe &
                  </Text>
                  <Text color="brand.font" fontSize="small" textAlign="center">
                    Hygienic
                  </Text>
                </VStack>
              </VStack>

              <VStack color="white">
                <Center boxSize={8} bg="brand.primary" borderRadius="full">
                  <FontAwesomeIcon icon={faTags} />
                </Center>
                <VStack spacing={0}>
                  <Text color="brand.font" fontSize="small" textAlign="center">
                    Best Prices
                  </Text>
                  <Text color="brand.font" fontSize="small" textAlign="center">
                    Guaranteed
                  </Text>
                </VStack>
              </VStack>
            </HStack>

            <Button
              w={!isMobile ? undefined : "100%"}
              variant={"solid"}
              bg={"brand.primary"}
              color={"white"}
            >
              View Popular Packages
            </Button>
          </VStack>
        </HStack>
      </VStack>
      <Box px={isMobile ? "4" : "8"} width="100%" bg="brand.background">
        <Carousel
          responsive={responsive}
          autoPlay
          itemClass="carousel-item-padding"
          swipeable={isMobile || isTablet ? true : false}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
            return (
              <Card key={el} boxShadow={"lg"} w={"100%"} h={"fit-content"}>
                <CardHeader>
                  <VStack w={"100%"} align={"center"} justify={"center"}>
                    <Center
                      boxSize={"10"}
                      color={"brand.primary"}
                      border={"1px solid"}
                      borderRadius={"full"}
                    >
                      <FontAwesomeIcon icon={faVirusCovid} />
                    </Center>
                    <Heading
                      w={"100%"}
                      textAlign={"center"}
                      fontSize={"medium"}
                    >
                      Covid 19 Test
                    </Heading>
                    <HStack fontSize={"small"}>
                      <Text>MRP. ₹. 100</Text>
                      <Text textDecoration="line-through">₹. 150</Text>
                    </HStack>
                  </VStack>
                </CardHeader>
                <CardBody>
                  <VStack spacing={0}>
                    <UnorderedList fontSize={"small"}>
                      <ListItem>Sample Collection</ListItem>
                      <ListItem>Extraction</ListItem>
                      <ListItem>PCR</ListItem>
                    </UnorderedList>
                  </VStack>
                </CardBody>
                <CardFooter>
                  <Button
                    ml={2}
                    bg="brand.primary"
                    color="white"
                    borderRadius="lg"
                    width="100%"
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
        </Carousel>
      </Box>
      <VStack
        spacing={4}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading w={"100%"} textAlign={"center"} fontSize={"large"}>
          Want to book lab tests in bulk?
        </Heading>
        <Text textAlign={"center"} w={"100%"} fontSize={"small"}>
          Get customized health packages at best prices
        </Text>
        <Button
          ml={2}
          bg="brand.primary"
          color="white"
          borderRadius="lg"
          height={10}
          size={"sm"}
        >
          Contact Us
          <FontAwesomeIcon
            shake
            style={{ paddingLeft: "10px" }}
            icon={faPhoneVolume}
          />
        </Button>
      </VStack>
    </VStack>
  );
};

BookLabTest.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default BookLabTest;
