import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import useIsMobile from "../hooks/use-is-mobile";
import useIsTablet from "../hooks/use-is-tablet";
import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBraille, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme-context";

const HappyCustomers = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const { theme } = useTheme();
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
      py={16}
    >
      <Box px={isMobile ? "4" : "8"} width="100%" bg="brand.background">
        <Carousel
          responsive={responsive}
          autoPlay={!isMobile}
          infinite
          autoPlaySpeed={isMobile ? undefined : 2000}
          shouldResetAutoplay
          showDots
          swipeable={isMobile || isTablet ? true : false}
        >
          {[1, 2].map((el) => {
            return (
              <Card
                key={el}
                boxShadow={"none"}
                bg={theme === "dark" ? "brand.background" : "white"}
                pb={10}
              >
                <CardHeader>
                  <Flex
                    flex="1"
                    gap="4"
                    alignItems="center"
                    justifyContent={"center"}
                    flexWrap="wrap"
                  >
                    <Avatar
                      name={el === 1 ? "Prateek Patil" : "Ramesh Gupta"}
                      bg={"brand.primary"}
                    />
                    <Box>
                      <Heading size="sm" color={"brand.font"}>
                        {el === 1 ? "Prateek Patil" : "Ramesh Gupta"}
                      </Heading>
                      <Text color={"brand.font"}>MedKart Customer</Text>
                    </Box>
                    <IconButton
                      variant="unstyled"
                      cursor={"default"}
                      color={theme === "dark" ? "brand.fontLight" : "gray"}
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
                  <Flex
                    flexDir={isMobile ? "column" : "row"}
                    alignItems={isMobile ? "center" : "flex-start"}
                    justifyContent={"center"}
                  >
                    <Box px={4}>
                      <FontAwesomeIcon icon={faQuoteLeft} />
                    </Box>

                    <Text
                      w={isMobile ? "70%" : "80%"}
                      color={"brand.font"}
                      textAlign={isMobile ? "center" : "justify"}
                      noOfLines={undefined}
                    >
                      {el === 1
                        ? ` As a busy professional, I never have time to visit a
                      doctor's office. Using this medical website has been
                      a game-changer for me! The convenience of booking
                      consultations online and getting prescriptions delivered
                      to my door is incredible. The website is user-friendly,
                      and I can easily access my medical records and track my
                      health. The online doctor consultations are thorough, and
                      the doctors are always attentive and professional. I feel
                      more in control of my health and appreciate the seamless
                      experience. Highly recommended!`
                        : `Using this platform has been a game-changer! Ordering my medicines online is now quick, easy, and stress-free. The delivery is always prompt, and the platform offers a wide range of genuine medicines at competitive prices. Their customer service is outstanding, answering my questions quickly and ensuring I get exactly what I need. Highly recommend for anyone looking for convenience, reliability, and top-notch service right to their doorstep!`}
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            );
          })}
        </Carousel>
      </Box>
    </Box>
  );
};

export default HappyCustomers;
