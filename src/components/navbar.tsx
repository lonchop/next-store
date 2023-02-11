import Link from "next/link";
import { useAppContext } from "@/components/stateWrapper";
import React from "react";
import { Links } from "@/types";
import { TiShoppingCart } from "react-icons/ti";

const links: Links[] = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Store",
    route: "/store",
  },
  {
    label: "FAQ",
    route: "/faq",
  },
];

export default function Navbar() {
  const cart = useAppContext();

  function handleClickCart(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    cart.handleCart();
  }
  return (
    <div className="mx-auto mt-[30px] mb-[30px] flex h-[80px] w-[90%] justify-center bg-white">
      <nav className="fixed z-[1] flex w-[90%] gap-[20px]">
        <div className="flex flex-col items-center justify-center">
          <h3 className="select-none text-[1.4rem]">Mode</h3>
          <input
            type="checkbox"
            className=" h-[20px] w-[40px] cursor-pointer appearance-none rounded-full bg-gray-200  transition-all duration-300 before:ml-0.5 before:inline-block before:h-[20px] before:w-[20px] before:rounded-full before:bg-black checked:bg-primary-1 checked:before:translate-x-full focus:outline-none"
          />
        </div>

        <ul className="flex w-[100%] items-center justify-center rounded-[20px] bg-white text-[1.8rem] font-medium shadow-nav-shadow lg:gap-4">
          {links.map((link) => (
            <li
              className="rounded-[10px] p-[5px] hover:bg-primary-1 lg:p-[10px]"
              key={link.route}
            >
              <Link
                className="select-none p-[5px] lg:p-[10px]"
                href={link.route}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex w-[80px] items-center justify-center rounded-[20px] border-[2px] border-primary-1 bg-white shadow-nav-shadow">
          <Link href="#" onClick={handleClickCart}>
            <div className="flex h-[80px] w-[80px] select-none items-center justify-center">
              <div className="absolute right-[-5px] top-[-5px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary-1">
                <span className="text-[1.4rem] font-medium text-white">
                  {cart.getNumberOfItems()}
                </span>
              </div>
              <TiShoppingCart className="h-[40px] w-[40px] text-primary-1" />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
