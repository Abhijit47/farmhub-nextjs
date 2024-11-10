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
// import FaqHomeThree from '../home-3/FaqHomeThree';
// import BrandHomeOne from '../home/BrandHomeOne';
import AboutHomeTwo from './AboutHomeTwo';
// import ContactHomeTwo from './ContactHomeTwo';
import HeroHomeTwo from './HeroHomeTwo';
import ServiceHomeTwo from './ServiceHomeTwo';
// import SubscribeHomeTwo from './SubscribeHomeTwo';
// import TestimonialHomeTwo from './TestimonialHomeTwo';

export default function HomeTwo() {
  return (
    <>
      <HeaderTwo />
      <HeroHomeTwo />
      <AboutHomeTwo />
      <ServiceHomeTwo />

      {/* nessecary part */}
      {/* <TestimonialHomeTwo /> */}

      {/* nessecary part */}
      {/* <BrandHomeOne style_2={true} /> */}

      {/* nessecary part */}
      {/* <ContactHomeTwo /> */}

      {/* nessecary part */}
      {/* <FaqHomeThree /> */}

      {/* nessecary part */}
      {/* <SubscribeHomeTwo /> */}
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
