import Link from "next/link";
import Image from "next/image";
import { convertToPath } from "@/lib/utils";
import { useAppContext } from "@/context/stateWrapper";
import ButtonAddCart from "@/components/buttonAddCart";
import ButtonRemoveCart from "./buttonRemoveCart";
import { Item } from "@/types";

export default function Product({
  item,
  qty = 0,
  showAs,
}: {
  item: Item;
  qty?: number;
  showAs: string;
}) {
  const cart = useAppContext();

  function addToCart() {
    cart.addItemToCart(item);
  }

  function removeToCart() {
    cart.removeItemToCart(item);
  }

  function getSubtotal() {
    return qty * item.price;
  }

  switch (showAs) {
    case "Page":
      return (
        <div
          className={`flex h-full w-full flex-wrap ${
            cart.darkMode
              ? "bg-black text-white transition-all duration-300 ease-in-out "
              : "bg-white text-black transition-all duration-300 ease-in-out "
          }  lg:px-[50px]`}
        >
          <div className="hidden select-none justify-center lg:flex lg:h-screen lg:w-[50%] lg:items-start">
            <Image
              className="lg:h-[380px] lg:w-[380px]"
              src={item.image}
              alt="Picture of the author"
              width={600}
              height={600}
            />
          </div>

          <div className="flex h-full w-full flex-col justify-center gap-[15px] lg:w-[50%]">
            <div className="mx-[20px] flex justify-center lg:mx-0 lg:justify-start">
              <h2 className="text-center text-[2.0rem] font-semibold lg:text-left lg:text-[3.2rem] lg:font-normal">
                {item.name}
              </h2>
            </div>
            <div className="flex w-full select-none justify-center lg:hidden">
              <Image
                className="h-[250px] w-[250px]"
                src={item.image}
                alt="Picture of the author"
                width={600}
                height={600}
              />
            </div>
            <div className="mx-[20px] flex flex-col items-center justify-center lg:mx-0 lg:items-start lg:justify-start">
              <p className="my-[10px] text-[2.5rem]">${item.price}</p>
              <p className="text-[1.4rem]">{item.description}</p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <ButtonAddCart handleClick={addToCart} />
            </div>
          </div>
        </div>
      );
    case "ListItem":
      return (
        <div className={`flex flex-col items-center`}>
          <div
            className={`w-[150px] ${
              cart.darkMode
                ? "bg-black text-white transition-all duration-300 ease-in-out "
                : "bg-white text-black transition-all duration-300 ease-in-out"
            } `}
          >
            <div className="mb-[10px] flex h-[150px] select-none items-center justify-center rounded-[6px] shadow-nav-shadow">
              <Image
                className="h-[100px] w-[100px] rounded-[2px]"
                src={item.image}
                alt="Picture of the author"
                width={100}
                height={100}
              />
              <div className="absolute flex h-[150px] w-[150px] items-start justify-end">
                <ButtonRemoveCart handleClick={removeToCart} />
              </div>
            </div>

            <div className="mx-[10px] flex flex-col items-center">
              <div className="flex h-[50px] w-[200px] items-center justify-center">
                <div className="w-auto">
                  <div className="flex">
                    {qty === 0 ? (
                      ""
                    ) : (
                      <p className="text-[1.4rem]">{qty} units........</p>
                    )}
                    <p className="text-[1.4rem]">${item.price.toFixed(2)}</p>
                  </div>

                  {qty === 0 ? (
                    ""
                  ) : (
                    <p className="text-[1.4rem]">
                      Subtotal: ${getSubtotal().toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="my-[15px] w-[250px]">
            <hr className="height-[200px] width-[300px] border-[1px] border-x-[10px] border-solid border-[#CCCCCC]" />
          </div>
        </div>
      );
    default:
      return (
        <div
          className={`mb-[60px] w-[300px] ${
            cart.darkMode
              ? "bg-black text-white transition-all duration-300 ease-in-out"
              : "bg-white text-black transition-all duration-300 ease-in-out"
          } lg:mb-[20px]`}
        >
          <div
            className={`mb-[10px] flex h-[300px] select-none items-center justify-center rounded-[6px] shadow-nav-shadow`}
          >
            <Link href={`/store/${convertToPath(item.name)}`}>
              <Image
                className="h-[250px] w-[250px] rounded-[4px]"
                src={item.image}
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </Link>
          </div>
          <div className="mx-[10px] flex flex-col items-center">
            <div className="flex h-[100px] items-center">
              <p className="text-[1.6rem] font-medium">
                <Link href={`/store/${convertToPath(item.name)}`}>
                  {item.name}
                </Link>
              </p>
            </div>
            <p className="my-[5px] text-[1.6rem]">${item.price.toFixed(2)}</p>
            <ButtonAddCart handleClick={addToCart} />
          </div>
        </div>
      );
  }
}
