import { getItems } from "@/services/storeService";
import {Items} from "@/types"

export async function getPathsFromTitle() {
  const items: Items[] = await getItems();

  return items.map((item) => {
    return {
      params: {
        id: convertToPath(item.name),
      },
    };
  });
}

export async function getItemData(id: string) {
  const items: Items[] = await getItems();
  const product = items.find((item) => convertToPath(item.name) === id);
  return {
    id,
    data: product,
  };
}

export function convertToPath(name: string) {
  return name.toLowerCase().replace(/\s/g, "-");
}
