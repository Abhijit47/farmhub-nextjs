//////////////// unnessecary sections start
// import CounterHomeOne from '../home/CounterHomeOne';
// import BlogHomeTwo from './BlogHomeTwo';
// import FeatureHomeTwo from './FeatureHomeTwo';
// import ProjectHomeTwo from './ProjectHomeTwo';
// import TeamHomeTwo from './TeamHomeTwo';
// import WorkProcessHomeTwo from './WorkProcessHomeTwo';
//////////////// unnessecary sections end

import FooterOne from '@/layouts/footers/FooterOne';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import AboutHomeTwo from './AboutHomeTwo';
import AboutUs from './AboutUs';
import ContactHomeTwo from './ContactHomeTwo';
import Faqs from './Faqs';
import HeroHomeTwo from './HeroHomeTwo';
import ServiceHomeTwo from './ServiceHomeTwo';
import SubscribeHomeTwo from './SubscribeHomeTwo';
import TestimonialHomeTwo from './TestimonialHomeTwo';
import TrustedPartners from './TrustedPartners';
// import FaqHomeThree from '../home-3/FaqHomeThree';
// import BrandHomeOne from '../home/BrandHomeOne';
// import AboutHomeTwo from './AboutHomeTwo';
// import ContactHomeTwo from './ContactHomeTwo';
// import HeroHomeTwo from './HeroHomeTwo';
// import ServiceHomeTwo from './ServiceHomeTwo';
// import SubscribeHomeTwo from './SubscribeHomeTwo';
// import TestimonialHomeTwo from './TestimonialHomeTwo';

export default function HomeTwo() {
  return (
    <>
      <HeaderTwo />
      <HeroHomeTwo />
      <AboutUs />
      <AboutHomeTwo />
      <ServiceHomeTwo />

      {/* nessecary part */}
      <TestimonialHomeTwo />

      {/* nessecary part */}
      <TrustedPartners style_2={true} />

      {/* nessecary part */}
      <ContactHomeTwo />

      {/* nessecary part */}
      <Faqs />

      {/* nessecary part */}
      <SubscribeHomeTwo />
      <FooterOne />

      {/* unnessecary sections */}
      {/* <WorkProcessHomeTwo /> */}
      {/* <ProjectHomeTwo /> */}
      {/* <TeamHomeTwo /> */}
      {/* <CounterHomeOne style_2={true} /> */}
      {/* <FeatureHomeTwo /> */}
      {/* <BlogHomeTwo /> */}
    </>
  );
}
