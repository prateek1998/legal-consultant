import { Icon } from '@iconify/react';

const siteSettings = {
  name: 'Sethi and Associates',
  title: 'Best Legal Consultant in East Delhi | Preet Vihar',
  description:
    'Best Legal Consultant in East Delhi | Preet Vihar',
  author: {
    name: 'Sethi & Associates Legal Consultant',
    websiteUrl: 'https://sethiandassociates.com',
    address:'G-27, Preet Vihar, Near Preet Vihar Metro Station, Delhi-110092',
  },
  ogImageUrl: 'https://cdn.radixhealthcare.org/v1/assets/radix-web/images/radix-og-image.png',
 
  logo: {
    lgUrl: 'https://cdn.radixhealthcare.org/v1/assets/radix-web/logos/lg-radix-new.svg', // lg-radix-logo.svg",
    mdUrl: 'https://cdn.radixhealthcare.org/v1/assets/radix-web/logos/md-radix-new.svg',
    smUrl: 'https://cdn.radixhealthcare.org/v1/assets/radix-web/logos/sm-radix-new.svg',
    alt: 'sethi-logo',
    href: '/',
    width: 128,
    height: 30,
  },
  spinner: 'https://cdn.radixhealthcare.org/v1/assets/radix-web/images/radix-logo-optimize.gif',
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
      href: 'https://goo.gl/maps/o8GwkU9HGpETQ5en7',
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
    { name: 'Practice Areas', href: '/practice-areas', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Our Work ', href: '/works', current: false },
    { name: 'Contact Us', href: '/contact-us', current: false },
  ],
  footerNavigation: [
    {
      title: 'QUICK LINKS',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Practice Areas', href: '/practice-areas' },
        { label: 'About', href: '/about' },
        { label: 'Our Work', href: '/works' },
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
          label:
            'G-27, Preet Vihar, Near Preet Vihar Metro Station, Delhi-110092',
          href: 'https://goo.gl/maps/o8GwkU9HGpETQ5en7',
          icon: <Icon icon="ic:round-location-on" className="text-xl text-primary-600 mr-1" />,
        },
      ],
    },
    {
      title: 'Others',
      links: [
        { label: 'Terms & Conditions', href: '/terms-conditions' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
      ],
    },
  ],
};

export default siteSettings;
