import useGet from "@/shared/api/hooks/use-get";
import usePost from "@/shared/api/hooks/use-post";
import { AppMainLayout } from "@/shared/components/app-layout";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import { showToast } from "@/shared/shared-toast";
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
  faDesktop,
  faPhoneVolume,
  faShieldVirus,
  faTags,
  faUserDoctor,
  faVirusCovid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export interface LabTestData {
  _id: string;
  name: string;
  icon: string;
  price: number;
  originalPrice: number;
  features: string[];
}

const BookLabTest = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const { data: labtests } = useGet("/labtest/getall");
  const { post, loading } = usePost("/labtest/post");
  const [loadingId, setLoadingId] = useState<string | null>(null);

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
          </VStack>
        </HStack>
      </VStack>
      <Box px={isMobile ? "4" : "8"} width="100%" bg="brand.background">
        {labtests && labtests?.length && (
          <Carousel
            responsive={responsive}
            autoPlay={!isMobile}
            autoPlaySpeed={isMobile ? undefined : 2000}
            itemClass="carousel-item-padding"
            swipeable={isMobile || isTablet ? true : false}
          >
            {labtests &&
              labtests?.map((el: LabTestData) => {
                return (
                  <Card
                    key={el._id}
                    boxShadow={"lg"}
                    w={"100%"}
                    h={"fit-content"}
                  >
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
                          {el?.name}
                        </Heading>
                        <HStack fontSize={"small"}>
                          <Text>MRP. ₹. {el?.price}</Text>
                          <Text textDecoration="line-through">
                            ₹. {el?.originalPrice}
                          </Text>
                        </HStack>
                      </VStack>
                    </CardHeader>
                    <CardBody>
                      <VStack spacing={0}>
                        <UnorderedList fontSize={"small"}>
                          {el?.features?.map((feature: string) => {
                            return <ListItem key={feature}>{feature}</ListItem>;
                          })}
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
                        isLoading={loading && loadingId === el?._id}
                        onClick={async () => {
                          setLoadingId(el._id);
                          const res = await post({
                            name: el?.name,
                            icon: el?.icon,
                            price: el?.price,
                            originalPrice: el?.originalPrice,
                            features: el?.features,
                          });

                          showToast("info", res?.message);
                        }}
                      >
                        Book Now
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
          </Carousel>
        )}
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
          as="a"
          href="mailto:ankitpatil@gmail.com"
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
