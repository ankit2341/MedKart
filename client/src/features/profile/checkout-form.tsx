import { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { OrderData } from "./my-orders";
import usePost from "@/shared/api/hooks/use-post";
import { showToast } from "@/shared/shared-toast";
import useDelete from "@/shared/api/hooks/use-delete";

const CheckoutFormModal = ({
  orders,
  cartRefetch,
}: {
  orders: OrderData[];
  cartRefetch: () => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const { post, loading } = usePost("/order/post");
  const { remove, loading: deleteCartLoading } = useDelete("/cart/clear");
  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
  };

  const paySetOrder = async () => {
    const res = await post({
      items: orders,
    });
    await remove({}, "/cart/clear");
    showToast("info", res?.message);
    cartRefetch();
  };

  return (
    <>
      {/* Trigger Button for Modal */}
      <Button
        width="100%"
        onClick={onOpen}
        bg="brand.primary"
        color="brand.background"
      >
        Checkout
      </Button>

      {/* Modal */}
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={8}>
            <form>
              <Stack spacing={6}>
                {/* Name Field */}
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="Enter your name" />
                </FormControl>

                {/* Email Field */}
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Enter your email" />
                </FormControl>

                {/* Payment Method Selection */}
                <FormControl>
                  <FormLabel>Payment Method</FormLabel>
                  <RadioGroup
                    colorScheme="cyan"
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                  >
                    <Stack direction="row" spacing={4}>
                      <Radio value="creditCard">Credit Card</Radio>
                      <Radio value="upi">UPI</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                {/* Credit Card Fields */}
                {paymentMethod === "creditCard" && (
                  <Stack spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>Card Number</FormLabel>
                      <Input type="text" placeholder="Enter card number" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Expiry Date</FormLabel>
                      <Input type="text" placeholder="MM/YY" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>CVV</FormLabel>
                      <Input type="text" placeholder="CVV" />
                    </FormControl>
                  </Stack>
                )}

                {/* UPI Fields */}
                {paymentMethod === "upi" && (
                  <FormControl isRequired>
                    <FormLabel>UPI ID</FormLabel>
                    <Input type="text" placeholder="Enter UPI ID" />
                  </FormControl>
                )}

                {/* Terms & Conditions */}
                <FormControl>
                  <Checkbox colorScheme="cyan">
                    I agree to the terms and conditions
                  </Checkbox>
                </FormControl>
              </Stack>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={paySetOrder}
              isLoading={loading || deleteCartLoading}
              colorScheme="brand"
              bg={"brand.primary"}
              color={"white"}
              type="submit"
              size="md"
            >
              Pay Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CheckoutFormModal;
