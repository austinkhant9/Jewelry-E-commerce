import Image from "next/legacy/image";
import React from "react";
import { Link } from "react-scroll/modules";
import { MENU_LIST } from "../NavigationBar";

const Footer = () => {
  return (
    <div className="px-5 py-10 bg-tertiary">
      <div className="grid grid-cols-2">
        <div className="col-span-2 tablet:col-span-1 space-y-8">
          <div className="space-y-2">
            <p className="heading-font font-roboto font-semibold text-secondary">
              Myanmar
            </p>
            <p className="primary-font font-roboto font-medium text-white">
              Jewelry E-commerce
            </p>
          </div>
          <div>
            <div className="flex space-x-4">
              <Image
                src="/images/Icons/phone.svg"
                width={18}
                height={18}
                alt="Phone"
              />
              <p className="base-font font-outfit font-normal text-secondary">
                09-451116668
              </p>
            </div>
            <div className="flex space-x-4">
              <Image
                src="/images/Icons/phone.svg"
                width={18}
                height={18}
                alt="Phone"
              />
              <p className="base-font font-outfit font-normal text-secondary">
                09-781116668
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 tablet:col-span-1">
          <div className="grid grid-cols-2">
            <div className="col-span-2 laptop:col-span-1"></div>
            <div className="col-span-2 laptop:col-span-1">
              <div className="grid grid-rows-3 grid-flow-col gap-y-4">
                {MENU_LIST.map((menu) => (
                  <div key={menu.id} className="row-span-1">
                    <Link
                      activeClass="active"
                      to={menu.name}
                      spy={true}
                      smooth={true}
                      offset={10}
                      duration={500}
                    >
                      <p className="laptop:cursor-pointer base-font text-white laptop:hover:text-secondary font-outfit">
                        {menu.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
