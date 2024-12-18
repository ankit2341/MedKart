import { couponData } from "@/pages/offers";
import useDelete from "@/shared/api/hooks/use-delete";
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
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Skeleton,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CheckoutFormModal from "./checkout-form";
import { useTheme } from "@/context/theme-context";

interface cartData {
  _id: string;
  userId: string;
  productId: string;
  image: string;
  productName: string;
  variantPrice: number;
  isAvailable: boolean;
  quantity: number;
}

const MyCart = ({
  cartData,
  cartLoading,
  cartRefetch,
}: {
  cartData: cartData[] | null;
  cartLoading: boolean;
  cartRefetch: () => void;
}) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const [total, setTotal] = useState<number>(0);
  const [variantTotal, setVariantTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [coupon, setCoupon] = useState("");
  const { remove: cartItemRemove, loading: cartDeleteLoading } = useDelete(``);
  const {theme}=useTheme();

  useEffect(() => {
    if (discount === null || isNaN(discount)) {
      return;
    }
    const totalPrice =
      cartData?.reduce((acc, item) => {
        return acc + item.variantPrice * item.quantity;
      }, 0) || 0;

    setVariantTotal(totalPrice);
    const discountedTotal = totalPrice - discount;
    setTotal(Math.floor(discountedTotal));
  }, [cartData, discount]);

  async function deleteCartItem(id: string) {
    const res = await cartItemRemove(
      {
        id: id,
      },
      `/cart/delete/${id}`,
    );
    showToast("info", res?.Messsage);
    await cartRefetch();
  }

  if (cartData === null) {
    return null;
  }

  return cartLoading ? (
    <Flex w={"full"} alignItems={"center"} justify={"center"}>
      <Spinner />
    </Flex>
  ) : (
    <>
      <motion.div
        style={{ width: isMobile || isTablet ? "100%" : "30%", zIndex: 9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Card
          border="1px solid"
          borderColor={theme==="dark"?"gray.600": "lightgray"}
          width={"100%"}
          bg="brand.background"
          display="flex"
          alignItems="center"
          color={"brand.font"}
          justifyContent="center"
          boxShadow={"none"}
        >
          <CardHeader width="100%">
            <FormControl>
              <FormLabel fontWeight="bold">Enter Promo Code</FormLabel>
              <Input
                placeholder="Enter promo code"
                borderColor={theme==="dark"?"gray.600": "lightgray"}
                focusBorderColor="brand.primary"
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <Button
                mt={2}
                onClick={() => {
                  const selectedCoupon = couponData.find(
                    (el) => el.code === coupon,
                  );
                  if (discount === 0) {
                    setDiscount(
                      selectedCoupon
                        ? (selectedCoupon.percent / 100) * total
                        : 0,
                    );
                  } else {
                    setDiscount(0);
                  }
                }}
                width="100%"
                bg="brand.primary"
                color="brand.background"
              >
                {discount === 0 ? "Apply code" : "Remove code"}
              </Button>
            </FormControl>
            <Divider />
          </CardHeader>
          <CardBody width="100%">
            <FormControl>
              <FormLabel fontWeight="bold">Cart Summary</FormLabel>
              <VStack width="100%">
                <Divider />
                <HStack
                  w="100%"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text>Subtotal</Text>
                  <Text>₹. {variantTotal?.toFixed(2)}</Text>
                </HStack>
                <HStack
                  w="100%"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text>Discount</Text>
                  <Text color={"red"}>-₹. {discount?.toFixed(0)}</Text>
                </HStack>
                <Divider />
                <HStack
                  w="100%"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text>Estimated total</Text>
                  <Text>₹. {total?.toFixed(2)}</Text>
                </HStack>
                <Divider />
              </VStack>
            </FormControl>
          </CardBody>
          <CardFooter width="100%">
            <CheckoutFormModal orders={cartData} cartRefetch={cartRefetch} />
          </CardFooter>
        </Card>
      </motion.div>
      <motion.div
        style={{ width: isMobile || isTablet ? "100%" : "70%", zIndex: 9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <VStack
          border="1px solid"
          borderColor={theme==="dark"?"gray.600": "lightgray"}
          spacing={4}
          borderRadius={"lg"}
          width={"100%"}
          bg="brand.background"
          zIndex={1}
        >
          <Box width="100%" px={6} pt={6}>
            <Text w="100%" textAlign="left" fontWeight="bold">
              My Cart
            </Text>
          </Box>
          <Divider />
          <VStack width="100%" p={3}>
            {cartLoading ? (
              <Stack w={"100%"}>
                {Array.from({ length: 3 }, (_, index) => index + 1).map(
                  (el) => {
                    return (
                      <Skeleton key={el} w={"100%"} height={"50px"}></Skeleton>
                    );
                  },
                )}
              </Stack>
            ) : cartData?.length === 0 ? (
              <Text pb={2}>No products in the cart</Text>
            ) : (
              cartData &&
              cartData?.map((el) => {
                return (
                  <HStack
                    flexDir={isMobile ? "column" : "row"}
                    key={el._id}
                    border="1px solid"
                    borderColor={theme==="dark"?"gray.600": "lightgray"}
                    borderRadius="md"
                    p={3}
                    width="100%"
                    spacing={2}
                    alignItems="center"
                    justifyContent={isMobile ? "center" : "space-between"}
                  >
                    <HStack width="100%" flexDir={isMobile ? "column" : "row"}>
                      <Image
                        boxSize={"70px"}
                        src={
                          el?.image === ""
                            ? "https://static1.hkrtcdn.com/hknext/static/media/common/lazyicon_new.webp"
                            : el?.image
                        }
                        alt="Dan Abramov"
                      />
                      <VStack>
                        <Text
                          w="100%"
                          fontSize={!isMobile ? "medium" : "small"}
                          textAlign={isMobile ? "center" : "left"}
                        >
                          {el?.productName}
                        </Text>
                        <Text
                          w="100%"
                          fontSize={!isMobile ? "medium" : "small"}
                          textAlign={isMobile ? "center" : "left"}
                        >
                          Rs. {el?.variantPrice}
                        </Text>
                      </VStack>
                    </HStack>
                    <HStack spacing={0}>
                      <Text>Quantity</Text>
                      <Button
                        size="sm"
                        color={"brand.font"}
                        bg="brand.background"
                        _hover={{ bg: "brand.background" }}
                      >
                        {el?.quantity}
                      </Button>
                    </HStack>
                    <Button
                      size="sm"
                      onClick={() => deleteCartItem(el._id)}
                      isLoading={cartDeleteLoading}
                      bg="brand.background"
                      color="brand.primary"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </HStack>
                );
              })
            )}
          </VStack>
        </VStack>
      </motion.div>
    </>
  );
};

export default MyCart;
