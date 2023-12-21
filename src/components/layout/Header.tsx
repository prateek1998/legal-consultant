import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import siteSettings from "settings/site-settings";
import Drawer from "../drawer";
// const Header: React.FC<> = () => {
const Header: React.FC<{ isDefault: boolean }> = ({ isDefault }) => {
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
            ? "bg-primary-700 bg-opacity-90 backdrop-blur-sm fixed top-0 shadow-md"
            : "bg-black bg-opacity-40 "
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logos/logo1.svg"
            width={50}
            height={100}
            alt="logo"
          />
        </Link>
        <p className="text-3xl hidden md:block font-alike font-bold">
          SETHI & ASSOCIATES LEGAL CONSULTANTS
        </p>
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
        <button
          onClick={handleDrawer}
          type="button"
          className="md:hidden flex flex-grow font-body justify-end flex-wrap items-center"
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
