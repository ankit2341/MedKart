import { ReactElement } from "react";
import { AppMainLayout } from "@/shared/app-layout";

const Home = () => {
  return <>Home</>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppMainLayout>{page}</AppMainLayout>;
};

export default Home;
