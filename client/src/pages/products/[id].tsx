import { AppMainLayout } from "@/shared/components/app-layout";
import { BreadCrumbs } from "@/shared/components/breadcrumbs";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  faCartPlus,
  faChevronLeft,
  faChevronRight,
  faHeartCirclePlus,
  faStar,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";

const ProductIndividualPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const isMobile = useIsMobile();
  const isTablet=useIsTablet();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://d1s24u4ln0wd0i.cloudfront.net/1688202688649fedc050fd2.png",
    "https://bit.ly/kent-c-dodds",
    "https://bit.ly/dan-abramov",
    "https://bit.ly/ryan-florence",
    "https://bit.ly/prosper-baba",
  ];

  console.log(id);
  return (
    <VStack w={"100%"} p={isMobile ? 4 : 10} spacing={4}>
      <Flex w={"100%"} align={"center"} justifyContent={"left"}>
        <BreadCrumbs />
      </Flex>
      <Flex
        w={"100%"}
        gap={isMobile||isTablet ? "20px" : undefined}
        flex={1}
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <Box w={{ base: "100%", md: "100%", lg: "50%" }} p={2}>
          <VStack spacing={4}>
            <HStack
              w={"100%"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Box
                cursor={"pointer"}
                p={4}
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1,
                  )
                }
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Box>
              <Image
                boxSize={{ base: "200px", sm: "300px", md: "450px" }}
                borderRadius={"lg"}
                objectFit="cover"
                src={images[currentIndex]}
                alt="Dan Abramov"
              />
              <Box
                cursor={"pointer"}
                p={4}
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === images.length ? 0 : prev + 1,
                  )
                }
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  onClick={() => setCurrentIndex((prev) => prev + 1)}
                />
              </Box>
            </HStack>
            <HStack spacing={2} wrap={"wrap"} justifyContent={"center"}>
              {images
                ?.map((el, index) => ({ el, index }))
                ?.filter((el, index) => index !== currentIndex)
                .map((el, index) => (
                  <Image
                    key={index}
                    border={"1px solid"}
                    borderColor={"gray.300"}
                    onClick={() => setCurrentIndex(el.index)}
                    boxSize={{ base: "50px", sm: "100px", md: "150px" }}
                    borderRadius={"lg"}
                    objectFit="cover"
                    src={el.el}
                    alt="Dan Abramov"
                  />
                ))}
            </HStack>
          </VStack>
        </Box>
        <VStack
          w={{ base: "100%", md: "100%", lg: "50%" }}
          align={"flex-start"}
          justify={"left"}
          spacing={4}
          p={2}
        >
          <Flex
            w={"100%"}
            align={"flex-start"}
            justifyContent={"space-between"}
          >
            <Heading fontSize={"large"}>Riddhish Iron Capsule</Heading>
            <Tag size={"sm"} variant="subtle" colorScheme="teal">
              <TagLabel>Save 20% Now</TagLabel>
            </Tag>
          </Flex>

          <HStack>
            <Text>MRP. ₹. 100</Text>
            <Text textDecoration="line-through">₹. 150</Text>
          </HStack>
          <Tag size={"md"} variant="subtle" colorScheme="teal">
            <TagLabel>
              4.1 <FontAwesomeIcon icon={faStar} />
            </TagLabel>
          </Tag>
          <Badge px={2} size={"xs"} variant="subtle" colorScheme="green">
            In stock
          </Badge>

          <Divider />
          <HStack>
            <Center
              width="10"
              height={10}
              borderRadius="lg"
              border="1px solid"
              color="brand.primary"
              borderColor="brand.primary"
            >
              <FontAwesomeIcon beat icon={faHeartCirclePlus} />
            </Center>
            <Button
              ml={2}
              bg="brand.primary"
              color="white"
              borderRadius="lg"
              width="80%"
              height={10}
            >
              Add to Cart
              <FontAwesomeIcon
                style={{ paddingLeft: "10px" }}
                icon={faCartPlus}
              />
            </Button>
          </HStack>

          <Divider />

          <Text w={"100%"} textAlign={"justify"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            minima cupiditate, aliquam, exercitationem magni officia totam ad
            ullam, quidem quia unde reprehenderit iste eos minus molestias quae
            cum suscipit quibusdam?
          </Text>
          <Divider />
          <Text w={"100%"} textAlign={"justify"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
          </Text>
          <Divider />
          <Text w={"100%"} textAlign={"justify"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            minima cupiditate
          </Text>
          <Divider />
          <HStack
            flexDir={isMobile ? "column" : "row"}
            w={"100%"}
            p={2}
            border={"2px dashed"}
            borderColor={"gray.300"}
            borderRadius={"md"}
            bg={"brand.background"}
          >
            <Center
              width="10"
              height={10}
              borderRadius="full"
              border="1px solid"
              color="brand.primary"
              borderColor="brand.primary"
            >
              <FontAwesomeIcon icon={faTags} />
            </Center>
            <Text>Check Applicable Offers Now!</Text>
            <Button
              border={"1px solid"}
              borderColor={"brand.primary"}
              variant={"outline"}
              fontWeight={"thin"}
              color={"brand.font"}
              size={"sm"}
            >
              Check now
            </Button>
          </HStack>

          <HStack
            w={"100%"}
            p={2}
            border={"2px dashed"}
            borderColor={"gray.300"}
            borderRadius={"md"}
            bg={"brand.background"}
          >
            <Input
              size={"sm"}
              focusBorderColor="brand.primary"
              placeholder="Apply Promo Code"
            />
            <Button
              border={"1px solid"}
              borderColor={"brand.primary"}
              variant={"outline"}
              fontWeight={"thin"}
              color={"brand.font"}
              size={"sm"}
            >
              Apply
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </VStack>
  );
};

ProductIndividualPage.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default ProductIndividualPage;
