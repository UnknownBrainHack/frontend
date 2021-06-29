import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Droparea from '../../components/ui/Droparea';
import Dragon from '../../images/RussianDragon.png';
import Tabs from '../../components/ui/Tabs';
import Button from '../../components/ui/Button';
import * as S from './styled';
import { SubTitle } from '../Items/styled';
import ProductList from '../../components/common/ProductList/ProductList';

export default function Item() {
  const cards = [
    { title: 'Hey there', rate: 0.34, likes: 121 },
    { title: 'Hello, mate', rate: 0.11, likes: 41 },
    { title: 'Hi, friend', rate: 0.77, likes: 328 },
    { title: 'Good afternoon, pal', rate: 1.15, likes: 141 },
    { title: 'Aye-aye', rate: 0.54, likes: 451 },
  ];
  return (
    <>
      <motion.section
        className="section__container"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.2 }}
      >
        <section>
          <Droparea disabled image={Dragon} />
        </section>
        <section className="section__creator">
          <h4>Hey there</h4>
          <div className="creator__container">
            <p>Creator</p>
            <div className="creator__user">
              <Image src={Dragon} alt="" />
              <span className="creator__name">Mike Wazowski</span>
            </div>
          </div>
          <Tabs>
            <div title="Rates">
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
            </div>
            <div title="Experts">
              <div className="experts__wrapper">
                <div className="experts__image">
                  <Image src={Dragon} alt="" />
                </div>
                <div className="experts__user">
                  <span className="experts__name">Johnny Wreck</span>
                  <p>
                    Rate: <span>2 ETH</span>
                  </p>
                  <p>
                    Date: <span>2 July</span>
                  </p>
                </div>
              </div>
              <div className="experts__wrapper">
                <div className="experts__image">
                  <Image src={Dragon} alt="" />
                </div>
                <div className="experts__user">
                  <span className="experts__name">Johnny Wreck</span>
                  <p>
                    Rate: <span>2 ETH</span>
                  </p>
                  <p>
                    Date: <span>2 July</span>
                  </p>
                </div>
              </div>
              <div className="experts__wrapper">
                <div className="experts__image">
                  <Image src={Dragon} alt="" />
                </div>
                <div className="experts__user">
                  <span className="experts__name">Johnny Wreck</span>
                  <p>
                    Rate: <span>2 ETH</span>
                  </p>
                  <p>
                    Date: <span>2 July</span>
                  </p>
                </div>
              </div>
              <div className="experts__wrapper">
                <div className="experts__image">
                  <Image src={Dragon} alt="" />
                </div>
                <div className="experts__user">
                  <span className="experts__name">Johnny Wreck</span>
                  <p>
                    Rate: <span>2 ETH</span>
                  </p>
                  <p>
                    Date: <span>2 July</span>
                  </p>
                </div>
              </div>
            </div>
          </Tabs>
          <Button>Buy for 2.525 ETH</Button>
          <Button secondary>Rate item</Button>
        </section>
      </motion.section>
      <S.InfoBlock>
        <SubTitle>About Item</SubTitle>
        <S.Description>
          "The Ninth Wave" is one of the most famous paintings by the Russian
          marine painter of Armenian origin Ivan Aivazovsky, kept in the Russian
          Museum in St. Petersburg (inv. Zh-2202) [1]. Written in 1850.
        </S.Description>
        <S.Description>
          The painter depicts the sea after a very strong night storm and people
          who were shipwrecked. The sun's rays illuminate huge waves. The
          largest of them - the ninth shaft - is ready to fall on people trying
          to escape on the wreckage of the mast.
        </S.Description>
        <SubTitle>Items For You</SubTitle>
        <ProductList cards={cards}></ProductList>
      </S.InfoBlock>
    </>
  );
}
