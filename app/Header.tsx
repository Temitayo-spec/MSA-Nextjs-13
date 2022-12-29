'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './header.module.css';
import { BiChevronDown } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname(),
    [dropdownOne, setDropdownOne] = useState(false),
    [dropdownTwo, setDropdownTwo] = useState(false),
    [dropdownThree, setDropdownThree] = useState(false),
    toggleDropdownOne = () => {
      setDropdownOne(!dropdownOne);
    },
    toggleDropdownTwo = () => {
      setDropdownTwo(!dropdownTwo);
    },
    toggleDropdownThree = () => {
      setDropdownThree(!dropdownThree);
    },
    closeDropdowns = () => {
      setDropdownOne(false);
      setDropdownTwo(false);
      setDropdownThree(false);
    };

  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo__ctn}>
          <Image
            src="/images/msa-logo.jpg"
            alt="msa-logo"
            width={100}
            height={100}
          />
        </Link>
        <ul className={styles.nav__links}>
          <li className={pathname === '/' ? styles.active__link : ''}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === '/blog' ? styles.active__link : ''}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={pathname === '/gallery' ? styles.active__link : ''}>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li
            className={pathname === '/associations' ? styles.active__link : ''}
          >
            <Link href="/associations">Associations</Link>
          </li>
          <li className={styles.dropdown}>
            <div
              onClick={() => toggleDropdownOne()}
              className={`${styles.drop__box} ${
                dropdownOne ? styles.active : ''
              }`}
            >
              <p>Events</p>
              <BiChevronDown className={styles.dropdown__icon} />
            </div>
            <div
              className={`${styles.dropdown__content} ${
                dropdownOne ? styles.active : ''
              }`}
            >
              <Link onClick={closeDropdowns} href="/events">
                All Events
              </Link>
              <Link onClick={closeDropdowns} href="/activities/msa-events">
                MSA Events
              </Link>
              <Link
                onClick={closeDropdowns}
                href="/activities/msa-community-service"
              >
                MSA Community Service
              </Link>
              <Link onClick={closeDropdowns} href="/activities/msa-tutorials">
                MSA Tutorials
              </Link>
              <Link onClick={closeDropdowns} href="/activities/msa-sports">
                MSA Sports
              </Link>
            </div>
          </li>
          <li className={styles.dropdown}>
            <div
              onClick={() => toggleDropdownTwo()}
              className={`${styles.drop__box} ${
                dropdownTwo ? styles.active : ''
              }`}
            >
              <p>Leadership</p>
              <BiChevronDown className={styles.dropdown__icon} />
            </div>
            <div
              className={`${styles.dropdown__content} ${
                dropdownTwo ? styles.active : ''
              }`}
            >
              <Link onClick={closeDropdowns} href="/events">
                MSA Executives
              </Link>
              <Link onClick={closeDropdowns} href="/associations">
                Department Executives
              </Link>
              <Link onClick={closeDropdowns} href="/events/other">
                Class Representatives
              </Link>
            </div>
          </li>
          <li className={pathname === '/about' ? styles.active__link : ''}>
            <Link href="/about">About</Link>
          </li>
          <li className={pathname === '/contact' ? styles.active__link : ''}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.dropdown}>
            <div
              onClick={() => toggleDropdownThree()}
              className={`${styles.drop__box} ${
                dropdownThree ? styles.active : ''
              }`}
            >
              <p>Do Something</p>
              <BiChevronDown className={styles.dropdown__icon} />
            </div>
            <div
              className={`${styles.dropdown__content} ${
                dropdownThree ? styles.active : ''
              }`}
            >
              <Link onClick={closeDropdowns} href="/do-something/volunteer">
                Volunteer
              </Link>
              <Link onClick={closeDropdowns} href="/do-something/join-pr">
                Join PR Team
              </Link>
              <Link onClick={closeDropdowns} href="/do-somthing/sponsorship">
                Sponsorship
              </Link>
              <Link onClick={closeDropdowns} href="/do-something/donations">
                Donations
              </Link>
              <Link onClick={closeDropdowns} href="/do-something/msa-dues">
                MSA Dues
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
