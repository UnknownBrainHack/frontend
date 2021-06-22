import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

import image from '../images/search-icon.svg';
import InputField from './ui/InputField';

export default function Header() {
  const router = useRouter();
  const home = router.pathname === '/';
  const addItems = router.pathname === '/items';
  const user = router.pathname === '/user';
  return (
    <header>
      <div className="header__user-profile">
        <Image src={image} alt="Test Image" />
      </div>
      <input type="search" className="header__search" placeholder="search" />
      <Link href="/">
        <a className={cx({ active: home })}>Items</a>
      </Link>
      <Link href="/items">
        <a className={cx({ active: addItems })}>Add items</a>
      </Link>
      <Link href="/user">
        <a className={cx({ active: user })}>Profile</a>
      </Link>
    </header>
  );
}
