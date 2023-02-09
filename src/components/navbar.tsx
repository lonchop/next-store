import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/components/stateWrapper";
import mbCart from "../.././public/img/mb-cart.svg";
import React from "react";
import { Links } from "@/types";

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
      <nav className="fixed z-[1] flex w-[90%] gap-[20px] ">
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
            <div className="flex h-[80px] w-[80px] items-center justify-center select-none">
              <div className="absolute right-[-5px] top-[-5px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary-1">
                <span className="text-[1.4rem] font-medium text-white">
                  {cart.getNumberOfItems()}
                </span>
              </div>
              <Image height={40} width={40} src={mbCart} alt="shopping cart" />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
