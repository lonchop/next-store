import Layout from "@/components/layout";
import Product from "@/components/product";
import { getItems } from "@/services/storeService";
import ShoppingCart from "@/components/shoppingCart";

interface Props {
  items: Array<{
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
  }>;
}

export default function Index({ items }: Props) {
  return (
    <Layout title="Store">
      <div className="mb-[30px] grid grid-cols-3 gap-[40px]">
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}
