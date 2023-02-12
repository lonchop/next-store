import { createContext, useContext, useState } from "react";
import { Context, Item } from "@/types";
import useLocalStorage from "@/hooks/useLocalStorage";

const AppContext = createContext<Context>({
  darkMode: false,
  toggleDarkMode: () => {},
  isOpen: true,
  items: [],
  openCart: () => {},
  closeCart: () => {},
  handleCart: () => {},
  addItemToCart: () => {},
  removeItemToCart: () => {},
  getNumberOfItems: () => 0,
});

// const [items, setItems] = useState<Array<Item>>([]);

export default function StateWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    console.log(darkMode);
  }

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [items, setItems] = useLocalStorage<string, Array<Item>>("items", []);

  function handleOpenCart() {
    setIsOpen(true);
  }

  function handleCloseCart() {
    setIsOpen(false);
  }

  function handleCartChanged() {
    setIsOpen(!isOpen);
  }

  function handleAddItemToCart(item: Item) {
    const temp = [...items];
    const found = temp.find((i) => i.id === item.id);
    if (found) {
      found.qty++;
    } else {
      item.qty = 1;
      temp.push(item);
    }
    setItems([...temp]);
  }

  function handleRemoveItemToCart(item: Item) {
    const temp = [...items];
    const found = temp.find((i) => i.id === item.id);
    const indexDos = temp.indexOf(item);
    if (found) {
      if (found.qty <= 1) {
        temp.splice(indexDos, 1);
      } else {
        found.qty--;
      }
    }
    setItems([...temp]);
  }

  function getNumberOfItems() {
    const total = items.reduce((acc, item) => {
      return (acc += item.qty);
    }, 0);
    return total;
  }

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        items,
        isOpen,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        handleCart: handleCartChanged,
        addItemToCart: handleAddItemToCart,
        removeItemToCart: handleRemoveItemToCart,
        getNumberOfItems: getNumberOfItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
