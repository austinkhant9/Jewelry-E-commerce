import React from "react";

const NavigationBar = () => {
  const MENU_LIST = [
    {
      id: 1,
      name: "Menu-1",
    },
    {
      id: 2,
      name: "Menu-1",
    },
    {
      id: 3,
      name: "Menu-1",
    },
    {
      id: 4,
      name: "Menu-1",
    },
    {
      id: 5,
      name: "Menu-1",
    },
  ];

  return (
    <div className="flex justify-between items-center bg-transparent px-6 pt-3 laptop:pt-5 w-full h-full">
      <div className="block laptop:flex items-center space-x-0 laptop:space-x-6">
        <p className="heading-font font-roboto font-semibold text-secondary">
          Myanmar
        </p>
        <div className="flex items-center space-x-2 laptop:block">
          <p className="laptop:text-center primary-font font-roboto font-semibold text-white">
            Jewelry
          </p>
          <p className="laptop:text-center primary-font font-roboto font-semibold text-white">
            E-commerce
          </p>
        </div>
      </div>
      <div className="flex space-x-16">
        {MENU_LIST.map((menu) => (
          <div
            key={menu.id}
            className="hidden laptop:block cursor-pointer laptop:hover:scale-105 duration-300"
          >
            <p className="base-font text-white laptop:hover:text-secondary font-outfit">
              {menu.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
