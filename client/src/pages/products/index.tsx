import useGet from "@/shared/api/hooks/use-get";
import { AppMainLayout } from "@/shared/components/app-layout";
import { BreadCrumbs } from "@/shared/components/breadcrumbs";
import ProductCard from "@/shared/components/product-card";
import { SectionPageContainer } from "@/shared/components/side-container";
import { ProductProps } from "@/types";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faFilterCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useRef, useState } from "react";

const Products = () => {
  const [sortBy, setSortBy] = useState<"ASC" | "DESC">("ASC");
  const [page,setPage]=useState(1);
  const { data, loading, refetch } = useGet('/products?page=1&sort=asc');
  const productsContainerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
  
    refetch(`/products?page=${page}&sort=${sortBy}`);
    if (productsContainerRef.current) {
      productsContainerRef.current.scrollTop = 0;
    }
  }, [page, sortBy, refetch]);

  console.log(data);

  return (
    <VStack spacing={0}   h={"fit-content"}>
      <Flex
        w={"100%"}
      
        alignItems={"center"}
        justifyContent={"space-between"}
        px={10}
        pt={10}
        pb={0}
      >
        <BreadCrumbs />
        <HStack>
          <Text>Sort By</Text>
          <Button
            onClick={() => setSortBy(sortBy === "ASC" ? "DESC" : "ASC")}
            bg={"brand.primary"}
            color={"white"}
            fontWeight={"thin"}
            size={"sm"}
          >
            {sortBy === "ASC" ? "Low to High" : "High to Low"}
          </Button>
        </HStack>
      </Flex>
      <SectionPageContainer
        isMobileSideContent={true}
        mainContent={
          <VStack spacing={4}>
            <SimpleGrid w={"100%"} columns={[1, 2, 2, 3]} spacing={10}>
              {loading&&
              
                <Spinner/>
            
            }
              {!loading&&data&&data.map((el:ProductProps) => {
                return <ProductCard product={el} key={el._id} />;
              })}
            </SimpleGrid>
          </VStack>
        }
        sideContent={
          <Box w={"100%"} pr={4}>
            <Card
              boxShadow={"none"}
              w={"100%"}
              border={"1px solid"}
              borderColor={"gray.300"}
              color={"brand.font"}
              bg={"brand.background"}
            >
              <CardHeader>
                <HStack justifyContent={"space-between"}>
                  <Heading size="md">Product Filters</Heading>
                  <Button bg={"brand.primary"} color={"white"} size={"xs"}>
                    <FontAwesomeIcon icon={faFilterCircleXmark} />
                  </Button>
                </HStack>
              </CardHeader>

              <CardBody>
                <Stack
                  divider={
                    <StackDivider
                      border={"1px solid"}
                      borderColor={"gray.300"}
                    />
                  }
                  spacing="4"
                >
                  <Box>
                    <Heading size="sm">Offers</Heading>
                    <CheckboxGroup
                      colorScheme="cyan"
                      defaultValue={["naruto", "kakashi"]}
                    >
                      <Stack spacing={2} pt={2} direction={"column"}>
                        <Checkbox value="naruto">Naruto</Checkbox>
                        <Checkbox value="sasuke">Sasuke</Checkbox>
                        <Checkbox value="kakashi">Kakashi</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </Box>
                  <Box>
                    <Heading size="sm">Price</Heading>
                    <CheckboxGroup
                      colorScheme="cyan"
                      defaultValue={["naruto", "kakashi"]}
                    >
                      <Stack spacing={2} pt={2} direction={"column"}>
                        <Checkbox value="naruto">Naruto</Checkbox>
                        <Checkbox value="sasuke">Sasuke</Checkbox>
                        <Checkbox value="kakashi">Kakashi</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </Box>
                  <Box>
                    <Heading size="sm">Rating</Heading>
                    <CheckboxGroup
                      colorScheme="cyan"
                      defaultValue={["naruto", "kakashi"]}
                    >
                      <Stack spacing={2} pt={2} direction={"column"}>
                        <Checkbox value="naruto">Naruto</Checkbox>
                        <Checkbox value="sasuke">Sasuke</Checkbox>
                        <Checkbox value="kakashi">Kakashi</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        }
        sidePosition="left"
      />  <HStack w={"100%"} alignItems={"center"} justifyContent={"center"}>
      <Button isDisabled={page===1} size={"sm"} bg={"brand.primary"} color={"white"} onClick={()=>setPage(prev=>prev-1)}>Prev</Button>
      <Text px={1} color={"brand.font"}>{page}</Text>
      <Button size={"sm"} isDisabled={data&&data.length<10} bg={"brand.primary"} color={"white"} onClick={()=>setPage(prev=>prev+1)}>Next</Button>
    </HStack>
    </VStack>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default Products;
