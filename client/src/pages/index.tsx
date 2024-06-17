import { ReactElement, useEffect, useState } from "react";
import { AppMainLayout } from "@/shared/components/app-layout";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCapsules,
  faHouseMedicalCircleCheck,
  faPills,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UnderLineAnimation } from "@/shared/icons";
import WhyUs from "@/features/home/why-us";
import ProductCard from "@/shared/components/product-card";

const Home = () => {
  const icons = [
    faSuitcaseMedical,
    faPills,
    faCapsules,
    faHouseMedicalCircleCheck,
  ];
  const [icon, setIcon] = useState(0);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIcon((prev) => (prev === icons.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [icons.length]);

  return (
    <VStack spacing={10}>
      <Flex
        width="100%"
        height={isMobile ? "100vh" : isTablet ? "50vh" : "90vh"}
        flexDir={isMobile ? "column" : "row"}
        bg="brand.background"
        px={isMobile ? "4" : "10"}
      >
        <Box
          pos="relative"
          width={isMobile ? "100%" : "45%"}
          height={isMobile ? "50%" : "100%"}
          bg="brand.background"
          display="flex"
          alignItems="center"
          justifyContent="left"
        >
          <VStack width="100%" spacing={6} align="flex-start">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0px" }}
              exit={{ opacity: 0 }}
              transition={{ loop: Infinity, duration: 1 }}
            >
              <Heading
                width="100%"
                fontSize={isMobile ? "xx-large" : "xxx-large"}
                textAlign="left"
              >
                Your Trusted Online Pharmacy
              </Heading>
            </motion.div>
            <VStack spacing={0}>
              <Text width="100%" textAlign="left">
                Medical Care, Delivered to Your Doorstep! Your Health, Our
                Priority
              </Text>
              <Text width="100%" textAlign="left">
                Start Shopping Now!
              </Text>
            </VStack>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ loop: Infinity, duration: 1, delay: 0.5 }}
            >
              <Button
                width="100%"
                borderRadius="full"
                py={6}
                px={6}
                bg="brand.primary"
                color={"brand.fontLight"}
              >
                Start Shopping
              </Button>
            </motion.div>
          </VStack>
          {!isMobile && !isTablet && (
            <>
              {" "}
              <Box
                width="6"
                height="6"
                bg="brand.primary"
                id="scale_infinity_4"
                borderRadius="full"
                pos="absolute"
                top={"20%"}
                left={"20%"}
                zIndex={1000}
              />
              <Box
                width="4"
                height="4"
                bg="brand.primary"
                id="scale_infinity_3"
                borderRadius="full"
                pos="absolute"
                top={"50%"}
                right={"0%"}
                zIndex={1000}
              />
              <Box
                width="8"
                height="8"
                bg="brand.primary"
                borderRadius="full"
                id="scale_infinity_2"
                pos="absolute"
                top={"10%"}
                right={"20%"}
                zIndex={1000}
              />
              <Box
                width="6"
                height="6"
                bg="brand.primary"
                borderRadius="full"
                id="scale_infinity_1"
                pos="absolute"
                bottom={"0%"}
                left={"50%"}
                zIndex={1000}
              />
              <Box
                width="6"
                height="6"
                bg="brand.primary"
                borderRadius="full"
                id="scale_infinity_3"
                pos="absolute"
                bottom={"10%"}
                left={"5%"}
                zIndex={1000}
              />
              <Box
                width="6"
                height="6"
                bg="brand.primary"
                borderRadius="full"
                id="scale_infinity_2"
                pos="absolute"
                right={"10%"}
                bottom={"10%"}
                zIndex={1000}
              />
            </>
          )}
        </Box>
        <Box
          pos="relative"
          width={isMobile ? "100%" : "55%"}
          height={isMobile ? "50%" : "100%"}
          display="flex"
          alignItems="center"
          overflow="hidden"
          justifyContent="center"
        >
          <Image
            id="scale_infinity"
            borderRadius="full"
            pos="absolute"
            top={0}
            left={isMobile ? 0 : 10}
            boxSize={isMobile || isTablet ? "150px" : "xs"}
            src="/assets/med_12.jpg"
            alt="Dan Abramov"
          />
          <Image
            id="scale_infinity_2"
            borderRadius="full"
            pos="absolute"
            right={0}
            bottom={isMobile ? 30 : 30}
            boxSize={isMobile || isTablet ? "150px" : "xs"}
            src="/assets/med_11.jpg"
            alt="Dan Abramov"
          />
          <Image
            id="scale_infinity_3"
            borderRadius="full"
            pos="absolute"
            top={0}
            right={isMobile ? 10 : 30}
            boxSize={isMobile || isTablet ? "150px" : "xs"}
            src="/assets/med_13.jpg"
            alt="Dan Abramov"
          />
          <Image
            id="scale_infinity_4"
            borderRadius="full"
            pos="absolute"
            bottom={0}
            left={10}
            boxSize={isMobile || isTablet ? "150px" : "xs"}
            src="/assets/med_14.jpg"
            alt="Dan Abramov"
          />
          <Box
            width="6"
            height="6"
            bg="brand.primary"
            id="scale_infinity_4"
            borderRadius="full"
            pos="absolute"
            top={"50%"}
            left={isMobile || isTablet ? "10%" : "20%"}
            zIndex={1000}
          />
          <Box
            width="4"
            height="4"
            bg="brand.primary"
            id="scale_infinity_3"
            borderRadius="full"
            pos="absolute"
            top={"50%"}
            right={isMobile || isTablet ? "10%" : "30%"}
            zIndex={1000}
          />
          <Box
            width="8"
            height="8"
            bg="brand.primary"
            borderRadius="full"
            id="scale_infinity_2"
            pos="absolute"
            top={isMobile || isTablet ? "20%" : "10%"}
            left={"50%"}
            zIndex={1000}
          />
          <Box
            width="6"
            height="6"
            bg="brand.primary"
            borderRadius="full"
            id="scale_infinity_1"
            pos="absolute"
            bottom={"20%"}
            left={"50%"}
            zIndex={1000}
          />
          <Center
            id="scale_infinity_5"
            width={isMobile ? "24" : "40"}
            height={isMobile ? "24" : "40"}
            borderRadius="full"
            bg="brand.primary"
          >
            <motion.div
              key={icon}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ loop: Infinity, duration: 3 }}
            >
              <FontAwesomeIcon
                size={isMobile ? "xl" : "4x"}
                color="white"
                icon={icons[icon]}
              />
            </motion.div>
          </Center>
        </Box>
      </Flex>
      {<WhyUs />}
      <Box width="100%" pos="relative">
        <Heading
          width="100%"
          px={isMobile ? "4" : "10"}
          size="md"
          textAlign="left"
        >
          Top Sellers
        </Heading>
        <UnderLineAnimation
          style={{ position: "absolute", top: 1, left: 70 }}
          id="checkedcircleanimated"
        />
      </Box>
      <Box
        px={isMobile ? "4" : "8"}
        width="100%"
        height="fit-content"
        bg="brand.background"
      >
        <Carousel
          responsive={responsive}
          autoPlay
          itemClass="carousel-item-padding"
          swipeable={isMobile || isTablet ? true : false}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
            return <ProductCard key={el} />;
          })}
        </Carousel>
      </Box>
      <HStack
        spacing={10}
        px={isMobile ? "4" : "10"}
        align="center"
        justify="center"
        width="100%"
        overflow="hidden"
        height={isMobile ? "100vh" : isTablet ? "50vh" : "60vh"}
        flexDir={isMobile ? "column" : "row"}
      >
        <VStack
          width={isMobile ? "100%" : "50%"}
          height="100%"
          pos="relative"
          p={4}
          spacing={isMobile || isTablet ? 2 : 6}
          display="flex"
          alignItems="left"
          justifyContent={isMobile || isTablet ? "flex-end" : "center"}
          background=" linear-gradient(to bottom right, #00CED1 0%, #FFFFFF 100%)"
          borderRadius="3xl"
        >
          <Heading
            fontSize={isMobile ? "lg" : "4xl"}
            zIndex={10}
            textShadow="rgb(0, 206, 209) 1px 0 10px"
          >
            Instant Assistance
          </Heading>
          <Text zIndex={10}>Wish to seek advise from doctors?</Text>
          <Button
            width="fit-content"
            bg="brand.background"
            color="brand.primary"
            zIndex={10}
          >
            Book an appointment
          </Button>
          <Image
            boxSize={"fit-content"}
            src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/physician.png"
            alt="doc"
            pos="absolute"
            bottom={0}
            right={0}
          />
        </VStack>
        <VStack
          spacing={10}
          flexDir="column-reverse"
          width={isMobile ? "100%" : "50%"}
          height="100%"
        >
          <VStack
            width="100%"
            height="50%"
            filter="drop-shadow(0 0 0rem rgb(0, 206, 209))"
            bg="linear-gradient(to left, #ffffff 0%, #00CED1 100%)"
            align="left"
            justifyContent={isMobile || isTablet ? "flex-end" : "center"}
            borderRadius="3xl"
            p={4}
          >
            <Heading
              fontSize={isMobile ? "lg" : "4xl"}
              zIndex={10}
              textShadow="rgb(0, 206, 209) 1px 0 10px"
            >
              Refer Now
            </Heading>
            <Text width="50%" fontSize="small" zIndex={10} noOfLines={3}>
              Tell your friends to shop at MedKart. They get Rs.200 off when
              they shop with us the 1st time & you get Rs. 200 off on your next
              order.
            </Text>
            <Button
              width="50%"
              bg="brand.background"
              color="brand.primary"
              zIndex={10}
            >
              Refer now
            </Button>
            <Image
              boxSize={isMobile ? "150" : "fit-content"}
              src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/boy-refer.svg"
              alt="doc"
              pos="absolute"
              bottom={0}
              right={0}
            />
          </VStack>
          <VStack
            width="100%"
            height="50%"
            background="linear-gradient(to left, #00CED1 0%, #FFFFFF 100%)"
            borderRadius="3xl"
            filter="drop-shadow(0 0 0rem rgb(0, 206, 209))"
            alignItems="flex-end"
            justifyContent={isMobile || isTablet ? "flex-end" : "center"}
            p={4}
          >
            <Heading
              fontSize={isMobile ? "lg" : "4xl"}
              zIndex={10}
              textShadow="rgb(0, 206, 209) 1px 0 10px"
            >
              Health Assistant
            </Heading>
            <Text
              width="50%"
              textShadow="rgb(0, 206, 209) 1px 0 10px"
              fontSize="small"
              textAlign="right"
              zIndex={10}
              noOfLines={3}
            >
              Explore the power of our Health Assistant – your trusted companion
              on the journey to better health.
            </Text>
            <Button
              width="50%"
              bg="brand.background"
              color="brand.primary"
              zIndex={10}
            >
              Checkout Now
            </Button>

            {!isTablet && (
              <Image
                boxSize="fit-content"
                src="https://assets.pharmeasy.in/apothecary/_next/static/media/PlusFamily.22677720.png?dim=1440x0"
                alt="doc"
                pos="absolute"
                left={0}
                bottom={0}
              />
            )}
          </VStack>
        </VStack>
      </HStack>
      <Box width="100%" pos="relative">
        <Heading
          width="100%"
          px={isMobile ? "4" : "10"}
          size="md"
          textAlign="left"
        >
          Popular Products
        </Heading>
        <UnderLineAnimation
          style={{ position: "absolute", top: 1, left: 130 }}
          id="checkedcircleanimated"
        />
      </Box>
      <Box
        px={isMobile ? "4" : "8"}
        width="100%"
        height="fit-content"
        bg="brand.background"
        mb={10}
      >
        <Carousel
          itemClass={"carousel-item-padding"}
          responsive={responsive}
          swipeable={isMobile || isTablet ? true : false}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
            return <ProductCard key={el} />;
          })}
        </Carousel>
      </Box>
    </VStack>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default Home;
