import Link from "next/link";
import { useAppContext } from "@/context/stateWrapper";
import React from "react";
import { Links } from "@/types";
import { TiShoppingCart } from "react-icons/ti";
import ToggleButton from "@/components/toggleButton";

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
    <div
      className={`mx-auto mb-[60px] flex h-[80px] w-[90%] justify-center pt-[30px] ${
        cart.darkMode
          ? "bg-black transition-all duration-300 ease-in-out "
          : "bg-white transition-all duration-300 ease-in-out "
      } `}
    >
      <nav className="fixed z-[1] flex w-[90%] gap-[20px]">
        {/* Toggle Button */}
        <ToggleButton />

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
