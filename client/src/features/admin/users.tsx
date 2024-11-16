import useGet from "@/shared/api/hooks/use-get";
import { UserData } from "@/shared/userdata-context";
import {
  Badge,
  Button,
  Divider,
  HStack,
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
import { useEffect, useState } from "react";
import AdminEdit from "./admin-edit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

interface AdminTableHeader {
  label: string;
  textTransform?: TypographyProps["textTransform"];
  textAlign?: TypographyProps["textAlign"];
  colSpan?: number;
  info?: string;
}

const userHeaders: AdminTableHeader[] = [
  { label: "Username", textTransform: "capitalize", textAlign: "left" },
  { label: "Email", textTransform: "capitalize", textAlign: "left" },
  {
    label: "Phone number",
    textTransform: "capitalize",
    textAlign: "right",
  },
  {
    label: "Role",
    textTransform: "capitalize",
    textAlign: "left",
  },
  { label: "Actions", textTransform: "capitalize", textAlign: "left" },
];

const UsersData = () => {
  const {
    data: usersData,
    loading: usersLoading,
    refetch,
  } = useGet("/users?page=1");
  const [page, setPage] = useState(1);

  useEffect(() => {
    refetch(`/users/page=${page}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Text fontWeight={"bold"} w={"100%"}>
        Users data
      </Text>
      <Divider />
      <TableContainer w={"100%"}>
        <Table w={"100%"} variant="simple">
          <Thead>
            <Tr>
              {userHeaders.map((el) => {
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
            {usersLoading ? (
              <Tr>
                {" "}
                <Td colSpan={userHeaders.length}>
                  <Skeleton w={"100%"} h={"10"}></Skeleton>
                </Td>
              </Tr>
            ) : (
              usersData &&
              usersData?.map((user: UserData, i: number) => {
                return (
                  <Tr key={i}>
                    <Td>{user?.username}</Td>
                    <Td>{user?.email}</Td>
                    <Td textAlign={"right"}>{user?.phoneNumber}</Td>
                    <Td>
                      {user?.role === "PLATFORM_ADMIN" ? (
                        <Badge colorScheme="green">Platform Admin</Badge>
                      ) : (
                        <Badge colorScheme="blue">Standard User</Badge>
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
                          <AdminEdit refetch={refetch} UserData={user} />
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
          isDisabled={usersData && usersData?.length < 10}
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

export default UsersData;
