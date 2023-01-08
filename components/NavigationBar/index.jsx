import React from "react";
import { Link } from "react-scroll/modules";

export const MENU_LIST = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Service",
  },
  {
    id: 4,
    name: "Partnership",
  },
  {
    id: 5,
    name: "Investment",
  },
  {
    id: 6,
    name: "Projects",
  },
];

const NavigationBar = () => {
  return (
    <div className="flex justify-between items-center bg-transparent px-6 pt-3 laptop:pt-5 w-full h-full">
      <div className="block laptop:flex items-center space-x-0 laptop:space-x-6">
        <p className="heading-font font-roboto font-semibold text-secondary">
          Myanmar
        </p>
        <div className="flex items-center laptop:block">
          <p className="laptop:text-left primary-font font-roboto font-semibold text-white">
            Jewellery
          </p>
          <p className="laptop:text-center primary-font font-roboto font-semibold text-white">
            E-commerce Zone
          </p>
        </div>
      </div>
      <div className="flex laptop:space-x-10 desktop:space-x-16">
        {MENU_LIST.map((menu) => (
          <div
            key={menu.id}
            className="hidden laptop:block cursor-pointer laptop:hover:scale-105 duration-300"
          >
            <Link
              activeClass="active"
              to={menu.name}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <p className="base-font text-white laptop:hover:text-secondary font-outfit">
                {menu.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
