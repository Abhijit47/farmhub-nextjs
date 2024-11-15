import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
      <section
        id='about'
        className='about-section style-v01 section-padding white-bg'>
        <div className='container'>
          <div className='row g-4 align-items-center justify-content-center'>
            <div className='col-lg-6 col-md-6'>
              <div className='about-contentv1'>
                <div className='section-title mb-40'>
                  <h5 className='p1-clr wow fadeInLeft' data-wow-delay='0.4s'>
                    About Us
                  </h5>
                  <h2 className='wow fadeInDown' data-wow-delay='.3s'>
                    Bringing natures bounty to your plate
                  </h2>
                  <p className='wow fadeInUp' data-wow-delay='.4s'>
                    At Finno AQ, we envision a world of sustainable smart farms
                    where food farming is both productive, profitable and
                    sustainable. Our mission is to empower farmers by providing
                    customised <strong>climate-smart, data-driven tools</strong>{' '}
                    and <strong>climate-smart, data-driven tools</strong> they
                    need to thrive in a changing climate, ensuring quality food
                    and nutritional security for everyone.
                  </p>
                  <div className='progress_bar d-grid gap-xxl-4 gap-4'>
                    <div className='progress_bar_item'>
                      <div
                        className='per-title d-flex align-items-center justify-content-between'
                        style={{ width: '70%' }}>
                        <div className='item_label p900-clr'>
                          Pure And Organic
                        </div>
                        <div className='item_value p900-clr'>70%</div>
                      </div>
                      <div className='item_bar'>
                        <div className='progress' data-progress='70'></div>
                      </div>
                    </div>
                    <div className='progress_bar_item'>
                      <div
                        className='per-title d-flex align-items-center justify-content-between'
                        style={{ width: '80%' }}>
                        <div className='item_label p900-clr'>Healthy Food</div>
                        <div className='item_value p900-clr'>80%</div>
                      </div>
                      <div className='item_bar'>
                        <div className='progress' data-progress='80'></div>
                      </div>
                    </div>
                  </div>
                  <Link href='#about' className='cmn-btn round100 cmn-primary2'>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-8 order-md-0 order-1'>
              <div className='about-thumv01 position-relative'>
                <Image
                  src='/assets/img/about/choose-man.png'
                  alt='img'
                  className='mimg w-100 h-100 object-fit-cover'
                  width={546}
                  height={546}
                />
                <Image
                  src='/assets/img/about/f-food.png'
                  alt='img'
                  className='f-food w-auto h-auto'
                  width={162}
                  height={162}
                />
                <Image
                  src='/assets/img/about/l-food.png'
                  alt='img'
                  className='l-food wow fadeInLeft w-auto h-auto'
                  data-wow-delay='.5s'
                  width={130}
                  height={130}
                />
                <Image
                  src='/assets/img/about/t-food.png'
                  alt='img'
                  className='t-food wow fadeInLeft w-auto h-auto'
                  data-wow-delay='.7s'
                  width={130}
                  height={130}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
