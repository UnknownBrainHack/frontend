import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import * as S from './styled';
import { Container } from '../../ui/styled';
import { Burger, LogoWrapper, MobileWrarrer,NavItems } from "./styled";
import InputField from "../../ui/InputField/InputField";
import NavItem from "./components/NavItem/NavItem";

export default function Header() {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const home = router.pathname === '/';
  const addItems = router.pathname === '/add-items';
  const user = router.pathname === '/user';
  return (
    <S.Header>
      <Container>
        <LogoWrapper>
          <Image
            src={'/images/search-icon.svg'}
            layout="fill"
            alt="Test Image"
          />
        </LogoWrapper>
        <InputField type="search" className="header__search" placeholder="search" />
        <NavItems>
          <NavItem href="/" active={home}>Items</NavItem>
          <NavItem href="/add-items" active={addItems}>Add items</NavItem>
          <NavItem href="/user" active={user}>Profile</NavItem>
        </NavItems>
      </Container>
      <Burger onClick={()=>setActive(!active)} active={active}>
        <span />
      </Burger>
      <MobileWrarrer active={active}>
        <Link href="/">
          <a className={cx({ active: home })}>Items</a>
        </Link>
        <Link href="/add-items">
          <a className={cx({ active: addItems })}>Add items</a>
        </Link>
        <Link href="/user">
          <a className={cx({ active: user })}>Profile</a>
        </Link>
      </MobileWrarrer>
    </S.Header>
  );
}
