import Layout from "@/components/layout";
import Product from "@/components/product";
import ShoppingCart from "@/components/shoppingCart";
import { getItemData, getPathsFromTitle } from "@/lib/utils";
import {Items} from "@/types"

interface Props {
  productInfo: Items;
}

interface Props {
  productInfo: {
    data: Item;
  };
}

interface Params {
  id: string[];
}

export default function ProductPage({ productInfo } : Props) {
  return (
    <Layout title={productInfo.data.title as string}>
      <Product item={productInfo.data} showAs="Page" />
      <ShoppingCart />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromTitle();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params } : {params: Params}) {
  const id = params.id;
  const productInfo = await getItemData(id) as Items;

  return {
    props: {
      productInfo,
    },
  };
}
