import { AppMainLayout } from "@/shared/components/app-layout";
import SideContainer from "@/shared/components/side-container";
import { ReactElement } from "react";


const Products = () => {
  return (
    <>
    <SideContainer sideContent={<></>} mainContent={<></>} />
    </>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default Products;