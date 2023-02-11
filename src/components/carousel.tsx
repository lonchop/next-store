import { useEffect, useState } from "react";
import images from "../images";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Carousel() {
  const [contador, setContador] = useState(0);

  const carousel = images.bg_images.map((item) => item.name);

  const nextClick = () => {
    if (contador + 1 < carousel.length) {
      setContador(contador + 1);
    }
    if (contador + 1 === carousel.length) {
      setContador(0);
    }
  };

  const previousClick = () => {
    if (contador >= 1) {
      setContador(contador - 1);
    }
    if (contador === 0) {
      setContador(carousel.length - 1);
    }
  };

  const imageIndicator = images.bg_images.map((item, index) => (
    <button
      key={index}
      onClick={() => setContador(index)}
      className={
        contador === index
          ? `h-[20px] w-[20px] rounded-full border-2 border-transparent bg-primary-1 transition-all duration-300 ease-out`
          : `h-[20px] w-[20px] rounded-full border-2 border-white bg-transparent transition-all duration-300 ease-out`
      }
    ></button>
  ));

  useEffect(() => {
    const interval = setInterval(() => {
      nextClick();
    }, 5000);
    return () => clearInterval(interval);
  }, [contador]);

  return (
    <>
      <div className="flex h-screen w-full flex-row flex-nowrap justify-center lg:w-[95%]">
        <div className="absolute h-screen w-full lg:w-[95%]">
          <div
            className={`absolute h-screen w-full rounded-[2px] bg-cover ${carousel[contador]} brightness-50 transition-all duration-300 ease-out`}
          ></div>

          <div className="absolute h-screen w-full flex flex-col justify-center lg:justify-start">
            <div className="w-[100%] p-[20px] lg:w-[60%] lg:p-[100px]">
              <h2 className="mt-[40px] mb-[30px] text-[4rem] font-bold text-white lg:text-[5rem]">
                Shop the Winter 2023 Collection
              </h2>
              <p className="text-[1.6rem] text-white">
                Level up your comfort this season with our new Winter Collection
                — all new joggers, beanies, drinkware, and for the first time
                ever, Octocookie cutters!
              </p>
            </div>
          </div>

          <div className="absolute top-[50%] m-auto my-0 w-full lg:top-[50%]">
            <button
              onClick={() => previousClick()}
              className="absolute left-0 hidden h-10 w-10 select-none items-center justify-center rounded-[4px] transition duration-300 ease-in-out lg:flex lg:h-[40px] lg:w-[40px]"
            >
              <IoChevronBackOutline className="h-[50px] w-[50px] text-white" />
            </button>

            <button
              onClick={() => nextClick()}
              className="absolute right-0 hidden h-10 w-10 select-none items-center justify-center rounded-[4px] transition duration-300 ease-in-out lg:flex lg:h-[40px] lg:w-[40px]"
            >
              <IoChevronForwardOutline
                className="h-[50px] w-[50px] 
              text-white"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex h-14 w-full items-center justify-center space-x-[8px]">
        {imageIndicator}
      </div>
    </>
  );
}
