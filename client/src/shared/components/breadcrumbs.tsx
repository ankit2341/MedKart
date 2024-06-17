import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BreadCrumbs = () => {
  return (
    <Breadcrumb color={"brand.font"} spacing='8px' separator={<FontAwesomeIcon size="xs" icon={faChevronRight} />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/products'>Products</BreadcrumbLink>
  </BreadcrumbItem>

</Breadcrumb>
  );
};
