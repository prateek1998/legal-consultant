import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function DisclaimerDialog() {
  const [isOpen, setIsOpen] = useState<Boolean>(true);

  function handleClose() {
    setIsOpen(!isOpen);
  }

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-primary-700 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-[53]">
        <div className="flex justify-center items-center md:h-2/5 md:w-3/5 sm:text-sm h-2/4 w-[95%] ">
          <div className="relative flex flex-col rounded-md bg-white px-4 py-2 shadow-lg">
            <h2 className="font-bold text-3xl mb-3 border-b-2 text-center font-alike">
              DISCLAIMER & CONFIRMATION
            </h2>
            <p className="text-md">
              According to the regulations set forth by the Bar Council of India, Sethi & Associates
              (referred to as the &quotFirm&quot) is prohibited from engaging in solicitation or
              advertising activities. By selecting the &quotI Agree&quot option below, the user affirms the
              following:
            </p>
            <ul className="list-disc pl-3 mb-3 h-80 overflow-y-auto">
              <p>
                1. The Firm and its members have refrained from engaging in any form of advertisement,
                personal communication, solicitation, invitation, or inducement via this website to
                procure work or promote services.
              </p>
              <p>
                2. The primary objective of this website is to furnish users with information
                pertaining to the Firm, including its practice areas, advocates, and solicitors.
              </p>
              <p>
                3. The user&aposs intent is to acquire information about the Firm solely for personal
                or professional informational purposes.
              </p>
              <p>
                4. Information regarding the Firm is dispensed to the user exclusively upon their
                specific request. Any materials downloaded or information obtained from this website
                are entirely at the discretion of the user, and the utilization of this website does
                not establish a lawyer-client relationship.
              </p>
              <p>
                5. This website does not serve as an avenue for advertising or solicitation. The
                contents herein should not be construed as legal advice under any circumstances.
              </p>
              <p>
                6. The Firm disclaims liability for any consequences arising from actions taken by the
                user based on the material or information provided on this website. Should the user
                require assistance, it is recommended to seek independent legal counselling.{' '}
              </p>
              <p>
                7. The content featured on this website is considered the intellectual property of the
                Firm.{' '}
              </p>
              Please read and accept our website&aposs Terms of Use and our Privacy Policy
            </ul>
            <button
              onClick={handleClose}
              className="text-white mx-auto bg-primary-700 capitalize px-8 py-1 rounded text-2xl shadow-md hover:bg-primary-500 transition-all duration-150 ease-in"
            >
              {/* // capitalize text-md bg-[#2557D6] px-8 hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-[#2557D6]/50 '> */}
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
