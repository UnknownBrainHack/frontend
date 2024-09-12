import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as S from './styled';
import { Container } from '../../ui/styled';
import { Burger, LogoWrapper, MobileWrarrer, NavItems } from './styled';
import InputField from '../../ui/InputField/InputField';
import NavItem from './components/NavItem/NavItem';

export default function Header() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    document.body.style.overflow = active?"hidden":"auto";
  }, [active]);

  const router = useRouter();
  const home = router.pathname === '/';
  const addItems = router.pathname === '/add-items';
  const user = router.pathname === '/user';
  return (
    <S.Header>
      <Container>
        <LogoWrapper>
          <NavItem href="/">
            <Image
              src={'/images/Black png.png'}
              layout="fill"
              alt="Test Image"
            />
          </NavItem>
        </LogoWrapper>
        <InputField className="header__search" placeholder="Search" />
        <NavItems>
          <NavItem href="/" active={home}>
            Arts
          </NavItem>
          <NavItem href="/add-items/" active={addItems}>
            Add Art
          </NavItem>
          <NavItem href="/profile/" active={user}>
            Profile
          </NavItem>
        </NavItems>
      </Container>
      <Burger onClick={() => setActive(!active)} active={active}>
        <span />
      </Burger>
      <MobileWrarrer active={active}>
        <NavItem
          onClick={() => {
            setActive(false);
          }}
          href="/"
          active={home}
        >
          Arts
        </NavItem>
        <NavItem
          onClick={() => {
            setActive(false);
          }}
          href="/add-items/"
          active={addItems}
        >
          Add Art
        </NavItem>
        <NavItem
          onClick={() => {
            setActive(false);
          }}
          href="/profile/"
          active={user}
        >
          Profile
        </NavItem>
      </MobileWrarrer>
    </S.Header>
  );
}
