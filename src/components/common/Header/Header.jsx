import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Link passHref href="/">
          <LogoWrapper>
            <Image
              src={'/images/brain-icon.png'}
              layout="fill"
              alt="Test Image"
            />
          </LogoWrapper>
        </Link>
        <InputField className="header__search" placeholder="Search" />
        <NavItems>
          <NavItem href="/" active={home}>Items</NavItem>
          <NavItem href="/add-items/" active={addItems}>Add Items</NavItem>
          <NavItem href="/profile/" active={user}>Profile</NavItem>
        </NavItems>
      </Container>
      <Burger onClick={()=>setActive(!active)} active={active}>
        <span />
      </Burger>
      <MobileWrarrer active={active}>
        <NavItem onClick={()=>{setActive(false);}} href="/" active={home}>Items</NavItem>
        <NavItem onClick={()=>{setActive(false);}} href="/add-items/" active={addItems}>Add Items</NavItem>
        <NavItem onClick={()=>{setActive(false);}} href="/profile/" active={user}>Profile</NavItem>
      </MobileWrarrer>
    </S.Header>
  );
}
