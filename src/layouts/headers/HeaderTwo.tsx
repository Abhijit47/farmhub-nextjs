'use client';

import PopUpModal from '@/components/common/Modal';
import Offcanvas from '@/components/common/Offcanvas';
import SearchBar from '@/components/common/SearchBar';
import useSticky from '@/hooks/use-sticky';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavMenu from './menu/NavMenu';

export default function HeaderTwo() {
  const { sticky } = useSticky();
  const [open, setOpen] = useState(false);
  const [serchOpen, setSearchOpen] = useState(false);
  const [show, setShow] = useState(false);

  function toggleCanvas() {
    setOpen((prev) => !prev);
  }

  function toggleModal() {
    return setShow((prev) => !prev);
  }

  return (
    <>
      <div className='header-top-section style-v01 d-lg-block d-none'>
        <div className='container'>
          <div className='header-top-wrapper'>
            <Link href='#' className='location-area'>
              <i className='fa-solid fa-location-dot'></i>
              2464 Royal Ln. Mesa, New Jersey 45463
            </Link>
            <ul className='contact-list'>
              <li>
                <Link href={'tel:6295550129'}>
                  <i className='fa-solid fa-phone'></i>
                  (629) 555-0129
                </Link>
              </li>
              <li>
                <Link href='mailto:debbie.baker@example.com' className='link'>
                  <i className='fa-solid fa-envelope'></i>
                  debbie.baker@example.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header
        id='header-sticky'
        className={`header-2 ${sticky ? 'sticky' : ''}`}>
        <div className='container'>
          <div className='mega-menu-wrapper'>
            <div className='header-main'>
              <div className='header-left w-25 h-25'>
                <div className='logo w-50 h-50'>
                  <Link href='#header-sticky' className='header-logo'>
                    <Image
                      src='/assets/img/logo/Logo_t.png'
                      alt='logo-img'
                      width={431}
                      height={154}
                      className='w-100 h-100'
                      priority={true}
                    />
                  </Link>
                </div>
              </div>
              <div className='header-right d-flex justify-content-end align-items-center'>
                <div className='mean__menu-wrapper d-none d-xl-block'>
                  <div className='main-menu'>
                    <nav id='mobile-menu'>
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className='search-adjust'>
                  <Link
                    href='#'
                    className='search-trigger d-center'
                    onClick={() => setSearchOpen(!serchOpen)}>
                    <i className='fa-solid fa-magnifying-glass'></i>
                  </Link>
                  <div className='header-button d-sm-block d-none'>
                    <button
                      type='button'
                      className='cmn-btn round100'
                      onClick={toggleModal}>
                      Get A Quote
                      <i className='fa-solid fa-arrow-right'></i>
                    </button>
                  </div>
                </div>
                <div className='header__hamburger d-xl-none my-auto'>
                  <div className='sidebar__toggle' onClick={toggleCanvas}>
                    <i className='fas fa-bars'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Offcanvas open={open} onToogleCanvas={toggleCanvas} />
      <SearchBar serchOpen={serchOpen} setSearchOpen={setSearchOpen} />
      <PopUpModal isOpen={show} onToggleModal={toggleModal} />
    </>
  );
}
