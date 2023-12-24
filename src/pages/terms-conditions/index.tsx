import Layout from 'components/layout';
import Seo from 'components/seo';
export default function TermsConditions() {
  return (
    <>
      <Seo title="Terms & Conditions" />
      <div className="px-4 pt-28 wlg:pt-0">
        <section className="px-4 mb-10 md:mx-20 text-left">
          <div className="mb-8 pt-2 leading-relaxed tracking-wide text-sm md:text-base text-justify font-normal prose prose-a:text-primary-600 max-w-none marker:text-primary-600 prose-blockquote:bg-primary-50 prose-blockquote:py-1 prose-blockquote:rounded-r-xl prose-blockquote:border-primary-600 prose-blockquote:px-3">
            <h2 className="my-3 text-center font-bold text-2xl font-alike">
              <span className="border-y-2 py-2 border-primary-700"> Terms of Use</span>
            </h2>
            <p className="mt-3">
              By access and use of this Website www.azbpartners.com (the “Website”), the User of the
              Website (“User” or grammatical variations thereof) accepts and agrees to be bound by
              and to comply with (i) these Terms, (ii) the Disclaimer, which the User has agreed to
              and accepted prior to accessing the Website, and (iii) the Privacy Policy available on
              this Website
            </p>
            <br />
            <p>
              By using this Website, the User expressly represents that he/she has read and
              understood these Terms and agrees to be bound by these Terms. Furthermore, by using
              this Website, the User expressly represents that (a) he/she has the capacity to be
              bound by these Terms; (b) if he/she is acting on behalf of a company or other entity,
              then he/she has the relevant authority to bind such company or entity; (c) he/she will
              not violate any rights of AZB & Partners (“AZB”), including intellectual property
              rights such as copyright or trademark rights; and (d) he/she has not been or is not
              suspended or removed from the Website by AZB for any reason.
            </p>
            <h2 className="my-4 text-center font-bold text-2xl font-alike">
              <span className="border-y-2 py-2 border-primary-700"> General</span>
            </h2>
            <ul className="list-disc pl-3 mb-3">
              <li>
                The information, material and content provided in the pages of the Website (the
                “Information”) may be changed at any time without prior notice.
              </li>
              <li>
                Information provided on the Website is believed to be reliable when posted, but
                there is no guarantee that it is accurate or complete or current at all times. The
                Website is a resource for informational purposes only and is intended, but not
                promised or guaranteed, to be correct, complete, and up-to-date. AZB does not
                warrant that the information contained on this Website is accurate or complete, and
                hereby disclaims any and all liability to the User or any other person for any loss
                or damage caused by errors or omissions, regardless of whether such errors or
                omissions result from negligence, accident or any other cause. Further, AZB assumes
                no liability for the interpretation and/or use of the information contained on this
                Website, nor does it offer a warranty of any kind, either expressly or impliedly.
              </li>

              <li>
                AZB does not intend that the links from this Website to other internet websites, be
                considered referrals to, endorsements of, or affiliations with the linked entities.
                AZB is not responsible for, and makes no representations or warranties (i) the
                contents of the websites to which links may be provided from this Website, or (ii)
                other such websites or links may be active or always available.
              </li>
              <li>
                No material may be modified, edited or taken out of context such that its use
                creates a false or misleading statement or impression as to the position, statements
                or actions of AZB.
              </li>
              <li>
                AZB reserves the right at any time, without previous notice, to add, alter, modify,
                change or vary all or any of these Terms.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

TermsConditions.Layout = Layout;
