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
  Center,
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
import { faFilterCircleXmark, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useState } from "react";

const Products = () => {
  const [sortBy] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const { data, refetch, loading } = useGet("/products?page=1&sort=asc");
  const [selectedValues, setSelectedValues] = useState({
    rating: ["0"],
    offer: ["0"],
    price: ["0"],
  }); // Default selected values

  const handleRatingChange = (values: string[]) => {
    setSelectedValues((prev) => ({
      ...prev,
      rating: values,
    }));
  };

  const handleOfferChange = (values: string[]) => {
    setSelectedValues((prev) => ({
      ...prev,
      offer: values,
    }));
  };

  const handlePriceChange = (values: string[]) => {
    setSelectedValues((prev) => ({
      ...prev,
      price: values,
    }));
  };

  const getMaxValues = (selectedValues: { [x: string]: string[] }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const maxValues: any = {};

    for (const key in selectedValues) {
      const numbers = selectedValues[key].map((value: string) => {
        // Remove any non-numeric characters and convert to a number
        const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
        return isNaN(numericValue) ? 0 : numericValue;
      });

      maxValues[key] = Math.max(...numbers);
    }

    return maxValues;
  };

  useEffect(() => {
    refetch(
      `/products?page=${page}&sort=${sortBy}&rating=${getMaxValues(selectedValues).rating}&price=${getMaxValues(selectedValues).price}&offer=${getMaxValues(selectedValues).offer}`,
    );
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, sortBy, selectedValues]);

  return (
    <VStack spacing={0} h={"fit-content"}>
      <Flex
        w={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={10}
        pt={10}
        pb={0}
      >
        <BreadCrumbs />
      </Flex>
      <SectionPageContainer
        isMobileSideContent={true}
        mainContent={
          <VStack spacing={4}>
            {loading && (
              <Center w={"100%"} h={"sm"}>
                <Spinner />
              </Center>
            )}
            <SimpleGrid w={"100%"} columns={[1, 2, 2, 3]} spacing={10}>
              {!loading &&
                data &&
                data.map((el: ProductProps) => {
                  return <ProductCard product={el} key={el._id} />;
                })}
            </SimpleGrid>
            {!loading && data && data.length === 0 && (
              <Text>No products found</Text>
            )}
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
                  <Button
                    title="Clear filters"
                    onClick={() => {
                      handleRatingChange(["0"]);
                      handleOfferChange(["0"]);
                      handlePriceChange(["0"]);
                    }}
                    bg={"brand.primary"}
                    color={"white"}
                    size={"xs"}
                  >
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
                      value={selectedValues.offer}
                      onChange={handleOfferChange}
                    >
                      <Stack spacing={2} pt={2} direction={"column"}>
                        <Checkbox value="10%">10% Off</Checkbox>
                        <Checkbox value="20%">20% Off</Checkbox>
                        <Checkbox value="30%">30% Off</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </Box>
                  <Box>
                    <Heading size="sm">Price</Heading>
                    <CheckboxGroup
                      colorScheme="cyan"
                      value={selectedValues.price}
                      onChange={handlePriceChange}
                    >
                      <Stack spacing={2} pt={2} direction={"column"}>
                        <Checkbox value="500">Greater than ₹ 500</Checkbox>
                        <Checkbox value="1000">Greater than ₹ 1000</Checkbox>
                        <Checkbox value="2000">Greater than ₹ 2000</Checkbox>
                        <Checkbox value="5000">Greater than ₹ 5000</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </Box>
                  <Box>
                    <Heading size="sm">Rating</Heading>
                    <CheckboxGroup
                      colorScheme="cyan"
                      value={selectedValues.rating}
                      onChange={handleRatingChange}
                    >
                      <Stack
                        spacing={2}
                        pt={2}
                        direction={"column"}
                        color={"brand.primary"}
                      >
                        <Checkbox value={"5"}>
                          <HStack>
                            <Text color={"brand.font"}>5</Text>
                            <FontAwesomeIcon icon={faStar} />
                          </HStack>
                        </Checkbox>
                        <Checkbox value={"4"}>
                          <HStack>
                            <Text color={"brand.font"}>4</Text>
                            <FontAwesomeIcon icon={faStar} />
                          </HStack>
                        </Checkbox>
                        <Checkbox value={"3"}>
                          <HStack>
                            <Text color={"brand.font"}>3</Text>
                            <FontAwesomeIcon icon={faStar} />
                          </HStack>
                        </Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        }
        sidePosition="left"
      />
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
          isDisabled={data && data.length < 10}
          bg={"brand.primary"}
          color={"white"}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </HStack>
    </VStack>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default Products;
