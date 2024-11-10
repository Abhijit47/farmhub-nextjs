'use client';

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

  return (
    <>
      <div className='header-top-section style-v01 d-lg-block d-none'>
        <div className='container'>
          <div className='header-top-wrapper'>
            <a href='#' className='location-area'>
              <i className='fa-solid fa-location-dot'></i>
              2464 Royal Ln. Mesa, New Jersey 45463
            </a>
            <ul className='contact-list'>
              <li>
                <a href='#'>
                  <i className='fa-solid fa-phone'></i>
                  (629) 555-0129
                </a>
              </li>
              <li>
                <a href='debbie.baker@example.com' className='link'>
                  <i className='fa-solid fa-envelope'></i>
                  debbie.baker@example.com
                </a>
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
                <div className='logo'>
                  <Link href='/' className='header-logo'>
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
                    <Link href='/#' className='cmn-btn round100'>
                      Get A Quote
                      <i className='fa-solid fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
                <div className='header__hamburger d-xl-none my-auto'>
                  <div
                    className='sidebar__toggle'
                    onClick={() => setOpen(!open)}>
                    <i className='fas fa-bars'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Offcanvas open={open} setOpen={setOpen} />
      <SearchBar serchOpen={serchOpen} setSearchOpen={setSearchOpen} />
    </>
  );
}
