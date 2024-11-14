import useGet from "@/shared/api/hooks/use-get";
import usePost from "@/shared/api/hooks/use-post";
import { AppMainLayout } from "@/shared/components/app-layout";
import { BreadCrumbs } from "@/shared/components/breadcrumbs";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import { showToast } from "@/shared/shared-toast";
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
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  faCartPlus,
  faChevronLeft,
  faChevronRight,
  faStar,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";

const ProductIndividualPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, refetch } = useGet(`/products/${id}`);
  const { post, loading } = usePost("/cart/post");

  const images = [
    `${data?.image !== "" ? data?.image : "https://d1s24u4ln0wd0i.cloudfront.net/1688202688649fedc050fd2.png"}`,
    "https://picsum.photos/id/55/400?random=1",
    "https://picsum.photos/id/80/400?random=1",
    "https://picsum.photos/id/81/400?random=1",
    "https://picsum.photos/id/82/400?random=1",
  ];

  useEffect(() => {
    refetch(`/products/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <VStack w={"100%"} p={isMobile ? 4 : 10} spacing={4}>
      <Flex w={"100%"} align={"center"} justifyContent={"left"}>
        <BreadCrumbs />
      </Flex>
      <Flex
        w={"100%"}
        gap={isMobile || isTablet ? "20px" : undefined}
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
                    prev === images.length - 1 ? 0 : prev + 1,
                  )
                }
              >
                <FontAwesomeIcon icon={faChevronRight} />
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
            <Heading fontSize={"large"}>{data?.productName}</Heading>
            <Tag size={"sm"} variant="subtle" colorScheme="teal">
              <TagLabel>Save {data?.variantOffer}% Now</TagLabel>
            </Tag>
          </Flex>

          <HStack>
            <Text>MRP. ₹. {data?.variantPrice}</Text>
            <Text textDecoration="line-through">
              ₹. {data?.variantOldPrice}
            </Text>
          </HStack>
          <Tag size={"md"} variant="subtle" colorScheme="teal">
            <TagLabel>
              {data?.rating} <FontAwesomeIcon icon={faStar} />
            </TagLabel>
          </Tag>
          <Badge px={2} size={"xs"} variant="subtle" colorScheme="green">
            {data?.isAvailable ? "In stock" : "Unavailable"}
          </Badge>

          <Divider />
          <HStack>
            <Button
              ml={2}
              bg="brand.primary"
              color="white"
              isLoading={loading}
              onClick={async () => {
                const res = await post({
                  productId: data?._id,
                  image: data?.image,
                  productName: data?.productName,
                  variantPrice: data?.variantPrice,
                  isAvailable: data?.isAvailable,
                  quantity: 1,
                });
                showToast("info", res?.Messsage);
              }}
              borderRadius="lg"
              width="100%"
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
            {data?.subtext
              ? data?.subtext
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}
          </Text>
          <Divider />
          <Text w={"100%"} textAlign={"justify"}>
            {data?.maker
              ? data?.maker
              : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          </Text>
          <Divider />
          <Text w={"100%"} textAlign={"justify"}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
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
              onClick={() => router.push("/offers")}
              fontWeight={"thin"}
              color={"brand.font"}
              size={"sm"}
            >
              Check now
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
