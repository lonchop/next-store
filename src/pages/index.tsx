import Layout from "@/components/layout";
import Product from "@/components/product";
import Carousel from "@/components/carousel";
import { useQuery } from "react-query";
import { getItems } from "@/services/storeService";
import { Items } from "@/types";
import { useAppContext } from "@/components/stateWrapper";

export default function Home() {
  const cart = useAppContext();

  const { data: items } = useQuery<Items[], Error>("products", getItems);

  return (
    <Layout title="Home">
      <div className="relative mb-[30px] flex h-full w-full items-end justify-center">
        <Carousel />
      </div>

      <h3
        className={`mb-[10px] text-[2rem] font-medium ${
          cart.darkMode ? "text-white" : "text-black"
        }`}
      >
        Latest Products
      </h3>
      <div className="mb-[30px] grid-cols-none gap-x-[40px] lg:grid lg:grid-cols-3">
        {items &&
          items
            .slice(0, 3)
            .map((item) => <Product key={item.id} item={item} showAs="item" />)}
      </div>
    </Layout>
  );
}
