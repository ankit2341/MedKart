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
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
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
        px={isMobile ? 2 : "10"}
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
              <Heading width="100%" fontSize="xxx-large" textAlign="left">
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
      <HStack
        spacing={10}
        px={10}
        align="center"
        justify="center"
        width="100%"
        height={isMobile ? "100vh" : isTablet ? "50vh" : "80vh"}
        flexDir={isMobile ? "column" : "row"}
      >
        <Box
         width={isMobile?"100%":"50%"}
          height="100%"
          bg="brand.primary"
          borderRadius="3xl"
        ></Box>
        <VStack spacing={10} flexDir="column-reverse" width={isMobile?"100%":"50%"} height="100%">
          <Box
            width="100%"
            height="50%"
            filter="drop-shadow(0 0 0.15rem rgb(0, 206, 209))"
            bg="brand.background"
            borderRadius="3xl"
          ></Box>
          <Box
            width="100%"
            height="50%"
            bg="brand.primary"
            borderRadius="3xl"
          ></Box>
        </VStack>
      </HStack>
      <Heading width="100%" px="10" size="md" textAlign="left">Popular Products</Heading>
      <Box px={"10"} width="100%" height="50vh" bg="brand.background" mb={10}>
        
      <Carousel responsive={responsive} swipeable={true}>
     <Box  width="90%" height={"50vh"} bg="brand.primary"></Box>
     <Box  width="90%" height={"50vh"} bg="brand.primary"></Box>
     <Box  width="90%" height={"50vh"} bg="brand.primary"></Box>
     <Box  width="90%" height={"50vh"} bg="brand.primary"></Box>
     <Box  width="90%" height={"50vh"} bg="brand.primary"></Box>
     <Box width="90%" height={"50vh"} bg="brand.primary"></Box>
    
  </Carousel>
  </Box>
    </VStack>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default Home;
