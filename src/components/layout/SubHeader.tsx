import React, { Fragment } from 'react'
import Link from 'next/link';
import siteSettings from 'settings/site-settings';

const SubHeader = () => {
  const { subHeaderNavigation, socialHandler } = siteSettings;

  return (
    <Fragment>
      <div className="px-4 pt-1 border-b-2 border-dashed bg-black bg-opacity-40">
        <div className="flex h-10 px-4 w-full items-center justify-between">
          {/* Left subHeader Options */}
          <div className="flex items-center text-sm text-white">
            <Link
              href={subHeaderNavigation.location.href}
              target="_blank"
              className="inline-flex items-center xl:text-base hover:text-primary-600 hover:underline border-r-2 border-r-gray-400 pr-2"
            >
              {subHeaderNavigation.location.icon}
              <span className="mx-1">{subHeaderNavigation.location.label}</span>
            </Link>
            <Link
              href={subHeaderNavigation.email.href}
              className="inline-flex items-center xl:text-base hover:text-primary-600 hover:underline border-r-2 border-r-gray-400 px-2"
            >
              {subHeaderNavigation.email.icon}
              <span className="mx-1">{subHeaderNavigation.email.label}</span>
            </Link>

            <Link
              href={subHeaderNavigation.phone.details[0].href}
              className="inline-flex items-center xl:text-base pl-2 hover:text-primary-600 hover:underline"
            >
              {subHeaderNavigation.phone.icon}
            </Link>
            {subHeaderNavigation.phone.details.map((number) =>
              <Link href={number.href}
                key={number.label}
                className="inline-flex items-center xl:text-base pl-2 hover:text-primary-600 hover:underline">
                <span className="">{number.label}</span>
              </Link>
            )}
          </div>

          {/* right subHeader Optons*/}
          <div className="flex flex-grow items-center justify-end sm:items-stretch sm:justify-end text-white text-center">
            <div className="flex flex-shrink-0 space-x-2 items-center pl-2">
              {socialHandler.map((item) => (
                <a
                  href={item.href}
                  key={item.id}
                  target="_blank"
                  className={'text-3xl'}
                  data-te-toggle="tooltip"
                  title={`Follow us on ${item.label}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SubHeader;