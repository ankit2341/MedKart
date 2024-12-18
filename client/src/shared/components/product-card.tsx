// import { useTheme } from "@/context/theme-context";
import { ProductProps } from "@/types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import usePost from "../api/hooks/use-post";
import { showToast } from "../shared-toast";
import { useTheme } from "@/context/theme-context";

const ProductCard = ({
  product,
  onClose,
}: {
  product?: ProductProps;
  onClose?: () => void;
}) => {
  const router = useRouter();
  const { theme } = useTheme();
  const { post, loading } = usePost("/cart/post");
  if (!product) {
    return <Card></Card>;
  }

  return (
    <Card
      key={product?._id}
      width="100%"
      height={"100%"}
      cursor={"pointer"}
      onClick={() => {
        if (onClose) {
          onClose();
        }
      }}
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray.300"
      borderRadius={"lg"}
      background={
        "linear-gradient(207deg, rgba(0,206,209,1) 0%, rgba(19,210,212,1) 30%, rgba(255,255,255,1) 30%)"
      }
    >
      <CardHeader
        pt={8}
        pb={2}
        display="flex"
        alignItems="center"
        onClick={() => router.push(`/products/${product?._id}`)}
        justifyContent="center"
      >
        <Image
          boxSize="2xs"
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
        <Flex
          pos="absolute"
          top={2}
          right={2}
          borderRadius="md"
          align="center"
          justify="center"
          bg={theme === "dark" ? "gray.300" : "brand.backgroundDark"}
          color="brand.background"
          px={2}
        >
          <Text pr={1} fontSize="medium">
            {product?.rating}
          </Text>

          <FontAwesomeIcon icon={faStar} size="xs" />
        </Flex>
      </CardHeader>
      <CardBody pt={2} onClick={() => router.push(`/products/${product?._id}`)}>
        <VStack
          h={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
            fontSize="medium"
            textAlign={"center"}
            fontWeight="500"
            noOfLines={3}
          >
            {product.productName}
          </Text>
          <HStack>
            <Text>₹. {product?.variantPrice}</Text>
            <Text textDecoration="line-through">
              ₹. {product?.variantOldPrice}
            </Text>
            <Flex
              borderRadius="md"
              align="center"
              justify="center"
              bg={theme === "dark" ? "brand.primary" : "brand.backgroundDark"}
              color="brand.background"
              px={2}
            >
              <Text pr={1} fontSize="small">
                {product?.variantOffer}% off
              </Text>
            </Flex>
          </HStack>
        </VStack>
      </CardBody>
      <CardFooter>
        <Button
          ml={2}
          bg="brand.primary"
          color="white"
          borderRadius="lg"
          width="100%"
          isLoading={loading}
          zIndex={1}
          onClick={async () => {
            const res = await post({
              productId: product?._id,
              image: product?.image,
              productName: product?.productName,
              variantPrice: product?.variantPrice,
              isAvailable: product?.isAvailable,
              quantity: 1,
            });
            showToast("info", res?.Message);
          }}
          height={10}
        >
          Add to Cart
          <FontAwesomeIcon style={{ paddingLeft: "10px" }} icon={faCartPlus} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
