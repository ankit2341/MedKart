import useGet from "@/shared/api/hooks/use-get";
import { ProductProps } from "@/types";
import {
  Badge,
  Button,
  Divider,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  TypographyProps,
} from "@chakra-ui/react";
import { faEllipsisVertical, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import AdminEdit from "./admin-edit";

interface AdminTableHeader {
  label: string;
  textTransform?: TypographyProps["textTransform"];
  textAlign?: TypographyProps["textAlign"];
  colSpan?: number;
  info?: string;
}

const productHeaders: AdminTableHeader[] = [
  { label: "Image", textTransform: "capitalize", textAlign: "left" },
  { label: "Product name", textTransform: "capitalize", textAlign: "left" },
  {
    label: "Price",
    textTransform: "capitalize",
    textAlign: "left",
  },
  {
    label: "Old price",
    textTransform: "capitalize",
    textAlign: "left",
  },
  {
    label: "Offer",
    textTransform: "capitalize",
    textAlign: "left",
  },
  {
    label: "Rating",
    textTransform: "capitalize",
    textAlign: "left",
  },
  {
    label: "Availability",
    textTransform: "capitalize",
    textAlign: "left",
  },
  // { label: "Actions", textTransform: "capitalize", textAlign: "left" },
];

const ProductData = () => {
  const {
    data: ProductData,
    loading: productsLoading,
    refetch,
  } = useGet("/products?page=1&sort=asc");
  const [page, setPage] = useState(1);

  useEffect(() => {
    refetch(`/products?page=${page}&sort=asc`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Text fontWeight={"bold"} w={"100%"}>
        Products data
      </Text>
      <Divider />
      <TableContainer w={"100%"}>
        <Table w={"100%"} variant="simple">
          <Thead>
            <Tr>
              {productHeaders.map((el) => {
                return (
                  <Th
                    textTransform={"capitalize"}
                    key={el.label}
                    textAlign={el.textAlign}
                  >
                    {el.label}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {productsLoading ? (
              <Tr>
                {" "}
                <Td colSpan={productHeaders.length}>
                  <Skeleton w={"100%"} h={"10"}></Skeleton>
                </Td>
              </Tr>
            ) : (
              ProductData &&
              ProductData?.map((product: ProductProps, i: number) => {
                return (
                  <Tr key={i}>
                    <Td>
                      <Image
                        w={"10"}
                        height={"10"}
                        borderRadius={"lg"}
                        objectFit="cover"
                        src={
                          product?.image === "" ||
                          product?.image ===
                            "https://static1.hkrtcdn.com/hknext/static/media/common/lazyicon_new.webp"
                            ? "https://png.pngtree.com/background/20210710/original/pngtree-minimalist-gradient-medical-background-picture-image_966366.jpg"
                            : product.image
                        }
                        alt="Dan Abramov"
                      />
                    </Td>
                    <Td maxW={48} whiteSpace={"normal"}>
                      {product?.productName}
                    </Td>
                    <Td>₹. {product?.variantPrice}</Td>
                    <Td>₹. {product?.variantOldPrice}</Td>
                    <Td>{product?.variantOffer}</Td>
                    <Td>
                      {product?.rating}{" "}
                      <FontAwesomeIcon icon={faStar} size="2xs" />
                    </Td>
                    <Td>
                      {product?.isAvailable ? (
                        <Badge colorScheme="green">In Stock</Badge>
                      ) : (
                        <Badge colorScheme="red">Not Available</Badge>
                      )}
                    </Td>
                    <Td>
                      <Menu>
                        <MenuButton
                          as={Button}
                          pl={0}
                          bg={"white"}
                          rightIcon={
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                          }
                        ></MenuButton>
                        <MenuList>
                          <AdminEdit refetch={refetch} ProductData={product} />
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                );
              })
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack w={"100%"} pb={4} alignItems={"center"} justifyContent={"center"}>
        <Button
          isDisabled={page === 1}
          size={"sm"}
          bg={"brand.primary"}
          color={"white"}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </Button>
        <Text px={1} color={"brand.font"}>
          {page}
        </Text>
        <Button
          size={"sm"}
          isDisabled={ProductData && ProductData?.length < 10}
          bg={"brand.primary"}
          color={"white"}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </HStack>
    </>
  );
};

export default ProductData;
