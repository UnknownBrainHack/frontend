import React, { useState } from 'react';
import Image from 'next/image';
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
        <LogoWrapper>
          <Image
            src={'/images/brain-icon.png'}
            layout="fill"
            alt="Test Image"
          />
        </LogoWrapper>
        <InputField className="header__search" placeholder="Search" />
        <NavItems>
          <NavItem href="/" active={home}>Items</NavItem>
          <NavItem href="/add-items" active={addItems}>Add Items</NavItem>
          <NavItem href="/user" active={user}>Profile</NavItem>
        </NavItems>
      </Container>
      <Burger onClick={()=>setActive(!active)} active={active}>
        <span />
      </Burger>
      <MobileWrarrer active={active}>
        <NavItem onClick={()=>{setActive(false);}} href="/" active={home}>Items</NavItem>
        <NavItem onClick={()=>{setActive(false);}} href="/add-items" active={addItems}>Add Items</NavItem>
        <NavItem onClick={()=>{setActive(false);}} href="/user" active={user}>Profile</NavItem>
      </MobileWrarrer>
    </S.Header>
  );
}
