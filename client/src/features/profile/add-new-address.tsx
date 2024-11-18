import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import usePost from "@/shared/api/hooks/use-post";
import { showToast } from "@/shared/shared-toast";

const AddNewAddress = ({ addressRefetch }: { addressRefetch: () => void }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { post, loading } = usePost("/address/post");
  const [formData, setFormData] = useState({
    name: "",
    addressline1: "",
    city: "",
    pincode: "",
    phoneNumber: "",
    type: "HOME",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <Button bg="brand.primary" onClick={onOpen} color="brand.background">
        Add New Address
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fill in the Details</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              onClose();
              setFormData({
                name: "",
                addressline1: "",
                city: "",
                pincode: "",
                phoneNumber: "",
                type: "HOME",
              });
            }}
          />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                focusBorderColor="brand.primary"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Address Line 1</FormLabel>
              <Input
                value={formData.addressline1}
                onChange={(e) => handleChange("addressline1", e.target.value)}
                focusBorderColor="brand.primary"
              />
            </FormControl>
            <HStack spacing={4}>
              <FormControl mb={4}>
                <FormLabel>City</FormLabel>
                <Input
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  focusBorderColor="brand.primary"
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Pincode</FormLabel>
                <Input
                  type="number"
                  value={formData.pincode}
                  onChange={(e) => handleChange("pincode", e.target.value)}
                  focusBorderColor="brand.primary"
                />
              </FormControl>
            </HStack>
            <FormControl mb={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                focusBorderColor="brand.primary"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Type</FormLabel>
              <RadioGroup
                onChange={(value) => handleChange("type", value)}
                value={formData.type}
              >
                <Stack direction="row" defaultValue={"HOME"}>
                  <Radio value="HOME" colorScheme="cyan">
                    Home
                  </Radio>
                  <Radio value="WORK" colorScheme="cyan">
                    Work
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={loading}
              isDisabled={Object.values(formData).some((value) => !value)}
              color={"white"}
              bg={"brand.primary"}
              mr={3}
              onClick={async () => {
                const res = await post({
                  name: formData.name,
                  addressline1: formData.addressline1,
                  city: formData.city,
                  pincode: formData.pincode,
                  phoneNumber: formData.phoneNumber,
                  type: formData.type,
                });
                showToast("info", res?.Message);
                await addressRefetch();
                onClose();
                setFormData({
                  name: "",
                  addressline1: "",
                  city: "",
                  pincode: "",
                  phoneNumber: "",
                  type: "HOME",
                });
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNewAddress;
