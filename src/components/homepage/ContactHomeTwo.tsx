'use client';

import Image from 'next/image';

export default function ContactHomeTwo() {
  return (
    <>
      <section
        id='contact'
        className='talking-section overflow-hidden space-top space-bottom'>
        <div className='container'>
          <div className='row g-4 align-items-xl-center flex-row-reverse justify-content-between'>
            <div className='col-md-6'>
              <div className='talking-contact-box'>
                <div className='conatact-box common-contact-inner position-relative'>
                  <div className='section-title mb-40'>
                    <h5 className='p1-clr wow fadeInLeft' data-wow-delay='0.4s'>
                      Contact
                    </h5>
                    <h2>Get Touch Here</h2>
                  </div>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className='row g-xl-4 g-3'>
                    <div className='col-lg-6'>
                      <input type='text' placeholder='Name' />
                    </div>
                    <div className='col-lg-6'>
                      <input type='email' placeholder='E-mail' />
                    </div>
                    <div className='col-lg-12'>
                      <input type='text' placeholder='Subject' />
                    </div>
                    <div className='col-lg-12'>
                      <textarea
                        name='message'
                        placeholder='Message'
                        rows={4}
                        style={{ resize: 'none' }}></textarea>
                    </div>
                    <div className='col-lg-6'>
                      <button type='submit' className='cmn-btn text-capitalize'>
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div
                className='taklking-cotnact-thumb w-100 wow fadeInRight'
                data-wow-delay='.4s'>
                <Image
                  src='/assets/img/contact/talking-contact.png'
                  alt='img'
                  className='w-100 h-100 object-fit-cover'
                  width={710}
                  height={620}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}