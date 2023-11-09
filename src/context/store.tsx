"use client";

import { CartItemProps } from "@/types";
import {
  createContext,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  cart: CartItemProps[];
  setCart: Dispatch<SetStateAction<CartItemProps[]>>;
  updateCart: (newCart: CartItemProps[]) => void;
}

const GlobalContext = createContext<ContextProps>({
  cart: [],
  setCart: (): CartItemProps[] => [],
  updateCart(newCart: CartItemProps[]) {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  let parsedCart: [] | CartItemProps[] = [];

  const [cart, setCart] = useState<[] | CartItemProps[]>([]);

  const updateCart = (newCart: CartItemProps[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let storedCart = localStorage.getItem("cart");

      if (storedCart) {
        parsedCart = JSON.parse(storedCart);
      }
      setCart(parsedCart);
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ cart, setCart, updateCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
