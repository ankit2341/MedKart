import usePatch from "@/shared/api/hooks/use-patch";
import { showToast } from "@/shared/shared-toast";
import { UserData } from "@/shared/userdata-context";
import { ProductProps } from "@/types";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  MenuItem,
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
import { useState } from "react";

type UserState = {
  username: string | undefined;
  email: string | undefined;
  phoneNumber: number | undefined;
  role: string | undefined;
};

const userFields: (keyof Omit<UserState, "role">)[] = [
  "username",
  "email",
  "phoneNumber",
];

const AdminEdit = ({
  UserData,
  ProductData,
  refetch,
}: {
  UserData?: UserData;
  ProductData?: ProductProps;
  refetch?: (value?: string) => void;
  setPage?: (value: number) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [user, setUser] = useState<UserState>({
    username: UserData?.username,
    email: UserData?.email,
    phoneNumber: UserData?.phoneNumber,
    role: UserData?.role,
  });

  const [product, setProduct] = useState<Omit<
    ProductProps,
    "__v" | "_id" | "make" | "subtext" | "image"
  > | null>(
    ProductData
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ? (({ __v, _id, make, subtext, image, ...rest }) => rest)(ProductData)
      : null,
  );

  const { patch: userPatch, loading: userLoading } = usePatch(
    `/users/patch?id=${UserData?._id}`,
  );
  const { patch: productPatch, loading: productLoading } = usePatch(
    `/products/update?id=${ProductData?._id}`,
  );

  const handlePatchUser = async (user: UserState) => {
    const res = await userPatch({
      username: user.username,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      avatar: "",
    });
    onClose();
    showToast("info", res?.Message);
  };

  const handlePatchProduct = async (
    product: Omit<ProductProps, "__v" | "_id" | "make" | "subtext" | "image">,
  ) => {
    const res = await productPatch(product);
    onClose();
    if (refetch) {
      refetch();
    }
    showToast("info", res?.Message);
  };

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <>
      <MenuItem onClick={onOpen}>Edit</MenuItem>
      <Modal
        closeOnOverlayClick={false}
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="scale"
      >
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent bg={"brand.background"}>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {UserData && (
              <>
                {userFields.map((field) => (
                  <FormControl mt={4} key={field}>
                    <FormLabel>Enter {field}</FormLabel>
                    <Input
                      name={field}
                      border="1px solid"
                      borderColor="lightgray"
                      value={user[field] as string | number | undefined}
                      onChange={(e) =>
                        setUser({ ...user, [field]: e.target.value })
                      }
                      placeholder={`Enter ${field}`}
                      focusBorderColor="brand.primary"
                      padding={6}
                      type={
                        field === "email"
                          ? "email"
                          : field === "phoneNumber"
                            ? "tel"
                            : "text"
                      }
                    />
                  </FormControl>
                ))}
                <FormControl mt={4}>
                  <RadioGroup
                    colorScheme="cyan"
                    onChange={(value) => setUser({ ...user, role: value })}
                    value={user.role}
                  >
                    <Stack direction="row" spacing={5}>
                      <Radio value="PLATFORM_ADMIN">Platform Admin</Radio>
                      <Radio value="STANDARD_USER">Standard User</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </>
            )}

            {ProductData && product && (
              <>
                {Object.keys(product).map((key) => {
                  if (key === "isAvailable") {
                    return (
                      <FormControl mt={4} key={key}>
                        <FormLabel>Availability</FormLabel>
                        <RadioGroup
                          colorScheme="cyan"
                          onChange={(value) =>
                            setProduct({
                              ...product,
                              isAvailable: value === "true",
                            })
                          }
                          value={product.isAvailable ? "true" : "false"}
                        >
                          <Stack direction="row" spacing={5}>
                            <Radio value="true">In Stock</Radio>
                            <Radio value="false">Not Available</Radio>
                          </Stack>
                        </RadioGroup>
                      </FormControl>
                    );
                  } else {
                    return (
                      <FormControl mt={4} key={key}>
                        <FormLabel>
                          Enter {key}{" "}
                          {key === "variantOldPrice" || key === "variantPrice"
                            ? "( ₹ )"
                            : ""}
                          {key === "variantOffer" ? "( % )" : ""}
                          {key === "rating" ? "( 0-5 )" : ""}
                        </FormLabel>
                        <Input
                          name={key}
                          border="1px solid"
                          borderColor="lightgray"
                          value={product[key as keyof typeof product] as string}
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              [key]: e.target.value,
                            })
                          }
                          placeholder={`Enter ${key}`}
                          focusBorderColor="brand.primary"
                          padding={6}
                        />
                      </FormControl>
                    );
                  }
                })}
              </>
            )}
          </ModalBody>
          <ModalFooter>
            {UserData && (
              <Button
                onClick={async () => {
                  await handlePatchUser(user);
                  window.location.reload();
                }}
                isLoading={userLoading}
                bg={"brand.primary"}
                color={"brand.background"}
              >
                Update User
              </Button>
            )}
            {ProductData && product && (
              <Button
                ml={3}
                onClick={() => {
                  handlePatchProduct(product);
                }}
                isLoading={productLoading}
                bg={"brand.primary"}
                color={"brand.background"}
              >
                Update Product
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminEdit;
