import axios from "axios";
import { useQuery } from "react-query";

const instance = axios.create({
  // baseURL: "https://fakestoreapi.com",
  baseURL: "https://peticiones.online/api",
  timeout: 0,
  headers: { "X-Custom-Header": "foobar" },
});

export async function getItems() {
  try {
    const request = await instance.get("/products");
    const items = await request.data;
    return items.results;
  } catch (err) {
    console.error("Error capturado", err);
  }
}

