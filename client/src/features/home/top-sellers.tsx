import useGet from "@/shared/api/hooks/use-get";
import ProductCard from "@/shared/components/product-card";
import useIsMobile from "@/shared/hooks/use-is-mobile";
import useIsTablet from "@/shared/hooks/use-is-tablet";
import { UnderLineAnimation } from "@/shared/icons";
import { ProductProps } from "@/types";
import { responsive } from "@/types/carousel";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";

const TopSellers = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const { data, loading } = useGet("/products?page=1&sort=asc&rating=4");

  return (
    <>
      <Box width="100%" pos="relative">
        <Heading
          width="100%"
          px={isMobile ? "4" : "10"}
          size="md"
          textAlign="left"
        >
          Top Sellers
        </Heading>
        {!isMobile&&<UnderLineAnimation
          style={{ position: "absolute", top: 1, left: 70 }}
          id="checkedcircleanimated"
        />}
      </Box>
      <Box
        px={isMobile ? "4" : "8"}
        width="100%"
        height="fit-content"
        bg="brand.background"
      >
        <Carousel
          responsive={responsive}
          autoPlay={!isMobile}
          infinite
          autoPlaySpeed={isMobile ? undefined : 2000}
          itemClass="carousel-item-padding"
          swipeable={isMobile || isTablet ? true : false}
        >
          {loading ? (
            <Spinner />
          ) : (
            (data || []).map((el: ProductProps) => (
              <ProductCard product={el} key={el._id} />
            ))
          )}
        </Carousel>
      </Box>
    </>
  );
};

export default TopSellers;
