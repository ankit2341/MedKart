import useGet from "@/shared/api/hooks/use-get";
import ProductCard from "@/shared/components/product-card";
import { ProductProps } from "@/types";
import {
  Center,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function SearchModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { data, refetch, loading } = useGet(
    `/products?search=${search}&page=1&sort=asc`,
  );

  useEffect(() => {
    refetch(`/products?search=${search}&page=1&sort=asc`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <Center
        onClick={onOpen}
        cursor="pointer"
        p={4}
        display={isOpen ? "none" : "flex"}
        width={10}
        height={10}
        border="1px solid"
        borderRadius="full"
        borderColor="brand.primary"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Center>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        size="6xl"
        onClose={onClose}
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent mt={"10vh"}>
          <ModalHeader py={12} bg={"brand.background"}>
            <FormControl>
              <InputGroup>
                <InputLeftElement>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </InputLeftElement>
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  focusBorderColor="brand.primary"
                  ref={initialRef}
                  placeholder="Search what are you looking for..."
                />
              </InputGroup>
            </FormControl>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            bg="brand.background"
            width="100%"
            height="50vh"
            pt={0}
            pb={6}
          >
            {loading && (
              <Center width="100%" height="50vh">
                <Spinner />
              </Center>
            )}
            {search === "" ? (
              <Center width="100%" height="70vh">
                <Text>Try &quot;Muscles&quot;</Text>
              </Center>
            ) : (
              <SimpleGrid columns={[1, 2, 2, 4]} spacing={4}>
                {!loading &&
                  data &&
                  data.map((el: ProductProps) => {
                    return (
                      <ProductCard
                        onClose={onClose}
                        product={el}
                        key={el._id}
                      />
                    );
                  })}
              </SimpleGrid>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
