import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import useIsMobile from "../hooks/use-is-mobile";
import useIsTablet from "../hooks/use-is-tablet";
import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBraille, faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";

const HappyCustomers = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      px={isMobile ? "4" : "8"}
      width="100%"
      height="fit-content"
      bg="brand.background"
    >
      <Heading
        fontSize={"larger"}
        color="brand.primary"
        p={4}
        textAlign={"center"}
      >
        Happy Customers <FontAwesomeIcon fade icon={faFaceSmileBeam} />
      </Heading>
      <Divider />
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={1000}
        shouldResetAutoplay
        itemClass="carousel-item-padding"
        swipeable={isMobile || isTablet ? true : false}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
          return (
            <Card key={el} maxW="full" pb={10}>
              <CardHeader>
                <Flex
                  flex="1"
                  gap="4"
                  alignItems="center"
                  justifyContent={"center"}
                  flexWrap="wrap"
                >
                  <Avatar
                    name="Segun Adebayo"
                    src="https://i.postimg.cc/sxP83xL8/IMG-20240618-142831.png"
                  />
                  <Box>
                    <Heading size="sm">Vishal Chaudhary</Heading>
                    <Text>Up Coming Lead</Text>
                  </Box>
                  <IconButton
                    variant="unstyled"
                    cursor={"default"}
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<FontAwesomeIcon icon={faBraille} />}
                  />
                </Flex>
              </CardHeader>
              <CardBody
                w={"100%"}
                pt={0}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Text
                    w={"100%"}
                    textAlign={"center"}
                    noOfLines={isMobile ? 5 : undefined}
                  >
                    As a busy professional, I never have time to visit a
                    doctor&apos;s office. Using this medical website has been a
                    game-changer for me! The convenience of booking
                    consultations online and getting prescriptions delivered to
                    my door is incredible. The website is user-friendly, and I
                    can easily access my medical records and track my health.
                    The online doctor consultations are thorough, and the
                    doctors are always attentive and professional. I feel more
                    in control of my health and appreciate the seamless
                    experience. Highly recommended!{" "}
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default HappyCustomers;
