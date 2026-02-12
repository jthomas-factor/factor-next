'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import NavMobile from './NavMobile';
import { links } from '@/lib/constant';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const activeStyle = `w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${
    headerActive ? 'translate-y-0' : '-translate-y-full'
  }`;

  const staticStyle = 'relative z-10';

  return (
    <div className={headerActive ? activeStyle : staticStyle}>
      <header className="bg-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden xl:flex items-center gap-12">
              <ul className="flex">
                {links.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="text-primary text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-primary"
                    >
                      <Link
                        href={`/${link.path}`}
                        className={`cursor-pointer text-base transition-colors duration-300 ${pathname === `/${link.path}` ? 'text-accent' : 'text-gray-700 hover:text-accent'} `}
                      >
                        {' '}
                        {link.name}{' '}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="xl:hidden">
              <NavMobile />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
