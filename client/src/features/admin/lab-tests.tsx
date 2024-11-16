import { LabTestData } from "@/pages/book-lab-test";
import useGet from "@/shared/api/hooks/use-get";
import {
  Badge,
  Button,
  Center,
  Divider,
  HStack,
  Image,
  ListItem,
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
  UnorderedList,
} from "@chakra-ui/react";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface AdminTableHeader {
  label: string;
  textTransform?: TypographyProps["textTransform"];
  textAlign?: TypographyProps["textAlign"];
  colSpan?: number;
  info?: string;
}

const labtestHeaders: AdminTableHeader[] = [
  { label: "", textTransform: "capitalize", textAlign: "left" },
  { label: "Name", textTransform: "capitalize", textAlign: "left" },
  {
    label: "Price",
    textTransform: "capitalize",
    textAlign: "left",
  },
  {
    label: "original price",
    textTransform: "capitalize",
    textAlign: "left",
  },
  {
    label: "Features",
    textTransform: "capitalize",
    textAlign: "left",
  },
  // { label: "Actions", textTransform: "capitalize", textAlign: "left" },
];

const LabtestData = () => {
  const { data: labtestData, loading: labtestsLoading } =
    useGet("/labtest/getall");

  return (
    <>
      <Text fontWeight={"bold"} w={"100%"}>
        labtests data
      </Text>
      <Divider />
      <TableContainer w={"100%"}>
        <Table w={"100%"} variant="simple">
          <Thead>
            <Tr>
              {labtestHeaders.map((el) => {
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
            {labtestsLoading ? (
              <Tr>
                {" "}
                <Td colSpan={labtestHeaders.length}>
                  <Skeleton w={"100%"} h={"10"}></Skeleton>
                </Td>
              </Tr>
            ) : (
              labtestData &&
              labtestData?.map((labtest: LabTestData, i: number) => {
                return (
                  <Tr key={i}>
                    <Td>
                      <Center
                        w={"10"}
                        height={"10"}
                        border={"1px solid"}
                        mr={3}
                        borderRadius={"md"}
                        borderColor={"brand.primary"}
                        color={"brand.primary"}
                      >
                        <FontAwesomeIcon icon={faVirusCovid} />
                      </Center>
                    </Td>
                    <Td maxW={48} whiteSpace={"normal"}>
                      {labtest?.name}
                    </Td>
                    <Td>₹. {labtest?.price}</Td>
                    <Td>₹. {labtest?.originalPrice}</Td>

                    <Td>
                      <UnorderedList>
                        {labtest?.features?.map((el) => {
                          return <ListItem key={el}>{el}</ListItem>;
                        })}
                      </UnorderedList>
                    </Td>
                  </Tr>
                );
              })
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default LabtestData;
