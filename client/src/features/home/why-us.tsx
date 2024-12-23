import { useTheme } from "@/context/theme-context";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import {
  faMoon,
  faSun,
  faTree,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const WhyUs = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const { theme } = useTheme();

  return (
    <VStack overflow="hidden" width="100%" h={"auto"} py={10} pos="relative">
      <Heading fontSize="x-large" py={isMobile ? 10 : 20}>
        Why Us?
      </Heading>
      {theme === "light" && (
        <FontAwesomeIcon
          icon={faSun}
          spin
          color="orange"
          size={isMobile ? "3x" : "4x"}
          style={{
            position: "absolute",
            top: isTablet ? "30%" : "20%",
            left: isTablet || isMobile ? "5%" : "10%",
          }}
        />
      )}
      {theme === "dark" && (
        <FontAwesomeIcon
          icon={faMoon}
          fade
          color="lightgray"
          size={isMobile ? "3x" : "4x"}
          style={{ position: "absolute", top: "20%", right: "10%" }}
        />
      )}
      <Box width="100%" height="40" bg={"brand.background"} position="relative">
        <motion.div
          initial={{ translateX: "-20vw" }}
          animate={{ translateX: "110vw" }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: "absolute",
            transform: "translateY(-50%)",
            top: -10,
            zIndex: 8,
          }}
        >
          <Image
            boxSize="40"
            src="https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=96x0"
            alt="Delivery"
          />
          <Box
            style={{
              position: "absolute",
              bottom: "10%",
              transform: "rotate(180deg)",
              color: "#f2f3f4",
            }}
          >
            <FontAwesomeIcon beatFade icon={faWind} />
          </Box>
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
          <FontAwesomeIcon
            icon={faTree}
            color="#2a7e19"
            size="6x"
            style={{ position: "absolute", top: -10 }}
          />

          {!(isTablet || isMobile) && (
            <FontAwesomeIcon
              icon={faTree}
              color="#2a7e19"
              size="8x"
              style={{ position: "absolute", top: -40, left: 10 }}
            />
          )}

          <FontAwesomeIcon
            icon={faTree}
            color="#2D5A27"
            size={isTablet ? "4x" : "7x"}
            style={{
              position: "absolute",
              top: isTablet ? 20 : -30,
              right: 10,
            }}
          />
          <FontAwesomeIcon
            icon={faTree}
            color="green"
            size="5x"
            style={{
              position: "absolute",
              bottom: 0,
              right: "30%",
              zIndex: 9,
            }}
          />
          {!(isTablet || isMobile) && (
            <FontAwesomeIcon
              icon={faTree}
              color="#2D5A27"
              size="7x"
              style={{
                position: "absolute",
                bottom: 0,
                left: "10%",
                zIndex: 9,
              }}
            />
          )}
          <FontAwesomeIcon
            icon={faTree}
            color="#014421"
            size="7x"
            style={{
              position: "absolute",
              bottom: 0,
              left: isTablet || isMobile ? "-1%" : "40%",
              zIndex: 9,
            }}
          />
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
              {" "}
              <Heading px={"10"} fontSize={isMobile ? "medium" : "x-large"}>
                On Time Delivery
              </Heading>
              <Heading px={"10"} fontSize={isMobile ? "medium" : "x-large"}>
                Most Trusted Brand
              </Heading>
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
        height="auto"
        bg="brand.background"
        border="none"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        textAlign="center"
      >
        <Heading fontSize={isMobile ? "small" : "x-large"}>
          10+ Location Served
        </Heading>
        <Heading fontSize={isMobile ? "small" : "x-large"}>
          Book Lab Tests
        </Heading>
        {isMobile && !isTablet && (
          <>
            <Heading fontSize={isMobile ? "small" : "x-large"}>
              On Time Delivery
            </Heading>
            <Heading fontSize={isMobile ? "small" : "x-large"}>
              Most Trusted Brand
            </Heading>
          </>
        )}
      </Box>
    </VStack>
  );
};

export default WhyUs;
