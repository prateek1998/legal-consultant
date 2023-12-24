// import { GetServerSideProps } from 'next';
// import { AxiosResponse } from 'axios';
// import { MDXRemote } from 'next-mdx-remote';
import Layout from 'components/layout';
// import Breadcrumps from 'components/breadcrumbs';
// import { ICollectionResponse, IPrivacyPolicy } from 'types';
// import { fetchPrivacyPolicy } from 'pages/api';
// import { serializeMarkdown } from 'utils/helpers';
// import Seo from 'components/seo';

// interface privacyPolicyBody {
//   privacyPolicyBody: any;
// }
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div>PrivacyPolicy</div>
  )
}

export default PrivacyPolicy


// export default function PrivacyPolicy({ privacyPolicyBody }: privacyPolicyBody) {
//   return (
//     <>
//       <Seo title="Privacy Policy" />
//       <div className="container px-4 body-font pt-14 lg:pt-0">
//         <Breadcrumps breadCrumbActive="Privacy Policy" />
//         <section className="body-font px-4 mb-10 text-left">
//           <div className="mb-8 pt-2 leading-relaxed tracking-wide text-sm md:text-base text-justify text-textColor-100 font-normal prose prose-a:text-primary-600 max-w-none marker:text-primary-600 prose-blockquote:bg-primary-50 prose-blockquote:py-1 prose-blockquote:rounded-r-xl prose-blockquote:border-primary-600 prose-blockquote:px-3">
//             {privacyPolicyBody && <MDXRemote {...privacyPolicyBody} />}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data: PrivacyPolicy }: AxiosResponse<ICollectionResponse<IPrivacyPolicy>> =
//     await fetchPrivacyPolicy();

//   const privacyPolicyBody = await serializeMarkdown(PrivacyPolicy.data.attributes.body);

//   return {
//     props: {
//       privacyPolicyBody: privacyPolicyBody,
//     },
//   };
// };

PrivacyPolicy.Layout = Layout;
