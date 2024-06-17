import { AppMainLayout } from "@/shared/components/app-layout";
import { BreadCrumbs } from "@/shared/components/breadcrumbs";
import ProductCard from "@/shared/components/product-card";
import { SectionPageContainer } from "@/shared/components/side-container";
import { Box, Button, Card, CardBody, CardHeader, Checkbox, CheckboxGroup,  Flex,  HStack,  Heading, SimpleGrid, Stack, StackDivider,  Text,  VStack } from "@chakra-ui/react";
import { faFilterCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useState } from "react";


const Products = () => {
  const [sortBy,setSortBy]=useState<"ASC"|"DESC">("ASC");

  return (
   <VStack spacing={0}>
      <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"} px={10} pt={10} pb={0}>
    <BreadCrumbs/>
    <HStack><Text>Sort By</Text>
    <Button onClick={()=>setSortBy(sortBy==="ASC"?"DESC":"ASC")} bg={"brand.primary"} color={"white"} fontWeight={"thin"} size={"sm"}>{sortBy==="ASC"? "Low to High":"High to Low"}</Button>
    </HStack>
    </Flex>
<SectionPageContainer isMobileSideContent={true} mainContent={<VStack>
  <SimpleGrid columns={[1,2,2,3]} spacing={10}>
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
            return (
           
             <ProductCard key={el}/>
     
            );
          })}
 
 
</SimpleGrid>
</VStack>} sideContent={<Box w={"100%"} pr={4}><Card boxShadow={"none"} w={"100%"} border={"1px solid"} borderColor={"gray.300"} color={"brand.font"} bg={"brand.background"}>
  <CardHeader>
    <HStack justifyContent={"space-between"}>
    <Heading size='md'>Product Filters</Heading>
    <Button bg={"brand.primary"} color={"white"} size={"xs"}>
      <FontAwesomeIcon icon={faFilterCircleXmark} />
    </Button>
    </HStack>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider border={"1px solid"} borderColor={"gray.300"} />} spacing='4'>
      <Box>
        <Heading size='sm' >
          Offers
        </Heading>
        <CheckboxGroup  colorScheme="cyan" defaultValue={['naruto', 'kakashi']}>
  <Stack spacing={2} pt={2} direction={"column"}>
    <Checkbox value='naruto'>Naruto</Checkbox>
    <Checkbox value='sasuke'>Sasuke</Checkbox>
    <Checkbox value='kakashi'>Kakashi</Checkbox>
  </Stack>
</CheckboxGroup>
      </Box>
      <Box>
        <Heading size='sm' >
          Price
        </Heading>
         <CheckboxGroup  colorScheme="cyan" defaultValue={['naruto', 'kakashi']}>
  <Stack spacing={2} pt={2} direction={"column"}>
    <Checkbox value='naruto'>Naruto</Checkbox>
    <Checkbox value='sasuke'>Sasuke</Checkbox>
    <Checkbox value='kakashi'>Kakashi</Checkbox>
  </Stack>
</CheckboxGroup>
      </Box>
      <Box>
        <Heading size='sm' >
          Rating
        </Heading>
        <CheckboxGroup  colorScheme="cyan" defaultValue={['naruto', 'kakashi']}>
  <Stack spacing={2} pt={2} direction={"column"}>
    <Checkbox value='naruto'>Naruto</Checkbox>
    <Checkbox value='sasuke'>Sasuke</Checkbox>
    <Checkbox value='kakashi'>Kakashi</Checkbox>
  </Stack>
</CheckboxGroup>
      </Box>
    </Stack>
  </CardBody>
</Card></Box>} sidePosition="left" />
   </VStack>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};


export default Products;