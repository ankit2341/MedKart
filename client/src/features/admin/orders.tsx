import useGet from "@/shared/api/hooks/use-get";
import {
  Badge,
  Button,
  Divider,
  HStack,
  Image,
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
import { useEffect, useState } from "react";
import { OrderData as orderProps } from "../profile/my-orders";

interface AdminTableHeader {
  label: string;
  textTransform?: TypographyProps["textTransform"];
  textAlign?: TypographyProps["textAlign"];
  colSpan?: number;
  info?: string;
}

const orderHeaders: AdminTableHeader[] = [
  { label: "Image", textTransform: "capitalize", textAlign: "left" },
  { label: "Product name", textTransform: "capitalize", textAlign: "left" },
  {
    label: "Price",
    textTransform: "capitalize",
    textAlign: "left",
  },
  {
    label: "Quantity",
    textTransform: "capitalize",
    textAlign: "left",
  },
  {
    label: "User ID",
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

const OrderData = () => {
  const {
    data: orderData,
    loading: ordersLoading,
    refetch,
  } = useGet("/order/getall?page=1&sort=asc");
  const [page, setPage] = useState(1);

  useEffect(() => {
    refetch(`/orders?page=${page}&sort=asc`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Text fontWeight={"bold"} w={"100%"}>
        orders data
      </Text>
      <Divider />
      <TableContainer w={"100%"}>
        <Table w={"100%"} variant="simple">
          <Thead>
            <Tr>
              {orderHeaders.map((el) => {
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
            {ordersLoading ? (
              <Tr>
                {" "}
                <Td colSpan={orderHeaders.length}>
                  <Skeleton w={"100%"} h={"10"}></Skeleton>
                </Td>
              </Tr>
            ) : (
              orderData &&
              orderData?.map((order: orderProps, i: number) => {
                return (
                  <Tr key={i}>
                    <Td>
                      <Image
                        w={"10"}
                        height={"10"}
                        borderRadius={"lg"}
                        objectFit="cover"
                        src={
                          order?.image === "" ||
                          order?.image ===
                            "https://static1.hkrtcdn.com/hknext/static/media/common/lazyicon_new.webp"
                            ? "https://png.pngtree.com/background/20210710/original/pngtree-minimalist-gradient-medical-background-picture-image_966366.jpg"
                            : order.image
                        }
                        alt="Dan Abramov"
                      />
                    </Td>
                    <Td maxW={48} whiteSpace={"normal"}>
                      {order?.productName}
                    </Td>
                    <Td>₹. {order?.variantPrice * order?.quantity}</Td>
                    <Td>{order?.quantity}</Td>
                    <Td>{order?.userId}</Td>
                    <Td>
                      {order?.isAvailable ? (
                        <Badge colorScheme="green">In Stock</Badge>
                      ) : (
                        <Badge colorScheme="red">Not Available</Badge>
                      )}
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
          isDisabled={orderData && orderData?.length < 10}
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

export default OrderData;
