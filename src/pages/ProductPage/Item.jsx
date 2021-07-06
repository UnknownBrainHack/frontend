import React, { useState } from 'react';
import Droparea from '../../components/ui/Droparea';
import Dragon from '../../images/RussianDragon.png';
import Tabs from '../../components/ui/Tabs';
import Button from '../../components/ui/Button/Button';
import * as S from './styled';
import { SubTitle } from '../Items/styled';
import ProductList from '../../components/common/ProductList/ProductList';
import { LeftSection, RightSection } from '../AddItem/styled';
import Modal from '../../components/ui/Modal/Modal';
import {
  DescriptionWrapper,
  ProductContainer,
  ProductPageWrapper,
  ModalContainer,
} from './styled';
import { Container } from '../../components/ui/styled';
import InputField from '../../components/ui/InputField/InputField';

function Item({ products }) {
  const [open, setOpen] = useState(false);
  return (
    <ProductPageWrapper
      className="section__container"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
      transition={{ duration: 0.2 }}
    >
      <ProductContainer>
        <LeftSection>
          <Droparea disabled image={Dragon} />
        </LeftSection>
        <RightSection>
          <h4>Hey there</h4>
          <div className="creator__container">
            <p>Creator</p>
            <div className="creator__user">
              {/*<Image src={Dragon} alt="" />*/}
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
                  {/*<Image src={Dragon} alt="" />*/}
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
                  {/*<Image src={Dragon} alt="" />*/}
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
                  {/*<Image src={Dragon} alt="" />*/}
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
                  {/*<Image src={Dragon} alt="" />*/}
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
          <S.ActionButton
            className="creator__user"
            style={{ marginTop: 'auto' }}
          >
            <Button>Buy for 2.525 ETH</Button>
            <Button secondary onClick={() => setOpen(true)}>
              Rate item
            </Button>
            <Modal open={open} title="Rate Item" onClose={() => setOpen(false)}>
              <ModalContainer>
                <InputField
                  placeholder={'2.7 ETH'}
                  title={'Input Potential Price'}
                />
                <InputField
                  placeholder={'2 weeks'}
                  title={'Deadline of selling'}
                />
                <Button onClick={() => setOpen(false)}>Rate Item</Button>
                <Button onClick={() => setOpen(false)} simple>
                  Cancel
                </Button>
              </ModalContainer>
            </Modal>
          </S.ActionButton>
        </RightSection>
      </ProductContainer>
      <Container>
        <SubTitle>About Item</SubTitle>
        <DescriptionWrapper>
          <S.Description>
            "The Ninth Wave" is one of the most famous paintings by the Russian
            marine painter of Armenian origin Ivan Aivazovsky, kept in the
            Russian Museum in St. Petersburg (inv. Zh-2202) [1]. Written in
            1850. <br />
            <br />
            The painter depicts the sea after a very strong night storm and
            people who were shipwrecked. The sun's rays illuminate huge waves.
            The largest of them - the ninth shaft - is ready to fall on people
            trying to escape on the wreckage of the mast.
          </S.Description>
        </DescriptionWrapper>
        <SubTitle>Items For You</SubTitle>
        <ProductList cards={products} slider={{ overflow: true }}></ProductList>
      </Container>
    </ProductPageWrapper>
  );
}

Item.getInitialProps = async () => {
  const [products = []] = await Promise.all([
    (async () => {
      const data = await fetch(`http://localhost:3000/tmp/products.json`);
      return data.json();
    })(),
  ]);
  return {
    products,
  };
};

export default Item;
