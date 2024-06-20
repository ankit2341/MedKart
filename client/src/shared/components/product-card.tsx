// import { useTheme } from "@/context/theme-context";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  faCartPlus,
  faHeartCirclePlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = ({ product }: { product?: string }) => {
  return (
    <Card
      key={product || "1"}
      width="100%"
      height={"fit-content"}
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
        justifyContent="center"
      >
        <Image
          boxSize="fit-content"
          borderRadius={"lg"}
          objectFit="cover"
          src="https://d1s24u4ln0wd0i.cloudfront.net/1688202688649fedc050fd2.png"
          alt="Dan Abramov"
        />
        <Flex
          pos="absolute"
          top={2}
          right={2}
          borderRadius="md"
          align="center"
          justify="center"
          bg="brand.backgroundDark"
          color="brand.background"
          px={2}
        >
          <Text pr={1} fontSize="medium">
            4.1
          </Text>

          <FontAwesomeIcon icon={faStar} size="xs" />
        </Flex>
      </CardHeader>
      <CardBody pt={2}>
        <VStack>
          <Text fontSize="larger" fontWeight="500" noOfLines={3}>
            Riddhish Iron Capsule
          </Text>
          <HStack>
            <Text>₹. 100</Text>
            <Text textDecoration="line-through">₹. 150</Text>
            <Flex
              borderRadius="md"
              align="center"
              justify="center"
              bg="brand.backgroundDark"
              color="brand.background"
              px={2}
            >
              <Text pr={1} fontSize="small">
                50% off
              </Text>
            </Flex>
          </HStack>
        </VStack>
      </CardBody>
      <CardFooter>
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
          <FontAwesomeIcon style={{ paddingLeft: "10px" }} icon={faCartPlus} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
