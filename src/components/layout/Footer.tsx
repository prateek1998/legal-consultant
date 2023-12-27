import Image from 'next/image';
import Link from 'next/link';
import siteSettings from 'settings/site-settings';

const Footer = () => {
  const { footerNavigation } = siteSettings;
  return (
    <footer className="body-font bg-primary-700 text-white bottom-0 mb-12 md:mb-14 lg:mb-0">
      {/* branding and message */}
      <div className="container px-4 py-16 mx-auto flex items-center lg:items-start lg:flex-row lg:flex-nowrap flex-wrap flex-col">
        <div className="lg:w-64 w-full flex-shrink-0 lg:mx-0 mx-auto text-center lg:text-left">
          <a className="flex title-font font-medium items-center lg:justify-start justify-center ">
            <Image
              className="sm:h-20 h-26 w-asuto mb-4 lg:mb-0"
              width={120}
              height={30}
              src="/assets/logos/logo1.svg"
              alt="logo"
              loading="lazy"
            />
          </a>
          <p className="mt-2 text-sm font-thin">
            At Sethi & Associates Legal Consultant, we&apos;re known for our highly knowledgeable
            team who never shies away from a challenge. Our Associates are skilled researchers and
            confident in their abilities to tackle any legal situation you may face.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 auto-rows-auto lg:grid-cols-3 lg:pl-20 -mb-10 lg:mt-0 mt-10 lg:text-left text-center">
          {footerNavigation.map((section) => {
            return (
              <div key={section.title}>
                <div className="w-full px-4">
                  <h2 className="text-white tracking-widest text-md font-bold mb-3">
                    {section.title}
                  </h2>
                  <nav className="list-none lg:mb-10">
                    {section.links.map((link: any) => (
                      <li key={link.label}>
                        <p className="text-md underline text-blue-300 py-1 font-bold ">
                          {link.title}
                        </p>
                        <Link
                          href={link.href}
                          target="_blank"
                          className="flex justify-center lg:justify-start text-sm font-thin hover:underline"
                        >
                          <span className="mr-2 ">{link.icon}</span>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </nav>
                </div>
                <div className="border-b-4 mx-auto my-4 w-16 lg:hidden" />
              </div>
            );
          })}
        </div>
      </div>

      {/* subFooter for copyrights and social links */}
      <div className="bg-primary-1000 border-t-2 border-t-gray-500 px-4">
        <div className="container mx-auto py-4 px-2 flex flex-col lg:flex-row items-center justify-between">
          <p className="text-white text-sm mx-auto text-center sm:text-left">
            © {new Date().getFullYear()} by
            <Link
              href="https://www.linkedin.com/in/keshav-sethi-10"
              rel="noopener noreferrer"
              className="text-white ml-1 hover:underline tracking-wide"
              target="_blank"
            >
              {siteSettings.author.name}
            </Link>
            <span className="mr-2"> All Rights Reserved.</span>
            Developed by
            <a
              href="https://www.instagram.com/codingwithprateek"
              target="_blank"
              className={'text-primary-100  s-xl font-alike mx-1'}
              data-te-toggle="tooltip"
              title={`Follow us on Instagram`}
            >
              Coding with Prateek
            </a>
          </p>
          {/* <div className="flex items-center lg:ml-auto mt-2 lg:mt-0 justify-center sm:justify-start">
            Developed by 
              <a
                href="https://www.instagram.com/codingwithprateek"
                target="_blank"
                className={'text-primary-100  text-xl font-alike mx-1'}
                data-te-toggle="tooltip"
                title={`Follow us on Instagram`}
              >
                Coding with Prateek
              </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
