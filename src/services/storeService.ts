import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 0,
  headers: { "X-Custom-Header": "foobar" },
});

export async function getItems() {
  try {
    const request = await instance.get("/products");
    const items = await request.data;
    return items;
  } catch (err) {
    console.error("Error capturado", err);
  }
}

export async function getLatestItems() {
  const items = await getItems();

  return items.slice(0, 3);
}