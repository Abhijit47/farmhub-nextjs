import Image from 'next/image';
import Link from 'next/link';

import HERO_BANNER from '/public/assets/img/banner/hero-v2.png';

export default function HeroHomeTwo() {
  return (
    <>
      <section
        id='hero'
        className='banner-section position-relative style-v2 overflow-hidden'>
        <div className='container'>
          <div className='banner-wrapperv2 position-relative'>
            <div className='row g-4 align-items-center'>
              <div className='col-lg-7 col-md-9'>
                <div className='banner-contentv02'>
                  <h5 className='wow fadeInUp' data-wow-delay='0.2s'>
                    Farming for tomorrow
                  </h5>
                  <h1 className='wow fadeInUp' data-wow-delay='0.5s'>
                    Transforming Food Farming Future{' '}
                    <span className={''}>
                      with our Sustainable
                      <br /> Climate Smart Biofarming Solutions
                    </span>
                  </h1>
                  {/* <h1 className='wow fadeInUp' data-wow-delay='0.5s'>
                    Farming is ours heritage{' '}
                    <span>
                      future <br /> our harvest
                    </span>
                  </h1> */}
                  <p className='wow fadeInUp' data-wow-delay='0.7s'>
                    Join us in revolutionising the farming landscape with our
                    climate-smart innovations and sustainable practices.
                  </p>
                  <div
                    className='banner-buttonv2 wow fadeInUp'
                    data-wow-delay='1s'>
                    <Link
                      href='#why-choose-us'
                      className='cmn-btn round100 primary-border'>
                      Read More
                      <i className='fa-solid fa-angle-right'></i>
                    </Link>
                    {/* <Link href={`tel:${8085550111}`} className='header-help'> */}
                    <Link
                      href={`https://wa.link/5bv1ow`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='header-help'>
                      <span className='icon d-center'>
                        <i className='fa-solid fa-phone'></i>
                      </span>
                      <span className='d-grid'>
                        <span className='need'>Need help?</span>
                        <span className='call'>(808) 555-0111</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src='/assets/img/banner/hero-v2.png'
          alt='img'
          className='hero-v02-thumb'
          width={1036}
          height={800}
          placeholder='blur'
          blurDataURL={HERO_BANNER.blurDataURL}
          priority={true}
        />
      </section>
    </>
  );
}
