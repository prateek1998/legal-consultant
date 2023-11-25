import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function DisclaimerDialog() {
  const [isOpen, setIsOpen] = useState<Boolean>(true)

  function handleClose() {
    setIsOpen(!isOpen);
  }

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-primary-700 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-[53]">
        <div className="flex justify-center items-center md:h-2/5 md:w-3/5 sm:text-sm h-2/4 w-3/4 ">
          <div className="relative flex flex-col rounded-md bg-white px-4 py-2 shadow-lg">
            <h2 className="font-bold text-3xl mb-3 border-b-2 text-center font-alike">DISCLAIMER & CONFIRMATION</h2>
            <p className='text-md'>
              Under the rules of the Bar Council of India, Sethi & Associates Legal Consultant (the “Firm”) is prohibited from soliciting work or advertising. By clicking, “I Agree” below, the user acknowledges that:
            </p>
            <ul className='list-disc pl-3 mb-3'>
              <li>
                There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from the Firm or any of its  members to solicit any work or advertise through this website

              </li>
              <li>
                The purpose of this website is to provide the user with information about the Firm, its practice areas, its advocates and solicitors;
              </li>

              <li>The user wishes to gain more information about the Firm for his/her own information and personal/ professional use; and</li>
              <li>The information about the Firm is provided to the user only on his/ her specific request and any information obtained or materials downloaded from this website are completely at the user’s volition and any transmission, receipt or use of this website would not create any lawyer-client relationship.</li>
              <li>This website is not intended to be a source of advertising or solicitation and the contents hereof should not be construed as legal advice in any manner whatsoever.</li>
              <li>The Firm is not liable for any consequence of any action taken by the user relying on material/ information provided under this website. In cases where the user requires any assistance, he/she must seek independent legal advice.</li>
              <li>The content of this website is Intellectual Property of the Firm.</li>
              Please read and accept our website’s Terms of Use and our Privacy Policy
            </ul>
            <button onClick={handleClose} className='text-white mx-auto bg-primary-700 capitalize px-8 py-1 rounded text-2xl shadow-md hover:bg-primary-500 transition-all duration-150 ease-in'>
            
            {/* // capitalize text-md bg-[#2557D6] px-8 hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-[#2557D6]/50 '> */}
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
