import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import siteSettings from "settings/site-settings";
import Drawer from "../drawer";
// const Header: React.FC<> = () => {
const Header: React.FC<{ isDefault: boolean; defaultRoute: boolean }> = ({
  isDefault,
  defaultRoute,
}) => {
  const { headerNavigation } = siteSettings;
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // detect whether user has scrolled the page down by 250px
  useEffect(() => {
    if (isDefault) {
      const scrollHandler = () => {
        window.pageYOffset > 250 ? setIsScrolled(true) : setIsScrolled(false);
      };
      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    } else setIsScrolled(true);
  }, [isScrolled]);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  const handleDrawer = () => {
    setOpen(!open);
  };
  return (
    <header className="w-full flex flex-col h-full">
      <nav
        className={`text-white flex items-center border-b-2 border-dashed w-full px-5 py-4 transition-all duration-300 ease-out ${
          isScrolled
            ? "bg-primary-700  bg-opacity-90 backdrop-blur-sm fixed top-0 shadow-md"
            : "bg-black bg-opacity-40"
        } ${defaultRoute ? "z-0" : "z-20"}`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logos/logo1.svg"
            width={50}
            height={100}
            alt="logo"
          />
          <p className="text-3xl hidden md:block font-alike font-bold">
            SETHI & ASSOCIATES LEGAL CONSULTANTS
          </p>
        </Link>
        <nav className="hidden lg:flex flex-grow ">
          <div className="flex flex-grow font-body justify-end flex-wrap items-center">
            <div className="flex uppercase lg:text-base">
              {headerNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? "font-extrabold" : "hover:border-b-4 ",
                    "px-2 xl:px-3.5 py-2 mr-2 border-r-2 border-b-white text-white flex items-center align-middle focus:outline-none transition-all duration-300 ease-out"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="md:hidden flex flex-grow font-body justify-end flex-wsrap items-center">
          <Link
            href="tel:+919958852527"
            aria-controls="mobile-menu"
            aria-expanded="false"
            className=" flex flex-col justify-center items-center pt-5 mr-3 "
          >
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="2em"
              width="2em"
              // {...props}
            >
              <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V1.707l-4.146 4.147a.5.5 0 01-.708-.708L14.293 1H11.5a.5.5 0 01-.5-.5z" />
            </svg>
            <span className="">Call to Us</span>
          </Link>
          <button
            onClick={handleDrawer}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      <Drawer open={open} onClose={handleDrawer} title="Menus">
        <div
          className="w-full h-full list-none text-2xl flex ml-3 flex-col align-start pb-5"
          onClick={handleDrawer}
        >
          {headerNavigation.map((menuItem: any, i: number) => (
            <Link
              className="mb-3 mx-[-3px] border-b-4 text-xl border-dotted"
              key={i}
              href={menuItem.href}
            >
              {menuItem.name}
            </Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
