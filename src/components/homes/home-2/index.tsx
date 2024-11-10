import FooterOne from '@/layouts/footers/FooterOne';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import BrandHomeOne from '../home/BrandHomeOne';
// import CounterHomeOne from '../home/CounterHomeOne';
import AboutHomeTwo from './AboutHomeTwo';
// import BlogHomeTwo from './BlogHomeTwo';
import ContactHomeTwo from './ContactHomeTwo';
// import FeatureHomeTwo from './FeatureHomeTwo';
import HeroHomeTwo from './HeroHomeTwo';
// import ProjectHomeTwo from './ProjectHomeTwo';
import ServiceHomeTwo from './ServiceHomeTwo';
import SubscribeHomeTwo from './SubscribeHomeTwo';
// import TeamHomeTwo from './TeamHomeTwo';
import FaqHomeThree from '../home-3/FaqHomeThree';
import TestimonialHomeTwo from './TestimonialHomeTwo';
// import WorkProcessHomeTwo from './WorkProcessHomeTwo';

export default function HomeTwo() {
  return (
    <>
      <HeaderTwo />
      <HeroHomeTwo />
      <AboutHomeTwo />
      <ServiceHomeTwo />
      {/* <WorkProcessHomeTwo /> */}
      {/* <ProjectHomeTwo /> */}
      <TestimonialHomeTwo />
      <BrandHomeOne style_2={true} />
      {/* <TeamHomeTwo /> */}
      {/* <CounterHomeOne style_2={true} /> */}
      {/* <FeatureHomeTwo /> */}
      <ContactHomeTwo />
      <FaqHomeThree />
      {/* <BlogHomeTwo /> */}
      <SubscribeHomeTwo />
      <FooterOne />
    </>
  );
}
