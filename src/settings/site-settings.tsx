import { Icon } from '@iconify/react';

const siteSettings = {
  name: 'Sethi and Associates',
  title: 'Best Legal Consultant in East Delhi | Preet Vihar',
  description: 'Best Legal Consultant in East Delhi | Preet Vihar',
  author: {
    name: 'Sethi & Associates Legal Consultant',
    websiteUrl: 'https://sethiandassociates.com',
    address: 'G-27, Preet Vihar, Near Preet Vihar Metro Station, Delhi-110092',
  },
  ogImageUrl: 'https://sethiandassociates.com/assets/logos/logo.jpg',
  spinner: 'http://127.0.0.1:3000/assets/logos/logogif.gif',
  socialHandler: [
    {
      id: 0,
      label: 'linkedin',
      icon: <Icon icon="mdi:linkedin" />,
      href: 'https://www.linkedin.com/in/keshav-sethi-10',
    },
    // {
    //   id: 1,
    //   label: 'instagram',
    //   icon: <Icon icon="skill-icons:instagram" />,
    //   href: 'https://www.instagram.com/sethi/',
    // },
    // {
    //   id: 2,
    //   label: 'twitter',
    //   icon: <Icon icon="skill-icons:twitter" />,
    //   href: 'https://twitter.com/sethi',
    // },
    // {
    //   id: 3,
    //   label: 'youtube',
    //   icon: <Icon icon="logos:youtube-icon" />,
    //   href: 'https://www.youtube.com/channel/sethi',
    // },
  ],
  subHeaderNavigation: {
    location: {
      label: 'Find Location',
      icon: <Icon icon="ic:round-location-on" className="text-xl text-primary-600" />,
      href: 'https://maps.app.goo.gl/zskyiVjyfSVcSwD48',
    },
    phone: {
      icon: <Icon icon="ic:baseline-phone-in-talk" className="text-xl text-primary-600" />,
      details: [
        {
          label: '+91-98-1006-2191',
          href: 'tel:+919810062191',
        },
        {
          label: '+91-99-5885-2527',
          href: 'tel:+919958852527',
        },
      ],
    },
    email: {
      label: 'sethiassoicatesdelhi@gmail.com',
      icon: <Icon icon="material-symbols:mail-rounded" className="text-xl text-primary-600" />,
      href: 'mailto:sethiassoicatesdelhi@gmail.com',
    },
  },
  headerNavigation: [
    { name: 'Home', href: '/', current: false },
    { name: 'Practice Areas', href: '/#practice-areas', current: false },
    { name: 'About', href: '/about-us', current: false },
    { name: 'Our Work ', href: '/work', current: false },
    { name: 'Contact Us', href: '/contact-us', current: false },
  ],
  footerNavigation: [
    {
      title: 'QUICK LINKS',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Practice Areas', href: '/#practice-areas' },
        { label: 'About', href: '/about-us' },
        { label: 'Our Work', href: '/work' },
        { label: 'Contact Us', href: '/contact-us' },
      ],
    },
    {
      title: 'CONTACT',
      links: [
        {
          label: 'sethiassoicatesdelhi@gmail.com',
          href: 'mailto:sethiassoicatesdelhi@gmail.com',
          icon: (
            <Icon icon="material-symbols:mail-rounded" className="text-xl text-primary-600 mr-1" />
          ),
        },
        {
          label: '+91-98-1006-2191',
          href: 'tel:+919810062191',
          icon: <Icon icon="ic:baseline-phone-in-talk" className="text-xl text-primary-600 mr-1" />,
        },
        {
          label: '+91-99-5885-2527',
          href: 'tel:+919958852527',
          icon: <Icon icon="ic:baseline-phone-in-talk" className="text-xl text-primary-600 mr-1" />,
        },
      ],
    },
    {
      title: 'ADDRESS',
      links: [
        {
          label: 'G-27, Preet Vihar, Near Preet Vihar Metro Station, Delhi-110092',
          href: 'https://maps.app.goo.gl/zskyiVjyfSVcSwD48',
          icon: <Icon icon="ic:round-location-on" className="text-xl text-primary-600 mr-1" />,
        },
      ],
    },
    // {
    //   title: 'Others',
    //   links: [
    //     { label: 'Terms & Conditions', href: '/terms-conditions' },
    //     { label: 'Privacy Policy', href: '/privacy-policy' },
    //   ],
    // },
  ],
};

export default siteSettings;
