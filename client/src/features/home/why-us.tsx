import useIsMobile from "@/shared/hooks/use-is-mobile";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const WhyUs = () => {
  const isMobile = useIsMobile();

  return (
    <VStack overflow="hidden" width="100%" py={10}>
      <Heading py={10}>Why Us?</Heading>
      <Box width="100%" height="40" bg={"brand.background"} position="relative">
        <motion.div
          initial={{ translateX: "-20vw" }}
          animate={{ translateX: "110vw" }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: "absolute",
            transform: "translateY(-50%)",
            top: -10,
          }}
        >
          <Image
            boxSize="40"
            src="https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=96x0"
            alt="Delivery"
          />
        </motion.div>
        <Box
          width="100%"
          height="10"
          bg="brand.background"
          border="none"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Heading px={"10"} fontSize={isMobile ? "medium" : "x-large"}>
            On Time Delivery
          </Heading>
          <Heading px={"10"} fontSize={isMobile ? "medium" : "x-large"}>
            Most Trusted Brand
          </Heading>
        </Box>
        <Box
          width="100%"
          height="10"
          bg="brand.background"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          {" "}
          {!isMobile && (
            <>
              <Text px={10}>10000+ Orders on Medkart till date</Text>{" "}
              <Text px={10}>Serviced over 10000+ orders</Text>
            </>
          )}
        </Box>
        <Box
          width="100%"
          height="10"
          border="none"
          bg="#808080"
          borderBottom="2px dashed"
          borderColor="lightgray"
        ></Box>
        <Box width="100%" height="10" bg="#808080" border="none"></Box>
      </Box>
      <Box
        width="100%"
        height="10"
        bg="brand.background"
        border="none"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <Heading px={"10"} fontSize={isMobile ? "medium" : "x-large"}>
          10+ Location Served
        </Heading>
        <Heading px={"10"} fontSize={isMobile ? "medium" : "x-large"}>
          Book Lab Tests
        </Heading>
      </Box>
    </VStack>
  );
};

export default WhyUs;
