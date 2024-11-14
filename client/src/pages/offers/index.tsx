import { AppMainLayout } from "@/shared/components/app-layout";
import {
  Box,
  Button,
  HStack,
  Heading,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
  VStack,
  useClipboard,
} from "@chakra-ui/react";
import { faClipboard, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

export const couponData = [
  {
    id: 1,
    eventName: "Discount Event 1",
    discount: "Save 20% Now",
    validUntil: "2026-06-25",
    code: "CODE1234",
    percent: 20,
  },
  {
    id: 2,
    eventName: "Discount Event 2",
    discount: "Save 15%",
    validUntil: "2026-07-10",
    code: "CODE5678",
    percent: 15,
  },
  {
    id: 3,
    eventName: "Discount Event 3",
    discount: "Save 10%",
    validUntil: "2026-08-15",
    code: "CODE9101",
    percent: 10,
  },
  {
    id: 4,
    eventName: "Discount Event 4",
    discount: "Save 5%",
    validUntil: "2026-09-01",
    code: "CODE1121",
    percent: 5,
  },
  {
    id: 5,
    eventName: "Discount Event 5",
    discount: "Save 11%",
    validUntil: "2026-09-15",
    code: "CODE3141",
    percent: 11,
  },
  {
    id: 6,
    eventName: "Discount Event 6",
    discount: "Save 25%",
    validUntil: "2026-10-05",
    code: "CODE5161",
    percent: 25,
  },
];

const CouponCard = ({
  eventName,
  discount,
  validUntil,
  code,
}: {
  eventName: string;
  discount: string;
  validUntil: string;
  code: string;
}) => {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Box
      width="100%"
      borderRadius="lg"
      bg="gray.100"
      position="relative"
      p={4}
      overflow="hidden"
      textAlign="center"
    >
      {/* Left half-circle */}
      <Box
        position="absolute"
        top="50%"
        left="-20px"
        transform="translateY(-50%)"
        width="40px"
        height="40px"
        bg="brand.background"
        borderRadius="50%"
      />
      {/* Right half-circle */}
      <Box
        position="absolute"
        top="50%"
        right="-20px"
        transform="translateY(-50%)"
        width="40px"
        height="40px"
        bg="brand.background"
        borderRadius="50%"
      />
      <VStack spacing={2} color={"black"} py={4}>
        <Text fontSize="xl" fontWeight="bold">
          {eventName}
        </Text>
        <Tag size={"sm"} variant="subtle" colorScheme="teal">
          <TagLabel>{discount}</TagLabel>
        </Tag>
        <Text fontSize="sm" color={"gray.500"}>
          Valid until {validUntil}
        </Text>
        <Button
          border={"2px dashed"}
          borderColor={"brand.primary"}
          bg={"white"}
          color={"brand.primary"}
          onClick={onCopy}
          leftIcon={<FontAwesomeIcon icon={faClipboard} />}
        >
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </VStack>
    </Box>
  );
};

const Offers = () => {
  return (
    <VStack w={"100%"} spacing={10} px={10} pt={4} pb={10}>
      <VStack spacing={4}>
        <HStack
          w={"100%"}
          alignItems={"center"}
          bg={"gray.100"}
          color={"brand.primary"}
          py={2}
          justifyContent={"center"}
        >
          <FontAwesomeIcon size="lg" icon={faTicket} color={"brand.primary"} />
          <Heading fontSize={"larger"} color={"black"}>
            Offers
          </Heading>
        </HStack>
        <Text textAlign={"center"} fontSize={"sm"}>
          Congratulations! You have unlocked a special bundle of online coupon
          codes. Use these codes during checkout on our website to enjoy various
          discounts on your purchases. Keep these codes safe and be sure to use
          them before their expiration dates. Happy shopping!
        </Text>
      </VStack>
      <SimpleGrid w={"100%"} columns={[1, 2, 3, 4]} gap={"20px"}>
        {couponData.map((coupon) => (
          <CouponCard
            key={coupon.id}
            eventName={coupon.eventName}
            discount={coupon.discount}
            validUntil={coupon.validUntil}
            code={coupon.code}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

Offers.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default Offers;
